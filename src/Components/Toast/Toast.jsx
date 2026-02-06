import Style from "./toast.module.css";

export default function Toast({ type, toastMessage }) {
  if (!toastMessage) return null;

  return (
    <div className={Style.toastContainer}>
      <div
        className={`${Style.toast} ${type === "error" ? Style.error : Style.success}`}
      >
        {toastMessage}
      </div>
    </div>
  );
}
