import { useState } from "react";

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const inputType = visible ? "text" : "password";

  const toggle = () => setVisible((prev) => !prev);

  return { inputType, toggle, visible };
}
