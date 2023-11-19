import { z } from "zod";
import { roleGuard } from "../../../../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin"]);

    const body = await readBody(event);

    const targetUserId = event.context.params?.id;

    if (targetUserId === event.context.user.id) {
      throw new HTTPException({
        message: "You can't edit your own admin user!",
        status_code: 403,
      });
    }

    if (event.context.user.role !== "admin" && body?.role === "admin") {
      throw new HTTPException({
        message: "You have no permission to set admin users!",
        status_code: 403,
      });
    }

    const validation = z
      .object({
        name: z.string().optional(),
        status: z.enum(["approved", "restricted"]).optional(),
        email: z.string().email().optional(),
        role: z.enum(["admin", "editor", "user"]).optional(),
      })
      .strict();

    validation.parse(body);

    await prismaClient.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        ...body,
      },
      select: {
        id: true,
      },
    });

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
