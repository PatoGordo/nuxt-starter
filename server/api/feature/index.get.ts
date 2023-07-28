export default defineEventHandler((event) => {
  try {
    return handleResult({
      feature: "This is the feature!",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
