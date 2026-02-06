import DashCard from "../../Components/Card/DashCard";
import Style from "./dashboard.module.css";
import { taskStats } from "../../Data/dashboard";
import PieChart from "../../Components/Charts/PieChart";
import ScatterChart from "../../Components/Charts/ScatterChart";
import AreaChart from "../../Components/Charts/AreaChart";
import BarChart from "../../Components/Charts/BarChart";

export default function Dashboard() {
  return (
    <div className={Style.dashboardMain}>
      <div className={Style.dashboardTopGrid}>
        {taskStats?.map((list, index) => {
          return <DashCard key={list?.id || index} data={list} />;
        })}
      </div>

      <div className={Style.dashboardGraphTopGrid}>
        <PieChart />
        <AreaChart />
      </div>

      <div className={Style.dashboardGraphBottomGrid}>
        <BarChart />
        <ScatterChart />
      </div>
    </div>
  );
}
