import { H3Event } from "h3";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { logger } from "../services/logger/logger";

export const handleError = (event: H3Event, err: unknown) => {
  logger.log("** SERVER ERROR **", {
    message: (err as Error).message,
    timestamp: new Date(),
    path: event.path,
    handled: false,
  });

  if (err instanceof HTTPException) {
    setResponseStatus(event, err.status_code || 400);

    return {
      ...err,
      path: event.path,
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
      path: event.path,
      handled: true,
    };
  }

  if (err instanceof jwt.TokenExpiredError) {
    setResponseStatus(event, 401);

    return {
      message: "Your session has expired. Please login, and try again",
      status_code: 401,
      timestamp: new Date(),
      path: event.path,
      handled: true,
    };
  }

  if (err instanceof jwt.JsonWebTokenError) {
    setResponseStatus(event, 401);

    return {
      message: `JWT Error: "${err.message}"`,
      status_code: 401,
      timestamp: new Date(),
      path: event.path,
      handled: true,
    };
  }

  setResponseStatus(event, 500);

  // TODO: collect logs and implements the logic to notify using email this error

  return {
    message:
      "We're sorry, an unexpected internal error has occurred. Our team has been notified and is actively investigating.",
    timestamp: new Date(),
    path: event.path,
    handled: false,
  };
};
