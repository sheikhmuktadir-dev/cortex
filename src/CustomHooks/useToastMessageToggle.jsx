import { useEffect } from "react";

export default function useToastMessageToggle({
  errorMessage,
  successMessage,
  clearError,
  clearSuccess,
  delay = 2000,
}) {
  useEffect(() => {
    if (!errorMessage && !successMessage) return;

    const timer = setTimeout(() => {
      clearError("");
      clearSuccess("");
    }, delay);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage, clearError, clearSuccess, delay]);
}
