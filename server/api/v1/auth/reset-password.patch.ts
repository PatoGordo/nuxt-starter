import { z } from "zod";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

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

    await prismaClient.passwordChange.update({
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

    return handleResult({
      message:
        "Password has been successfully reseted! You can login now with this new password.",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
