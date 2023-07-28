import { roleGuard } from "../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin", "editor"]);

    const user = await prismaClient.user.findMany({
      where: {
        id: event.context.user.id,
      },
    });

    return handleResult(
      user.map((u) => ({
        ...u,
        password: "protected-data",
      })),
    );
  } catch (error) {
    return handleError(event, error);
  }
});
