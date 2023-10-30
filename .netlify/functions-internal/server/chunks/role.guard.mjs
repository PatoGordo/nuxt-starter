import { H as HTTPException } from './nitro/netlify.mjs';

const roleGuard = (event, permittedRoles) => {
  const userRole = event.context.user.role;
  if (!permittedRoles.includes(userRole)) {
    throw new HTTPException({
      message: "You have no permission to access this resource!",
      status_code: 403
    });
  }
};

export { roleGuard as r };
//# sourceMappingURL=role.guard.mjs.map
