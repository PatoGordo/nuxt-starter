import { H3Event } from "h3";
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

  setResponseStatus(event, 400);

  return {
    message: (err as Error).message,
    error: err as Error,
    timestamp: new Date(),
    path: getRequestPath(event),
    handled: false,
  };
};
