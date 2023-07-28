import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.user.id;

    const body = await readBody(event);

    const validation = z
      .object({
        name: z.string().optional(),
      })
      .strict();

    validation.parse(body);

    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        ...body,
      },
    });

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
