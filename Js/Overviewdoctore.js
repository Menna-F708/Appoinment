document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});

const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
// diagnostics chart
const ctx = document.getElementById("diagnosticschart").getContext("2d");
Chart.register({
  id: "centerText",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();

    const lines = options.textLines || [];
    const lineHeight = 24;

    lines.forEach((lineObj, index) => {
      ctx.font = `bold ${lineObj.fontSize}px sans-serif`;
      ctx.fillStyle = lineObj.color || "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        lineObj.text,
        width / 2,
        height / 2 - ((lines.length - 1) / 2) * lineHeight + index * lineHeight,
      );
    });

    ctx.restore();
  },
});
const data = {
  labels: ["Malaria", "Cold", "Typhoid", "Others"],
  datasets: [
    {
      data: [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10,
      ],
      backgroundColor: ["#100DB1 ", "#FECA57", "#763CEF", "#F80D38", "#FFFFFF"],
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: { boxWidth: 12, padding: 12 },
      },
      tooltip: { enabled: true },
      centerText: {
        textLines: [
          { text: "187.2K", fontSize: 24, color: "#100DB1" },
          { text: "PATIENTS", fontSize: 12, color: "#100DB1" },
        ],
      },
    },
  },
};
const myChart = new Chart(ctx, config);

// patients chart
var options = {
  series: [70, 85, 50],
  chart: {
    height: 380,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: -90,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "45%",
        background: "transparent",
      },
      dataLabels: {
        name: {
          show: false,
          fontSize: "16px",
          color: "#444",
        },
        value: {
          show: true,
          fontSize: "22px",
          color: "#111",
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  colors: ["#1e3bea", "#ff1d3c", "#fbbf24"],
  labels: ["MEN", "WOMEN", "CHILDREN"],
  legend: {
    show: false,
    floating: false,
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 10,
    labels: {
      useSeriesColors: true,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#patients"), options);
chart.render();

// health index

new ApexCharts(document.querySelector("#healthIndex"), {
  chart: { type: "bar", height: 150 },
  series: [{ data: [20, 40, 60, 80, 70] }],
  xaxis: { categories: ["Jun", "Jul", "Aug", "Sep", "Oct"] },
}).render();

// growth
var options = {
  series: [80],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "60%",
      },
      dataLabels: {
        value: {
          show: true,
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1f3bff",
          offsetY: -20,
          formatter: function (val) {
            return val + "%";
          },
        },
        name: {
          show: true,
          offsetY: 20,
          fontSize: "16px",
          color: "#1f3bff",
          fontWeight: "bold",
          textAnchor: "middle",
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      gradientToColors: ["#ff2d55"],
      inverseColors: false,
      stops: [0, 100],
    },
  },
  stroke: {
    dashArray: 4,
  },
  labels: ["PATIENT"],
};

var chart = new ApexCharts(document.querySelector("#growth"), options);
chart.render();

// appoinment
var options = {
  series: [
    {
      name: "Examination",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Emergency",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: " Emergency",
      data: [11, 17, 15, 15, 21, 14],
    },
  ],
  colors: ["#f80d38", "#100db1", "#763cef"],

  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },

    zoom: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
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
    itemMargin: {
      horizontal: 10,
      vertical: 5,
    },
  },
  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(document.querySelector("#appointments"), options);
chart.render();

let allPatients = JSON.parse(localStorage.getItem("appointments")) || [];

let upcomingContainer = document.querySelector(".upcoming");

if (upcomingContainer) {
  let content = "";

  allPatients.forEach((p) => {
    content += `
      <div class="person">
        <div class="avatar"></div>
        <div class="info">
          <p>${p.patientName}</p>
<span style="color: ${getDepartmentColor(p.department)}; font-weight: bold; font-size:  0.8rem;">
        ${p.department} 
          </span>
        </div> 
      </div>
    `;
  });

  upcomingContainer.innerHTML = content;
}
function getDepartmentColor(dept) {
  switch (dept) {
    case "Eye Care":
      return "#3b82f6";
    case "Dental":
      return "#10b981";
    case "Cardiology":
      return "#ef4444";
    case "Gynecologist":
      return "#f59e0b";
    case "Psychotherapist":
      return "#8b5cf6";
    case "Urologist":
      return "#14b8a6";
    case "Neurologist":
      return "#ec4899";
    default:
      return "#4f46e5";
  }
}
