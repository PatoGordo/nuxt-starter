import { a as defineEventHandler, r as readBody, H as HTTPException, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
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

const index_delete = defineEventHandler(async (event) => {
  try {
    const currentSessionLink = event.context.token_data.link;
    const body = await readBody(event);
    const validation = z.object({
      link: z.string().length(24)
    }).strict();
    validation.parse(body);
    if (currentSessionLink === body.link) {
      throw new HTTPException({
        message: "You cannot finish your current session!",
        status_code: 403
      });
    }
    const session = await prismaClient.session.findFirst({
      where: {
        user_id: event.context.user.id,
        link: body.link
      }
    });
    if (!session) {
      return handleResult({});
    }
    await prismaClient.session.delete({
      where: {
        id: session == null ? void 0 : session.id
      }
    });
    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});

export { index_delete as default };
//# sourceMappingURL=index.delete2.mjs.map
