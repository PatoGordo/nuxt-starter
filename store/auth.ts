import moment from "moment";
import Swal from "sweetalert2";
import { defineStore } from "pinia";
import { useLoading } from "./loading";
import { authConfig } from "~/config/auth";
import { api, apiBaseURL } from "~/services/api";
import type { User } from "~/types/entities/auth/user";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const router = useRouter();
    const { start, end } = useLoading();

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

    const handleRefreshToken = async () => {
      try {
        start("Updating session");

        const res = await api.post(
          "/v1/auth/refresh-token",
          {
            refresh_token: refreshToken.value,
          },
          {
            baseURL: apiBaseURL,
          },
        );

        token.value = res?.data?.result?.token;

        sessionExpiresAt.value = moment()
          .add(authConfig.sessionDuration, "ms")
          .toDate();

        updateServicesInfo();
      } catch (error) {
        Swal.fire(
          "Your session has expired!",
          "Log in again to continue using.",
          "info",
        );

        signOut();
        router.push("/auth/sign-in");
      } finally {
        end();
      }
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

    const updateUserData = async () => {
      if (!user || moment(sessionExpiresAt?.value).isBefore(moment())) {
        return;
      }

      try {
        start("Updating data...");

        const res = await api.get<{ result: User }>("/v1/user/me");

        user.value = res.data.result;
      } catch (error) {
        handleError(error);
      } finally {
        end();
      }
    };

    return {
      token,
      refreshToken,
      sessionExpiresAt,
      refreshTokenExpiresAt,
      user,
      signOut,
      signIn,
      updateServicesInfo,
      handleRefreshToken,
      updateUserData,
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
