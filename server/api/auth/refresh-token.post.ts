import { z } from "zod";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const validation = z
      .object({
        refresh_token: z.string(),
      })
      .strict();

    validation.parse(body);

    const data = jwt.verify(
      body.refresh_token,
      String(process.env.REFRESH_TOKEN_JWT_SECRET)
    );

    if (typeof data === "string") {
      throw new HTTPException({
        message: "Your session has an invalid signature!",
        status_code: 401,
      });
    }

    const session = await prismaClient.session.findFirst({
      where: {
        link: data.link,
        expires_at: {
          gte: new Date(),
        },
      },
      select: {
        link: true,
        user_id: true,
        id: true,
      },
    });

    // Users auto delete other users expired sessions
    await prismaClient.session.deleteMany({
      where: {
        expires_at: {
          lte: new Date(),
        },
      },
    });

    if (!session) {
      throw new HTTPException({
        message: "Your session was expired! Try to login again.",
        status_code: 401,
      });
    }

    const bearerToken = jwt.sign(
      {
        user_id: session.user_id,
        link: session.link,
      },
      String(process.env.BEARER_TOKEN_JWT_SECRET),
      {
        expiresIn: "1h",
      }
    );

    return handleResult({
      token: bearerToken,
    });
  } catch (error) {
    return handleError(event, error);
  }
});
