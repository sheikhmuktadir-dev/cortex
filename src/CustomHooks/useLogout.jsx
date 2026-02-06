import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const [isLoggingOut, setisLoggingOut] = useState(false);

  const logoutHandler = () => {
    setisLoggingOut(true);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };
  return { isLoggingOut, logoutHandler };
}
