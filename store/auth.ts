import moment from "moment";
import { defineStore } from "pinia";
import { authConfig } from "~/config/auth";
import { api } from "~/services/api";
import { User } from "~/types/entities/auth/user";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref("");
    const refreshToken = ref("");
    const sessionExpiresAt = ref<Date | null>(null);
    const refreshTokenExpiresAt = ref<Date | null>(null);
    const user = ref<User | null>(null);

    const signIn = (data: SignInData) => {
      token.value = data.token;
      refreshToken.value = data.refresh_token;
      user.value = data.user;

      sessionExpiresAt.value = moment()
        .add(authConfig.sessionDuration, "ms")
        .toDate();

      refreshTokenExpiresAt.value = moment()
        .add(authConfig.refreshTokenDuration, "ms")
        .toDate();

      updateServicesInfo();
    };

    const signOut = () => {
      token.value = "";
      sessionExpiresAt.value = null;
      user.value = null;

      updateServicesInfo();
    };

    const updateServicesInfo = () => {
      api.defaults.headers.common.Authorization = `Bearer ${token?.value}`;
    };

    return {
      token,
      refreshToken,
      sessionExpiresAt,
      user,
      signOut,
      signIn,
      updateServicesInfo,
    };
  },
  {
    persist: true,
  },
);

export interface SignInData {
  token: string;
  refresh_token: string;
  user: User;
}
