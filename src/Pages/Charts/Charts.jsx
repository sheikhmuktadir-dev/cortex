import AreaChart from "../../Components/Charts/AreaChart";
import BarChart from "../../Components/Charts/BarChart";
import PieChart from "../../Components/Charts/PieChart";
import ScatterChart from "../../Components/Charts/ScatterChart";
import NegativeAreaChart from "../../Components/Charts/NegativeAreaChart";

import Style from "./charts.module.css";

export default function Charts() {
  return (
    <div className={Style.chartMain}>
      <NegativeAreaChart />
      <BarChart />
      <AreaChart />
      <ScatterChart />
      <PieChart />
    </div>
  );
}
