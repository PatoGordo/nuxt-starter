export default defineEventHandler(async (event) => {
  try {
    const sessions = await prismaClient.session.findMany({
      where: {
        user_id: event.context.user.id,
      },
    });

    return handleResult(sessions);
  } catch (error) {
    return handleError(event, error);
  }
});
