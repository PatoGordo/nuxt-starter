import { a as defineEventHandler, r as readBody, H as HTTPException, E as ErrorCodes, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
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

const refreshToken_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = z.object({
      refresh_token: z.string()
    }).strict();
    validation.parse(body);
    const data = jwt.verify(
      body.refresh_token,
      String(process.env.REFRESH_TOKEN_JWT_SECRET)
    );
    if (typeof data === "string") {
      throw new HTTPException({
        message: "Your session has an invalid signature!",
        status_code: 401,
        error_code: ErrorCodes.SESSION_EXPIRED
      });
    }
    const session = await prismaClient.session.findFirst({
      where: {
        link: data.link,
        expires_at: {
          gte: /* @__PURE__ */ new Date()
        }
      },
      select: {
        link: true,
        user_id: true,
        id: true
      }
    });
    await prismaClient.session.deleteMany({
      where: {
        expires_at: {
          lte: /* @__PURE__ */ new Date()
        }
      }
    });
    if (!session) {
      throw new HTTPException({
        message: "Your session was expired! Try to login again.",
        status_code: 401,
        error_code: ErrorCodes.SESSION_EXPIRED
      });
    }
    const bearerToken = jwt.sign(
      {
        user_id: session.user_id,
        link: session.link
      },
      String(process.env.BEARER_TOKEN_JWT_SECRET),
      {
        expiresIn: authConfig.sessionDuration / 1e3
      }
    );
    return handleResult({
      token: bearerToken
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { refreshToken_post as default };
//# sourceMappingURL=refresh-token.post.mjs.map
