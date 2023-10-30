import { a as defineEventHandler, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  try {
    roleGuard(event, ["admin", "editor", "user"]);
    const targetUserId = (_a = event.context.params) == null ? void 0 : _a.id;
    const user = await prismaClient.user.findFirst({
      where: {
        id: targetUserId
      }
    });
    return handleResult(
      user ? {
        ...user,
        password: "protected-data"
      } : user
    );
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
