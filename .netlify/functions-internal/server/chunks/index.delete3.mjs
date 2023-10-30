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

const index_delete = defineEventHandler(async (event) => {
  try {
    const userId = event.context.user.id;
    const body = await readBody(event);
    const validation = z.object({
      password: z.string().min(8).max(255)
    }).strict();
    validation.parse(body);
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId
      }
    });
    if (!user) {
      return handleResult({});
    }
    const isPasswordTheSame = bcrypt.compareSync(body.password, user == null ? void 0 : user.password);
    if (!isPasswordTheSame) {
      throw new HTTPException({
        message: "Password is incorrect!"
      });
    }
    validation.parse(body);
    await prismaClient.user.update({
      where: {
        id: user.id
      },
      data: {
        deleted: true,
        email: "!deleted!" + user.email
      }
    });
    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_delete as default };
//# sourceMappingURL=index.delete3.mjs.map
