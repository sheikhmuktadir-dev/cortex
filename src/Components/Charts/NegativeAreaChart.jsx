import ReactApexChart from "react-apexcharts";
import Style from "./chart.module.css";

export default function NegativeAreaChart() {
  const series = [
    {
      name: "Monthly Data",
      data: [0, -41, 35, -51, 0, 62, -69, 32, -32, 54, 16, -50],
    },
  ];

  const options = {
    chart: {
      type: "area",
      width: "100%",
      toolbar: { show: false },
      zoom: { enabled: false },
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },

    dataLabels: { enabled: false },

    stroke: {
      curve: "straight",
      width: 2,
    },

    fill: {
      type: "solid",
      opacity: 1,
    },

    colors: ["rgb(76, 65, 139)"],

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: { fontSize: "12px" },
      },
    },

    yaxis: {
      labels: {
        style: { fontSize: "12px" },
      },
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
    },

    plotOptions: {
      line: {
        colors: {
          threshold: 0,
          colorAboveThreshold: "rgb(76, 65, 139)",
          colorBelowThreshold: "rgb(4, 174, 198)",
        },
      },
    },

    tooltip: {
      theme: "light",
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 360 },
          title: { style: { fontSize: "13px" } },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          title: { style: { fontSize: "12px" } },
          xaxis: {
            labels: {
              rotate: -45,
              style: { fontSize: "10px" },
            },
          },
          yaxis: {
            labels: {
              style: { fontSize: "10px" },
            },
          },
        },
      },
    ],
  };

  return (
    <div className={Style.chartCard}>
      <p>Last Year Sales</p>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </div>
  );
}
