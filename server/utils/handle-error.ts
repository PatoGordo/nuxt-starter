import { H3Event } from "h3";

export const handleError = (event: H3Event, err: unknown) => {
  if (err instanceof HTTPException) {
    setResponseStatus(event, err.status_code || 400);

    return {
      ...err,
      path: getRequestPath(event),
      handled: true,
    };
  } else {
    setResponseStatus(event, 400);

    return {
      message: (err as Error).message,
      error: err as Error,
      timestamp: new Date(),
      path: getRequestPath(event),
      handled: true,
    };
  }
};
