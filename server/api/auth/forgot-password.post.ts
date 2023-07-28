import moment from "moment";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const url = getRequestHost(event);
    const protocol = getRequestProtocol(event);

    const validation = z
      .object({
        email: z.string().email(),
      })
      .strict();

    validation.parse(body);

    const user = await prismaClient.user.findFirst({
      where: {
        email: body.email,
        deleted: false,
        status: "approved",
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      throw new HTTPException({
        message: "This email isn't registered in the app.",
      });
    }

    const token = generateID(36);

    await prismaClient.passwordChange.create({
      data: {
        old_password: user.password,
        token,
        expires_at: moment().add(1, "h").toDate(),
        is_reset_password: true,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
      },
    });

    // Users auto delete other users not executed expired password changes
    await prismaClient.passwordChange.deleteMany({
      where: {
        expires_at: {
          lte: new Date(),
        },
        status: "not_executed",
      },
    });

    const emailTemplate = `
    <h2>Click in the like below to reset your password!</h2>
    <p>This link will expires in one hour(1h).</p>
    <br />
    <a href="${protocol}://${url}/auth/reset-password?token=${token}">Reset password</a>
    `;

    await mailTransporter.sendMail({
      to: body.email,
      from: process.env.MAIL_USERNAME,
      subject: `${process.env.APP_NAME} - Reset password`,
      html: emailTemplate,
    });

    return handleResult({
      message:
        "An email containing a reset password link was sent to your email! Access it to reset your password.",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
