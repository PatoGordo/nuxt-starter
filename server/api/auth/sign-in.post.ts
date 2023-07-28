import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";
import { prismaClient } from "../../services";
import { generateID } from "../../utils/generate-id";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const validation = z
      .object({
        email: z.string().email(),
        password: z.string().min(8).max(255),
      })
      .strict();

    validation.parse(body);

    const userExists = await prismaClient.user.findFirst({
      where: {
        email: body.email,
        deleted: false,
      },
    });

    if (!userExists) {
      throw new HTTPException({
        message: "Email or Password is incorrect!",
      });
    }

    if (userExists.status !== "approved") {
      throw new HTTPException({
        message:
          "Your account is currently restricted! Contact the support to know the reason",
        status_code: 403,
      });
    }

    const passwordIsTheSame = bcrypt.compareSync(
      body.password,
      userExists.password,
    );

    if (!passwordIsTheSame) {
      throw new HTTPException({
        message: "Email or Password is incorrect!",
      });
    }

    const link = generateID(24);

    const bearerToken = jwt.sign(
      {
        user_id: userExists.id,
        link,
      },
      String(process.env.BEARER_TOKEN_JWT_SECRET),
      {
        expiresIn: "1h",
      },
    );

    const refreshToken = jwt.sign(
      {
        link,
      },
      String(process.env.REFRESH_TOKEN_JWT_SECRET),
      {
        expiresIn: "3d",
      },
    );

    await prismaClient.session.create({
      data: {
        link,
        user_agent: getRequestHeader(event, "User-Agent") || "N/A",
        user: {
          connect: {
            id: userExists.id,
          },
        },
        expires_at: moment().add(3, "d").toDate(),
      },
      select: {
        id: true,
      },
    });

    return handleResult({
      token: bearerToken,
      refresh_token: refreshToken,
      user: {
        ...userExists,
        password: "protected-data",
      },
    });
  } catch (error) {
    return handleError(event, error);
  }
});
