import { toast } from "react-toastify";

const Notify = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "bottom-right",
        icon: "🚀",
      });
      break;
    case "error":
      toast.error(message, {
        position: "bottom-right",
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "bottom-right",
      });
      break;
    default:
      toast(message, {
        position: "bottom-right",
      });
      break;
  }
};

export default Notify;
