import ReactApexChart from "react-apexcharts";
import Style from "./chart.module.css";

export default function AreaChart() {
  const series = [
    {
      name: "India",
      data: [
        25000, 32000, 40000, 38000, 52000, 60000, 72000, 68000, 82000, 90000,
        95000, 100000,
      ],
    },
    {
      name: "France",
      data: [
        28000, 30000, 36000, 42000, 48000, 55000, 60000, 65000, 70000, 76000,
        82000, 88000,
      ],
    },
    {
      name: "USA",
      data: [
        26000, 34000, 38000, 45000, 50000, 58000, 66000, 72000, 78000, 84000,
        90000, 96000,
      ],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },

    colors: ["rgb(76, 65, 139)", "rgb(4, 174, 198)", "#ff2d78"],

    dataLabels: { enabled: false },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: { left: 10, right: 10 },
    },

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
        formatter: (val) => `$${(val / 1000).toFixed(0)}k`,
      },
    },

    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 360 },
          legend: { position: "bottom" },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          stroke: { width: 2 },
          legend: { position: "bottom", fontSize: "11px" },
          xaxis: {
            labels: { rotate: -45, style: { fontSize: "10px" } },
          },
        },
      },
    ],
  };

  return (
    <div className={Style.chartCard}>
      <p>This Year Sales</p>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </div>
  );
}
