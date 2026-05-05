const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// ================= Calendar =================
const calendarGrid = document.querySelector(".calendar-grid");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");
const appointmentForm = document.querySelector(".appointment-form");

let date = new Date();
let selectedDay = null;

// ================= Colors =================
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

// ================= Render Calendar =================
function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.innerText =
    date.toLocaleString("default", { month: "long" }) + " " + year;

  calendarGrid.innerHTML = "";

  for (let d = 1; d <= lastDate; d++) {
    const day = document.createElement("div");
    day.classList.add("day");

    const dayNumber = document.createElement("span");
    dayNumber.innerText = d;
    day.appendChild(dayNumber);

    const plus = document.createElement("div");
    plus.classList.add("plus-icon");
    plus.innerText = "+";
    day.appendChild(plus);

    plus.addEventListener("click", (e) => {
      e.stopPropagation();
      appointmentForm.style.display = "block";
      selectedDay = day;
    });

    day.addEventListener("click", () => {
      appointmentForm.style.display = "block";
      selectedDay = day;
    });

    calendarGrid.appendChild(day);
  }

  loadAppointments();
}
 
// ================= Month =================
prevBtn.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

nextBtn.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

// ================= Close Form =================
document.addEventListener("click", (e) => {
  if (
    appointmentForm.style.display === "block" &&
    !appointmentForm.contains(e.target) &&
    !e.target.classList.contains("plus-icon")
  ) {
    appointmentForm.style.display = "none";
  }
});

// ================= Add / Edit =================
const BtnAppoinment = document.querySelector(".btn-submit");

BtnAppoinment.addEventListener("click", (e) => {
  e.preventDefault();

  let patientName = document.getElementById("name").value;
  let department = document.getElementById("department").value;
  let doctorName = document.getElementById("doctor").value;
  let time = document.getElementById("time").value;
  let phone = document.getElementById("phone").value;
  let comment = document.getElementById("comments").value;

  if (!selectedDay) return;

  const dayNumber = selectedDay.querySelector("span").innerText;

  let allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const editId = appointmentForm.getAttribute("data-edit-id");

  if (editId) {
    allAppointments = allAppointments.map((item) => {
      if (item.id == editId) {
        return {
          ...item,
          patientName,
          department,
          doctorName,
          time,
          phone,
          comment,
        };
      }
      return item;
    });

    appointmentForm.removeAttribute("data-edit-id");
  } else {
    const appointmentData = {
      id: Date.now(),
      patientName,
      department,
      doctorName,
      time,
      phone,
      comment,
      day: dayNumber,
      month: date.getMonth(),
      year: date.getFullYear(),
    };

    allAppointments.push(appointmentData);
  }

  localStorage.setItem("appointments", JSON.stringify(allAppointments));

  appointmentForm.style.display = "none";
  appointmentForm.reset();

  renderCalendar();
});

// ================= Show Appointment =================
function addAppointmentToDay(dayElement, app) {
  const showAppoinment = document.createElement("div");
  showAppoinment.classList.add("showappoinment");

  showAppoinment.innerHTML = `
    <span>${app.department}</span>
    <span>${app.time}</span>

    <div class="hover-card">
      <div class="top">
        <div class="left">
          <div class="avatar"></div>
          <div class="info">
            <h3>${app.department}</h3>
            <span>Patient</span>
          </div>
        </div>

        <div class="actions">
          <button class="icon-btn edit-btn">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="icon-btn delete-btn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <hr />

      <div class="bottom">
        <div class="time">
          <i class="fa-regular fa-clock"></i>
          ${app.time}
        </div>

        <div class="status">
          <div class="dot"></div>
          ${app.department}
        </div>

        <div class="disease">
          ${app.patientName || "-"}
        </div>
      </div>
    </div>
  `;

  showAppoinment.style.background = getDepartmentColor(app.department);

  // DELETE
  showAppoinment.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.stopPropagation();

    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data = data.filter((item) => item.id !== app.id);

    localStorage.setItem("appointments", JSON.stringify(data));
    renderCalendar();
  });

  // EDIT
  showAppoinment.querySelector(".edit-btn").addEventListener("click", (e) => {
    e.stopPropagation();

    appointmentForm.style.display = "block";
    selectedDay = dayElement;

    document.getElementById("name").value = app.patientName;
    document.getElementById("department").value = app.department;
    document.getElementById("doctor").value = app.doctorName;
    document.getElementById("time").value = app.time;
    document.getElementById("phone").value = app.phone;
    document.getElementById("comments").value = app.comment;

    appointmentForm.setAttribute("data-edit-id", app.id);
  });

  dayElement.appendChild(showAppoinment);
  updateAppointmentCount(dayElement);
}

// ================= Counter =================
function updateAppointmentCount(dayElement) {
  const allAppointments = dayElement.querySelectorAll(".showappoinment");

  allAppointments.forEach((app, index) => {
    if (index > 0) app.style.display = "none";
  });

  let amountDiv = dayElement.querySelector(".showappoinmentAmount");

  if (!amountDiv) {
    amountDiv = document.createElement("div");
    amountDiv.classList.add("showappoinmentAmount");
    dayElement.appendChild(amountDiv);

    amountDiv.addEventListener("click", () => {
      window.location = "../PatientPages/Showappoinment.html";
    });
  }

  if (allAppointments.length > 1) {
    amountDiv.textContent = "+" + (allAppointments.length - 1);
    amountDiv.style.display = "flex";
  } else {
    amountDiv.style.display = "none";
  }
}

// ================= Load =================
function loadAppointments() {
  const data = JSON.parse(localStorage.getItem("appointments")) || [];
  const days = document.querySelectorAll(".day");

  data.forEach((app) => {
    if (app.month === date.getMonth() && app.year === date.getFullYear()) {
      days.forEach((day) => {
        const dayNumber = day.querySelector("span");
        if (dayNumber && dayNumber.innerText == app.day) {
          addAppointmentToDay(day, app);
        }
      });
    }
  });
}

renderCalendar();
