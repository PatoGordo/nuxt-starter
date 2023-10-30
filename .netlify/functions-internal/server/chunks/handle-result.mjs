import { s as setResponseStatus } from './nitro/netlify.mjs';

const handleResult = (result, event, statusCode) => {
  event && statusCode && setResponseStatus(event, statusCode || 200);
  return {
    result
  };
};

export { handleResult as h };
//# sourceMappingURL=handle-result.mjs.map
