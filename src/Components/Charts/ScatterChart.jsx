import Style from "./chart.module.css";
import ReactApexChart from "react-apexcharts";

export default function ScatterChart() {
  const series = [
    {
      name: "India",
      data: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
      ],
    },
    {
      name: "France",
      data: [
        [36.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
      ],
    },
    {
      name: "USA",
      data: [
        [21.7, 3],
        [23.6, 3.5],
        [24.6, 3],
        [29.9, 3],
        [21.7, 20],
        [23, 2],
      ],
    },
  ];

  const options = {
    chart: {
      type: "scatter",
      zoom: { enabled: true, type: "xy" },
      toolbar: { show: false },
      width: "100%",
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },

    colors: ["rgb(76, 65, 139)", "rgb(4, 174, 198)", "#ff2d78"],

    markers: {
      size: 6,
      hover: { size: 9 },
    },

    xaxis: {
      tickAmount: 8,
      labels: {
        formatter: (val) => Number(val).toFixed(1),
        style: { fontSize: "12px" },
      },
    },

    yaxis: {
      tickAmount: 6,
      labels: {
        style: { fontSize: "12px" },
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: {
        left: 10,
        right: 10,
      },
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 360 },
          markers: { size: 5 },
          legend: { fontSize: "12px" },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          legend: {
            position: "bottom",
            fontSize: "11px",
          },
          markers: { size: 4 },
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
      <p>Last 20 Day Leads</p>
      <ReactApexChart
        options={options}
        series={series}
        type="scatter"
        height={400}
      />
    </div>
  );
}
