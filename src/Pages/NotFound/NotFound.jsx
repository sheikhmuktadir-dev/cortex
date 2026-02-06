import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.notFoundBox}>
      <div className={Style.notFoundFlex}>
        <h2>404</h2>
        <p>The page doesn’t exist.</p>
      </div>
    </div>
  );
}
