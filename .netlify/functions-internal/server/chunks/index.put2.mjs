import { a as defineEventHandler, r as readBody, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { h as handleResult } from './handle-result.mjs';
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

const index_put = defineEventHandler(async (event) => {
  try {
    const userId = event.context.user.id;
    const body = await readBody(event);
    const validation = z.object({
      name: z.string().optional()
    }).strict();
    validation.parse(body);
    await prismaClient.user.update({
      where: {
        id: userId
      },
      data: {
        ...body
      }
    });
    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_put as default };
//# sourceMappingURL=index.put2.mjs.map
