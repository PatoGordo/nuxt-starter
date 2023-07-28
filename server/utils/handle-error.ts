import { H3Event } from "h3";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

export const handleError = (event: H3Event, err: unknown) => {
  if (err instanceof HTTPException) {
    setResponseStatus(event, err.status_code || 400);

    return {
      ...err,
      path: getRequestPath(event),
      handled: true,
    };
  }

  if (err instanceof ZodError) {
    setResponseStatus(event, 400);

    const errors = err.errors.map((e) => ({
      path: e.path.join("."),
      message: `Error in the field "${e.path.join(".")}": ${e.message}`,
    }));

    return {
      message: errors[0].message,
      status_code: 400,
      timestamp: new Date(),
      path: getRequestPath(event),
      handled: true,
    };
  }

  if (err instanceof jwt.TokenExpiredError) {
    setResponseStatus(event, 401);

    return {
      message: "Your session has expired. Please login, and try again",
      status_code: 401,
      timestamp: new Date(),
      path: getRequestPath(event),
      handled: true,
    };
  }

  if (err instanceof jwt.JsonWebTokenError) {
    setResponseStatus(event, 401);

    return {
      message: `JWT Error: "${err.message}"`,
      status_code: 401,
      timestamp: new Date(),
      path: getRequestPath(event),
      handled: true,
    };
  }

  setResponseStatus(event, 400);

  return {
    message: (err as Error).message,
    timestamp: new Date(),
    path: getRequestPath(event),
    handled: false,
  };
};
