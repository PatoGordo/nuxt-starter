import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const currentSessionLink = event.context.token_data.link;

    const body = await readBody(event);

    const validation = z
      .object({
        link: z.string().length(24),
      })
      .strict();

    validation.parse(body);

    if (currentSessionLink === body.link) {
      throw new HTTPException({
        message: "You cannot finish your current session!",
        status_code: 403,
      });
    }

    const session = await prismaClient.session.findFirst({
      where: {
        user_id: event.context.user.id,
        link: body.link,
      },
    });

    if (!session) {
      return handleResult({});
    }

    await prismaClient.session.delete({
      where: {
        id: session?.id,
      },
    });

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
