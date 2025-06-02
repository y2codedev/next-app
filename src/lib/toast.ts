import { toast } from "react-toastify";

const showToast = {
  success: (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
  error: (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
  info: (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
  warning: (message: string) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
};

export default showToast;
