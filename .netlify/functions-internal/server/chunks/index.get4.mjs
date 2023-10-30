import { a as defineEventHandler, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
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
  try {
    const sessions = await prismaClient.session.findMany({
      where: {
        user_id: event.context.user.id
      }
    });
    return handleResult(sessions);
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
