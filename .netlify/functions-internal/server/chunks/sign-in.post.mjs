import { a as defineEventHandler, r as readBody, p as prismaClient, H as HTTPException, c as getRequestHeader, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { g as generateID } from './generate-id.mjs';
import { a as authConfig } from './auth.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import '@prisma/client';
import 'configcat-node';
import 'memory-cache';
import 'perf_hooks';
import 'xss';
import 'ms';

const signIn_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = z.object({
      email: z.string().email(),
      password: z.string().min(8).max(255)
    }).strict();
    validation.parse(body);
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: body.email,
        deleted: false
      }
    });
    if (!userExists) {
      throw new HTTPException({
        message: "Email or Password is incorrect!"
      });
    }
    if (userExists.status !== "approved") {
      throw new HTTPException({
        message: "Your account is currently restricted! Contact the support to know the reason",
        status_code: 403
      });
    }
    const passwordIsTheSame = bcrypt.compareSync(
      body.password,
      userExists.password
    );
    if (!passwordIsTheSame) {
      throw new HTTPException({
        message: "Email or Password is incorrect!"
      });
    }
    const link = generateID(24);
    const bearerToken = jwt.sign(
      {
        user_id: userExists.id,
        link
      },
      String(process.env.BEARER_TOKEN_JWT_SECRET),
      {
        expiresIn: authConfig.sessionDuration / 1e3
      }
    );
    const refreshToken = jwt.sign(
      {
        link
      },
      String(process.env.REFRESH_TOKEN_JWT_SECRET),
      {
        expiresIn: authConfig.refreshTokenDuration / 1e3
      }
    );
    await prismaClient.session.create({
      data: {
        link,
        user_agent: getRequestHeader(event, "User-Agent") || "N/A",
        user: {
          connect: {
            id: userExists.id
          }
        },
        expires_at: moment().add(3, "d").toDate()
      },
      select: {
        id: true
      }
    });
    return handleResult({
      token: bearerToken,
      refresh_token: refreshToken,
      user: {
        ...userExists,
        password: "protected-data"
      }
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { signIn_post as default };
//# sourceMappingURL=sign-in.post.mjs.map
