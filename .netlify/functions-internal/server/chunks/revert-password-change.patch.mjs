import { a as defineEventHandler, r as readBody, p as prismaClient, H as HTTPException, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
import moment from 'moment';
import { z } from 'zod';
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

const revertPasswordChange_patch = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = z.object({
      token: z.string().length(36)
    }).strict();
    validation.parse(body);
    const passwordChange = await prismaClient.passwordChange.findFirst({
      where: {
        token: body.token
      }
    });
    if (moment().diff(moment(passwordChange == null ? void 0 : passwordChange.created_at), "days") > 7) {
      throw new HTTPException({
        message: "This revert password change link expired! Please reset your password manually."
      });
    }
    await prismaClient.user.update({
      where: {
        id: passwordChange == null ? void 0 : passwordChange.user_id
      },
      data: {
        password: passwordChange == null ? void 0 : passwordChange.old_password
      }
    });
    await prismaClient.session.deleteMany({
      where: {
        user_id: passwordChange == null ? void 0 : passwordChange.user_id
      }
    });
    return handleResult({
      message: "Password changed, successfully reverted! Please login and change your password to stay secure."
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { revertPasswordChange_patch as default };
//# sourceMappingURL=revert-password-change.patch.mjs.map
