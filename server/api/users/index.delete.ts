export default defineEventHandler((event) => {
  try {
    return handleResult({
      ok: true,
    });
  } catch (error) {
    return handleError(event, error);
  }
});
