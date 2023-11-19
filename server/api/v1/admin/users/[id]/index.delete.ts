import { roleGuard } from "../../../../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin"]);

    const targetUserId = event.context.params?.id;

    if (targetUserId === event.context.user.id) {
      throw new HTTPException({
        message: "You can't delete your own admin user!",
        status_code: 403,
      });
    }

    const user = await prismaClient.user.findFirst({
      where: {
        id: targetUserId,
      },
    });

    if (!user) {
      return handleResult({});
    }

    await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        deleted: true,
        email: "!deleted!__" + user.email,
      },
    });

    return handleResult({});
  } catch (error) {
    return handleError(event, error);
  }
});
