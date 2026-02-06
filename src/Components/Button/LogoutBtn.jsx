import Style from "./button.module.css";
import { AiOutlineLogout } from "react-icons/ai";

export default function LogoutBtn({ handler, loader, children }) {
  return (
    <button onClick={handler} className={Style.logoutBtn} disabled={loader}>
      {loader ? (
        <div className={Style.logoutBtnLoaderFlex}>
          <span className={Style.logoutBtnLoader}></span>
          <span>Logging out...</span>
        </div>
      ) : (
        <>
          <span>{children}</span>
        </>
      )}
    </button>
  );
}
