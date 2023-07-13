import { z } from "zod";
import { prismaClient } from "../../services";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const validation = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(8).max(255),
    });

    validation.parse(body);

    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (emailAlreadyExists) {
      throw new HTTPException({
        message: "Email already in use! Use another or login with this email.",
      });
    }

    const passwordHash = bcrypt.hashSync(body.password, 12);

    const user = await prismaClient.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: passwordHash,
      },
    });

    const linking = "";

    const bearerToken = "";

    return handleResult({
      ok: true,
    });
  } catch (error) {
    return handleError(event, error);
  }
});
