import Style from "./button.module.css";

export default function AuthBtn({ loaderCheck, children }) {
  return (
    <div className={Style.formBtnArea}>
      <button type="submit" className={Style.authBtn} disabled={loaderCheck}>
        {loaderCheck ? <span className={Style.authBtnLoader}></span> : children}
      </button>
    </div>
  );
}
