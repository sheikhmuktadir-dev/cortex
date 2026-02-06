import ReactApexChart from "react-apexcharts";
import Style from "./chart.module.css";

export default function BarChart() {
  const series = [
    {
      name: "Online",
      data: [200, 30, 148, 570, 240, 180, 390],
    },
    {
      name: "Offline",
      data: [400, 430, 448, 470, 540, 780, 690],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      width: "100%",
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },

    colors: ["rgb(76, 65, 139)", "rgb(4, 174, 198)"],

    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },

    dataLabels: { enabled: false },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: {
        left: 10,
        right: 10,
      },
    },

    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },

    tooltip: {
      theme: "light",
    },

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 360 },
          plotOptions: {
            bar: { columnWidth: "55%" },
          },
          legend: { position: "bottom" },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: { height: 280 },
          plotOptions: {
            bar: { columnWidth: "65%" },
          },
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
          legend: {
            position: "bottom",
            fontSize: "11px",
          },
        },
      },
    ],
  };

  return (
    <div className={Style.chartCard}>
      <p>Last Week Sales</p>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
}
