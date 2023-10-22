import jwt from "jsonwebtoken";
import { ErrorCodes } from "~/constants/error-codes";

export const excludePaths = [
  // Add below all the routes that should be excluded from auth middleware
  "/auth",
];

export const forceIncludePaths = [
  // Add below all the routes that should be force included from auth middleware
  "/auth/sign-out",
  "/auth/change-password",
];

export default defineEventHandler(async (event) => {
  try {
    const path = event.path;

    if (path.includes("/api/")) {
      const pathIsExcluded =
        excludePaths.filter((v) => path.includes(v)).length >= 1;
      const pathIsForceIncluded =
        forceIncludePaths.filter((v) => path.includes(v)).length >= 1;

      if (!pathIsExcluded || pathIsForceIncluded) {
        const bearerTokenHeader =
          getHeader(event, "Authorization") ||
          getHeader(event, "authorization") ||
          getQuery(event)?.bearer_token;

        if (!bearerTokenHeader) {
          throw new HTTPException({
            message: "You should to be loggedin to do this action!",
            status_code: 401,
            error_code: ErrorCodes.SESSION_EXPIRED,
          });
        }

        const token = String(bearerTokenHeader).split("Bearer")[1].trim();

        if (!bearerTokenHeader) {
          throw new HTTPException({
            message: "You should to be loggedin to do this action!",
            status_code: 401,
            error_code: ErrorCodes.SESSION_EXPIRED,
          });
        }

        const data = jwt.verify(
          token,
          String(process.env.BEARER_TOKEN_JWT_SECRET),
        );

        if (typeof data === "string") {
          throw new HTTPException({
            message: "Your session has an invalid signature!",
            status_code: 401,
            error_code: ErrorCodes.SESSION_EXPIRED,
          });
        }

        await prismaClient.session.deleteMany({
          where: {
            expires_at: {
              lte: new Date(),
            },
          },
        });

        const user = await prismaClient.user.findFirst({
          where: {
            id: data.user_id,
            deleted: false,
            sessions: {
              some: {
                link: data.link,
              },
            },
          },
        });

        if (!user) {
          throw new HTTPException({
            message: "Your session was expired! Try to login again.",
            status_code: 401,
            error_code: ErrorCodes.SESSION_EXPIRED,
          });
        }

        if (user?.status !== "approved") {
          throw new HTTPException({
            message:
              "Your account is currently restricted! Contact the support to know the reason",
            status_code: 403,
          });
        }

        event.context.user = user;
        event.context.token = token;
        event.context.token_data = data;
      } else {
        event.context.user = null;
        event.context.token = null;
        event.context.token_data = null;
      }
    }
  } catch (error) {
    return handleError(event, error);
  }
});
