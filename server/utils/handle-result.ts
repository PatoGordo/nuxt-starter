import { H3Event } from "h3";

export const handleResult = (
  result: unknown,
  event?: H3Event,
  statusCode?: number
) => {
  event && statusCode && setResponseStatus(event, statusCode || 200);

  return {
    result,
  };
};
