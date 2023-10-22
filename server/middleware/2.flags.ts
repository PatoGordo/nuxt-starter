import { ErrorCodes } from "~/constants/error-codes";

export default defineEventHandler(async (event) => {
  try {
    const path = event.path;

    const feature = flags.find(
      (flag) => flag.urls.filter((url) => path.includes(url)).length > 0,
    );

    if (path.includes("/api/") && feature) {
      const isFeatureActive = await feature?.active();

      if (!isFeatureActive) {
        throw new HTTPException({
          message:
            feature?.message ||
            `The "${feature?.feature}" feature is not available now! We are working on it.`,
          error_code: ErrorCodes.FEATURE_FLAG_ENABLE,
          status_code: 503,
        });
      }
    }
  } catch (error) {
    return handleError(event, error);
  }
});
