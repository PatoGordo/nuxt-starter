import { roleGuard } from "../../../../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin", "editor"]);

    const targetUserId = event.context.params?.id;

    const user = await prismaClient.user.findFirst({
      where: {
        id: targetUserId,
      },
    });

    return handleResult(
      user
        ? {
            ...user,
            password: "protected-data",
          }
        : user,
    );
  } catch (error) {
    return handleError(event, error);
  }
});
