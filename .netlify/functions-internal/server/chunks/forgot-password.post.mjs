import { a as defineEventHandler, r as readBody, b as getRequestHost, g as getRequestProtocol, p as prismaClient, H as HTTPException, h as handleError } from './nitro/netlify.mjs';
import { g as generateID } from './generate-id.mjs';
import { m as mailTransporter, a as appConfig } from './app.mjs';
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
import 'nodemailer';

const forgotPassword_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const url = getRequestHost(event);
    const protocol = getRequestProtocol(event);
    const validation = z.object({
      email: z.string().email()
    }).strict();
    validation.parse(body);
    const user = await prismaClient.user.findFirst({
      where: {
        email: body.email,
        deleted: false,
        status: "approved"
      },
      select: {
        id: true,
        password: true
      }
    });
    if (!user) {
      throw new HTTPException({
        message: "This email isn't registered in the app."
      });
    }
    const token = generateID(36);
    await prismaClient.passwordChange.create({
      data: {
        old_password: user.password,
        token,
        expires_at: moment().add(1, "h").toDate(),
        is_reset_password: true,
        user: {
          connect: {
            id: user.id
          }
        }
      },
      select: {
        id: true
      }
    });
    await prismaClient.passwordChange.deleteMany({
      where: {
        expires_at: {
          lte: /* @__PURE__ */ new Date()
        },
        status: "not_executed"
      }
    });
    const emailTemplate = `
    <h2>Click in the like below to reset your password!</h2>
    <p>This link will expires in one hour(1h).</p>
    <br />
    <a href="${protocol}://${url}/auth/reset-password?token=${token}">Reset password</a>
    `;
    await mailTransporter.sendMail({
      to: body.email,
      from: process.env.MAIL_USERNAME,
      subject: `${appConfig.appName} - Reset password`,
      html: emailTemplate
    });
    return handleResult({
      message: "An email containing a reset password link was sent to your email! Access it to reset your password."
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { forgotPassword_post as default };
//# sourceMappingURL=forgot-password.post.mjs.map
