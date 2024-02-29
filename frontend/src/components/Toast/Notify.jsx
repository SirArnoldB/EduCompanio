import { toast } from "react-toastify";

const Notify = (message, type, position = "bottom-right") => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: position,
        icon: "🚀",
      });
      break;
    case "error":
      toast.error(message, {
        position: position,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: position,
      });
      break;
    default:
      toast(message, {
        position: position,
      });
      break;
  }
};

export default Notify;
