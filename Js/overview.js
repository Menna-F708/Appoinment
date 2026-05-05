document.addEventListener("DOMContentLoaded", () => {
  // ===== ApexCharts Donuts =====
  var chart1 = new ApexCharts(document.querySelector("#chart"), {
    series: [16, 55, 30, 25],
    chart: { type: "donut", width: 200, height: 200 },
    colors: ["#763CEF", "#F80D38", "#100DB1", "#FECA57"],
    legend: { show: false },
    plotOptions: { pie: { donut: { size: "80%" } } },
    dataLabels: { enabled: false },
  });
  chart1.render();

  var chart2 = new ApexCharts(document.querySelector("#chart-two"), {
    series: [10, 35, 40],
    chart: { type: "donut", width: 200, height: 200 },
    colors: ["#FECA57", "#F80D38", "#100DB1"],
    legend: { show: false },
    plotOptions: { pie: { donut: { size: "80%" } } },
    dataLabels: { enabled: false },
  });
  chart2.render();

  // ===== ApexCharts line+area =====
  var chart3 = new ApexCharts(document.querySelector("#health-chart"), {
    series: [
      { name: "Health", data: [20, 30, 25, 40, 35, 55, 50, 65, 60, 75] },
    ],
    chart: { 
      type: "area",
      height: 160,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#ffffff"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    markers: {
      size: 5,
      colors: ["#F80D38"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 7 },
    },
    tooltip: { enabled: false },
  });
  chart3.render();

  // ===== Radar Chart =====
  var radarOptions = {
    series: [{ name: "Health Issues", data: [70, 55, 60, 45, 80] }],
    chart: { type: "radar", height: 260, toolbar: { show: false } },
    colors: ["#4fc3ff"],
    stroke: { width: 3 },
    fill: { opacity: 0.25 },
    markers: {
      size: 6,
      colors: ["#4fc3ff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 8 },
    },
    xaxis: {
      categories: ["MALARIA", "COLD", "TYPHOID", "COUGH", "SEVERE HEADACHE"],
      labels: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
  };
  var chartRadar = new ApexCharts(
    document.querySelector("#chart-radar"),
    radarOptions,
  );
  chartRadar.render();

  // ===== Overall Appointments Bar Chart =====
  var barOptions = {
    series: [
      { name: "Examination  ", data: [44, 55, 41, 67, 22, 43] },
      { name: "Consultation ", data: [13, 23, 20, 8, 13, 27] },
      { name: "Emergency  ", data: [11, 17, 15, 15, 21, 14] },
    ],
    colors: ["#f80d38", "#feca57", "#763cef"],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { show: false },
      zoom: { enabled: true },
      dataLabels: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: { horizontal: 10, vertical: 5 },
    },
    fill: { opacity: 1 },
  };
  var chart = new ApexCharts(
    document.querySelector("#appointments"),
    barOptions,
  );
  chart.render();
});
