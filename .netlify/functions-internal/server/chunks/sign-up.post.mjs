import { a as defineEventHandler, r as readBody, p as prismaClient, H as HTTPException, c as getRequestHeader, s as setResponseStatus, h as handleError } from './nitro/netlify.mjs';
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

const signUp_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(8).max(255)
    }).strict();
    validation.parse(body);
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: body.email
      }
    });
    if (emailAlreadyExists) {
      throw new HTTPException({
        message: "Email already in use! Use another or login with this one."
      });
    }
    const passwordHash = bcrypt.hashSync(body.password, 12);
    const user = await prismaClient.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: passwordHash
      }
    });
    const link = generateID(24);
    const bearerToken = jwt.sign(
      {
        user_id: user.id,
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
            id: user.id
          }
        },
        expires_at: moment().add(3, "d").toDate()
      }
    });
    setResponseStatus(event, 201);
    return handleResult({
      token: bearerToken,
      refresh_token: refreshToken,
      user: {
        ...user,
        password: "protected-data"
      }
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { signUp_post as default };
//# sourceMappingURL=sign-up.post.mjs.map
