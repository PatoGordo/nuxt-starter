import moment from "moment";
import { roleGuard } from "../../../../guards";

export default defineEventHandler(async (event) => {
  try {
    roleGuard(event, ["admin", "editor"]);

    const totalUsers = await prismaClient.user.count({
      where: {
        deleted: false,
      },
    });

    const userRoleUsers = await prismaClient.user.count({
      where: {
        deleted: false,
        role: "user",
      },
    });

    const editorRoleUsers = await prismaClient.user.count({
      where: {
        deleted: false,
        role: "editor",
      },
    });

    const adminRoleUsers = await prismaClient.user.count({
      where: {
        deleted: false,
        role: "admin",
      },
    });

    const userCountAtStartOfMonth = await prismaClient.user.count({
      where: {
        deleted: false,
        role: "user",
        created_at: {
          lte: moment().startOf("month").toISOString(),
        },
      },
    });

    const userCountAtEndOfMonth = await prismaClient.user.count({
      where: {
        deleted: false,
        role: "user",
        created_at: {
          gte: moment().endOf("month").toISOString(),
        },
      },
    });

    const monthOverMonthGrowth =
      ((userCountAtEndOfMonth - userCountAtStartOfMonth) /
        userCountAtStartOfMonth) *
      100;

    return handleResult({
      total: totalUsers,
      role: {
        user: userRoleUsers,
        editor: editorRoleUsers,
        admin: adminRoleUsers,
      },
      monthly: {
        start_of_month: userCountAtStartOfMonth,
        end_of_month: userCountAtEndOfMonth,
        growth: monthOverMonthGrowth,
      },
    });
  } catch (error) {
    return handleError(event, error);
  }
});
