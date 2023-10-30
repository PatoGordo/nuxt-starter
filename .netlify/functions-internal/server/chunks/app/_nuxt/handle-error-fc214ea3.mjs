import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { b as useLoading } from '../server.mjs';

const handleError = (error, onConfirm) => {
  var _a;
  const loading = useLoading();
  loading.end();
  let errorMessage = "";
  if (error instanceof AxiosError) {
    const data = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data;
    if (data == null ? void 0 : data.message) {
      errorMessage = data == null ? void 0 : data.message;
    }
  } else if (error instanceof Error) {
    if (error == null ? void 0 : error.message) {
      errorMessage = error == null ? void 0 : error.message;
    }
  } else if (error == null ? void 0 : error.message) {
    errorMessage = error == null ? void 0 : error.message;
  }
  if (!(errorMessage == null ? void 0 : errorMessage.length)) {
    errorMessage = "Sorry for the inconvenience. An has occured and it does not return any message, we are investigating it.";
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
    cancelButtonText: "Confirm"
  }).then(onConfirm);
};

export { handleError as h };
//# sourceMappingURL=handle-error-fc214ea3.mjs.map
