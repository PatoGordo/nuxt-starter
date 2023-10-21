import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.response.use(
  (res) => Promise.resolve(res),
  (res) => {
    const router = useRouter();

    const response = res.response as AxiosResponse;

    if (response?.status === 403) {
      router.push("/403");
      throw new Error("<<ignore>>");
    }

    if (response?.status === 503) {
      router.push("/503");
      throw new Error("<<ignore>>");
    }

    return Promise.reject(res);
  },
);
