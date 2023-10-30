import { a as defineEventHandler, r as readBody, g as getRequestProtocol, b as getRequestHost, H as HTTPException, p as prismaClient, h as handleError } from './nitro/netlify.mjs';
import { g as generateID } from './generate-id.mjs';
import { m as mailTransporter, a as appConfig } from './app.mjs';
import { h as handleResult } from './handle-result.mjs';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import moment from 'moment';
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

const changePassword_patch = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const protocol = getRequestProtocol(event);
    const url = getRequestHost(event);
    const validation = z.object({
      old_password: z.string().min(8).max(255),
      new_password: z.string().min(8).max(255),
      finish_sessions: z.boolean().optional()
    }).strict();
    validation.parse(body);
    const isPasswordTheSame = bcrypt.compareSync(
      body.old_password,
      event.context.user.password
    );
    if (!isPasswordTheSame) {
      throw new HTTPException({
        message: "Your current password does not meet with the sent one in the request!"
      });
    }
    const newPasswordHash = bcrypt.hashSync(body.new_password, 12);
    const token = generateID(36);
    await prismaClient.passwordChange.create({
      data: {
        old_password: event.context.user.password,
        new_password: newPasswordHash,
        token,
        status: "executed",
        is_reset_password: false,
        expires_at: moment().add(7, "d").toDate(),
        user: {
          connect: {
            id: event.context.user.id
          }
        }
      },
      select: {
        id: true
      }
    });
    await prismaClient.user.update({
      where: {
        id: event.context.user.id
      },
      data: {
        password: newPasswordHash
      },
      select: {
        id: true
      }
    });
    if (body == null ? void 0 : body.finish_sessions) {
      await prismaClient.session.deleteMany({
        where: {
          user_id: event.context.user.id,
          link: {
            not: event.context.token_data.link
          }
        }
      });
    }
    const emailTemplate = `
    <h2>Your password has been changed!</h2>
    <p>If it was't you that request it, please click in the link below to revert this action.</p>
    <p>If it was you, please ignore this email.</p>
    <br />
    <a href="${protocol}://${url}/auth/revert-password-change?token=${token}">Revert password change</a>
    `;
    await mailTransporter.sendMail({
      to: event.context.user.email,
      from: process.env.MAIL_USERNAME,
      subject: `${appConfig.appName} - Your password has been changed!`,
      html: emailTemplate,
      priority: "high"
    });
    return handleResult({
      message: "Your password was successfully changed!"
    });
  } catch (error) {
    return handleError(event, error);
  }
});

export { changePassword_patch as default };
//# sourceMappingURL=change-password.patch.mjs.map
