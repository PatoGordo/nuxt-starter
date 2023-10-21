import { z } from "zod";
import bcrypt from "bcryptjs";
import { appConfig } from "~/config/app";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const url = getRequestHost(event);
    const protocol = getRequestProtocol(event);

    const validation = z
      .object({
        token: z.string().length(36),
        new_password: z.string().min(8).max(255),
      })
      .strict();

    validation.parse(body);

    const passwordChangeRequest = await prismaClient.passwordChange.findFirst({
      where: {
        token: body.token,
        expires_at: {
          gte: new Date(),
        },
        status: "not_executed",
      },
      select: {
        id: true,
      },
    });

    if (!passwordChangeRequest) {
      throw new HTTPException({
        message: `Reset password link propabily is invalid, expired or already used!`,
      });
    }

    const newPasswordHash = bcrypt.hashSync(body.new_password, 12);

    const res = await prismaClient.passwordChange.update({
      where: {
        id: passwordChangeRequest.id,
      },
      data: {
        new_password: newPasswordHash,
        status: "executed",
        user: {
          update: {
            password: newPasswordHash,
          },
        },
      },
      select: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });

    const emailTemplate = `
    <h2>Your password has been changed!</h2>
    <p>If it was not you, use the link below to revert it.</p>
    <p>This link will expires in seven days(7d).</p>
    <br />
    <a href="${protocol}://${url}/auth/revert-password-change?token=${body.token}">Revert password change password</a>
    `;

    await mailTransporter.sendMail({
      to: res.user.email,
      from: process.env.MAIL_USERNAME,
      subject: `${appConfig.appName} - Your password has been changed`,
      html: emailTemplate,
    });

    return handleResult({
      message:
        "Password has been successfully reseted! You can login now with this new password.",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
