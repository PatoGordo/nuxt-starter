export default defineEventHandler(async (event) => {
  try {
    const link = event.context.token_data.link;

    const session = await prismaClient.session.findFirst({
      where: {
        link,
      },
      select: {
        id: true,
      },
    });

    if (session) {
      await prismaClient.session.delete({
        where: {
          id: session.id,
        },
      });
    }

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
