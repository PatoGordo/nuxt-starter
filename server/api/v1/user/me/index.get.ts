export default defineEventHandler(async (event) => {
  try {
    const user = await prismaClient.user.findFirst({
      where: {
        id: event.context.user.id,
      },
    });

    return handleResult({
      ...user,
      password: "protected-data",
    });
  } catch (error) {
    return handleError(event, error);
  }
});
