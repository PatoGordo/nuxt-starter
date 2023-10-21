import moment from "moment";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const validation = z
      .object({
        token: z.string().length(36),
      })
      .strict();

    validation.parse(body);

    const passwordChange = await prismaClient.passwordChange.findFirst({
      where: {
        token: body.token,
      },
    });

    if (moment().diff(moment(passwordChange?.created_at), "days") > 7) {
      throw new HTTPException({
        message:
          "This revert password change link expired! Please reset your password manually.",
      });
    }

    await prismaClient.user.update({
      where: {
        id: passwordChange?.user_id,
      },
      data: {
        password: passwordChange?.old_password,
      },
    });

    await prismaClient.session.deleteMany({
      where: {
        user_id: passwordChange?.user_id,
      },
    });

    return handleResult({
      message:
        "Password changed, successfully reverted! Please login and change your password to stay secure.",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
