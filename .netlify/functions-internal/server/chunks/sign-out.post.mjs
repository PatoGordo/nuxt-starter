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

const signOut_post = defineEventHandler(async (event) => {
  try {
    const link = event.context.token_data.link;
    const session = await prismaClient.session.findFirst({
      where: {
        link
      },
      select: {
        id: true
      }
    });
    if (session) {
      await prismaClient.session.delete({
        where: {
          id: session.id
        }
      });
    }
    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});

export { signOut_post as default };
//# sourceMappingURL=sign-out.post.mjs.map
