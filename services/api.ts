import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useLoading } from "~/store/loading";

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.response.use(
  (res) => Promise.resolve(res),
  async (res) => {
    const loading = useLoading();

    const { data } = res.response as AxiosResponse;

    loading.end();

    await Swal.fire({
      title: "An unexpected error has occured",
      text: data.message,
      icon: "error",
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Confirm",
    });

    return Promise.reject(res);
  },
);
