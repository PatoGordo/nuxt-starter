import { AxiosError } from "axios";
import Swal from "sweetalert2";
import { useLoading } from "~/store/loading";

export const handleError = (
  error: Error | AxiosError | unknown,
  onConfirm?: () => void,
) => {
  const loading = useLoading();

  loading.end();

  let errorMessage = "";

  if (error instanceof AxiosError) {
    const data = error?.response?.data;

    if (data?.message) {
      errorMessage = data?.message;
    }
  } else if (error instanceof Error) {
    if (error?.message) {
      errorMessage = error?.message;
    }
  } else if ((error as any)?.message) {
    errorMessage = (error as any)?.message;
  }

  if (!errorMessage?.length) {
    errorMessage =
      "Sorry for the inconvenience. An has occured and it does not return any message, we are investigating it.";
  }

  if (errorMessage === "<<ignore>>") {
    return;
  }

  Swal.fire({
    title: "An unexpected error has occured",
    text: errorMessage,
    icon: "error",
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: "Confirm",
  }).then(onConfirm);
};
