import moment from "moment";
import { useAuthStore } from "~/store/auth";
import { UserRole } from "~/types/entities/auth/user";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const router = useRouter();

  if (
    !authStore.token ||
    moment(authStore.sessionExpiresAt).isBefore(moment.now()) ||
    !authStore?.user?.role
  ) {
    authStore.signOut();
    return router.push("/auth/sign-in");
  }

  if (
    authStore?.user?.role !== UserRole.editor &&
    authStore?.user?.role !== UserRole.admin
  ) {
    return router.push("/403");
  }
});
