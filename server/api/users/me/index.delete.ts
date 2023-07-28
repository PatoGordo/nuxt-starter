import { z } from "zod";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.user.id;

    const body = await readBody(event);

    const validation = z
      .object({
        password: z.string().min(8).max(255),
      })
      .strict();

    validation.parse(body);

    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return handleResult({});
    }

    const isPasswordTheSame = bcrypt.compareSync(body.password, user?.password);

    if (!isPasswordTheSame) {
      throw new HTTPException({
        message: "Password is incorrect!",
      });
    }

    validation.parse(body);

    await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        deleted: true,
        email: "!deleted!" + user.email,
      },
    });

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
