import { roleGuard } from "../../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin", "editor", "user"]);

    const user = await prismaClient.user.findMany({
      where: {
        deleted: false,
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
