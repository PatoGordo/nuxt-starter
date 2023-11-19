import axios from "axios";
import type { AxiosResponse, AxiosRequestConfig } from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { ErrorCodes } from "~/constants/error-codes";
import { useAuthStore } from "~/store/auth";

export const apiBaseURL = "/api";

export const api = axios.create({
  baseURL: apiBaseURL,
});

api.interceptors.response.use(
  (res) => Promise.resolve(res),
  async (res) => {
    const authStore = useAuthStore();
    const router = useRouter();

    const response = res.response as AxiosResponse;

    // if (response?.status === 403) {
    //   router.push("/403");

    //   throw new Error("<<ignore>>");
    // }

    if (
      response?.status === 503 &&
      response?.data?.error_code === ErrorCodes.FEATURE_FLAG_ENABLE
    ) {
      router.push("/503");

      throw new Error("<<ignore>>");
    }

    if (
      !response?.config?.url?.includes("/v1/auth/refresh-token") &&
      response?.status === 401 &&
      response?.data?.error_code === ErrorCodes.SESSION_EXPIRED
    ) {
      if (moment().isBefore(authStore.refreshTokenExpiresAt)) {
        await authStore.handleRefreshToken();

        (res.config as AxiosRequestConfig).headers = {
          Authorization: `Bearer ${authStore?.token}`,
        };

        return api.request(res.config);
      }

      Swal.fire(
        "Your session has expired!",
        "Log in again to continue using.",
        "info",
      );

      authStore.signOut();
      router.push("/auth/sign-in");

      throw new Error("<<ignore>>");
    }

    return Promise.reject(res);
  },
);
