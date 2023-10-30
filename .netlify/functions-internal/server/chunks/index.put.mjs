import { a as defineEventHandler, r as readBody, H as HTTPException, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
import { z } from 'zod';
import { r as roleGuard } from './role.guard.mjs';
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

const index_put = defineEventHandler(async (event) => {
  var _a;
  try {
    roleGuard(event, ["admin", "user"]);
    const body = await readBody(event);
    const targetUserId = (_a = event.context.params) == null ? void 0 : _a.id;
    if (targetUserId === event.context.user.id) {
      throw new HTTPException({
        message: "You can't edit your own admin user!",
        status_code: 403
      });
    }
    const validation = z.object({
      name: z.string().optional(),
      status: z.enum(["approved", "restricted"]).optional(),
      email: z.string().email().optional(),
      role: z.enum(["admin", "editor", "user"]).optional()
    }).strict();
    validation.parse(body);
    await prismaClient.user.update({
      where: {
        id: targetUserId
      },
      data: {
        ...body
      },
      select: {
        id: true
      }
    });
    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
