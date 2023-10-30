import { a as defineEventHandler, r as readBody, p as prismaClient, H as HTTPException, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
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
import 'jsonwebtoken';
import 'configcat-node';
import 'memory-cache';
import 'perf_hooks';
import 'xss';

const resetPassword_patch = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = z.object({
      token: z.string().length(36),
      new_password: z.string().min(8).max(255)
    }).strict();
    validation.parse(body);
    const passwordChangeRequest = await prismaClient.passwordChange.findFirst({
      where: {
        token: body.token,
        expires_at: {
          gte: /* @__PURE__ */ new Date()
        },
        status: "not_executed"
      },
      select: {
        id: true
      }
    });
    if (!passwordChangeRequest) {
      throw new HTTPException({
        message: `Reset password link propabily is invalid, expired or already used!`
      });
    }
    const newPasswordHash = bcrypt.hashSync(body.new_password, 12);
    await prismaClient.passwordChange.update({
      where: {
        id: passwordChangeRequest.id
      },
      data: {
        new_password: newPasswordHash,
        status: "executed",
        user: {
          update: {
            password: newPasswordHash
          }
        }
      },
      select: {
        user: {
          select: {
            email: true
          }
        }
      }
    });
    return handleResult({
      message: "Password has been successfully reseted! You can login now with this new password."
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { resetPassword_patch as default };
//# sourceMappingURL=reset-password.patch.mjs.map
