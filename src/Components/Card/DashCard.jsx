import Style from "./card.module.css";

export default function DashCard({ data }) {
  return (
    <div className={Style.dashCard}>
      <div className={Style.dashCardImageArea}>
        <img src={data?.image} />
      </div>
      <div className={Style.dashCardTextArea}>
        <h5 className={Style.dashCardTextCount}>{data?.count}</h5>
        <p className={Style.dashCardTextPara}>{data?.title}</p>
      </div>
    </div>
  );
}
