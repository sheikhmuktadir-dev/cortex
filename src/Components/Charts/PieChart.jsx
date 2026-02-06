import ReactApexChart from "react-apexcharts";
import Style from "./chart.module.css";

export default function PieChart() {
  const series = [42, 47, 52];

  const options = {
    chart: {
      type: "polarArea",
      background: "transparent",
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },

    labels: ["India", "France", "USA"],

    colors: ["rgb(76, 65, 139)", "rgb(4, 174, 198)", "#ff2d78"],

    fill: {
      opacity: 1,
    },

    stroke: {
      width: 0,
    },

    grid: {
      show: false,
    },

    plotOptions: {
      polarArea: {
        rings: { strokeWidth: 0 },
        spokes: { strokeWidth: 0 },
        shadeIntensity: 0,
      },
    },

    legend: {
      position: "bottom",
      fontSize: "13px",
      labels: { colors: "#6b7280" },
    },
  };

  return (
    <div className={Style.chartCard}>
      <p>Sales by Countries</p>
      <ReactApexChart
        options={options}
        series={series}
        type="polarArea"
        height={400}
      />
    </div>
  );
}
