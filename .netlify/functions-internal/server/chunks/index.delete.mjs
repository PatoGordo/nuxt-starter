import { a as defineEventHandler, H as HTTPException, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
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
import 'zod';
import 'configcat-node';
import 'memory-cache';
import 'perf_hooks';
import 'xss';

const index_delete = defineEventHandler(async (event) => {
  var _a;
  try {
    roleGuard(event, ["admin", "editor", "user"]);
    const targetUserId = (_a = event.context.params) == null ? void 0 : _a.id;
    if (targetUserId === event.context.user.id) {
      throw new HTTPException({
        message: "You can't delete your own admin user!",
        status_code: 403
      });
    }
    const user = await prismaClient.user.findFirst({
      where: {
        id: targetUserId
      }
    });
    if (!user) {
      return handleResult({});
    }
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
//# sourceMappingURL=index.delete.mjs.map
