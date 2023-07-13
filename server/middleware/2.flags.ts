export default defineEventHandler(async (event) => {
  try {
    const path = getRequestPath(event);

    const feature = flags.find(
      (flag) => flag.urls.filter((url) => path.includes(url)).length > 0
    );

    const isFeatureActive = await feature?.active();

    if (!isFeatureActive) {
      throw new HTTPException({
        error: "Feature Flag Error",
        message:
          feature?.message ||
          `The "${feature?.feature}" feature is not available now! We are working on it.`,
        status_code: 400,
      });
    }
  } catch (error) {
    return handleError(event, error);
  }
});
