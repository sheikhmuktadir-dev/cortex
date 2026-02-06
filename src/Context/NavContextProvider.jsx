import { NavContext } from "./NavContext";
import { useState } from "react";

export default function NavContextProvider({ children }) {
  const [navCollapse, setNavCollapse] = useState(false);

  const collapseHandler = () => {
    setNavCollapse((prev) => !prev);
  };
  return (
    <NavContext.Provider
      value={{ navCollapse, collapseHandler, setNavCollapse }}
    >
      {children}
    </NavContext.Provider>
  );
}
