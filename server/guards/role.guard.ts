import { H3Event } from "h3";
import { UserRole } from "@prisma/client";

export const roleGuard = (event: H3Event, permittedRoles: UserRole[]) => {
  const userRole = event.context.user.role;

  if (!permittedRoles.includes(userRole)) {
    throw new HTTPException({
      message: "You have no permission to access this resource!",
      status_code: 403,
    });
  }
};
