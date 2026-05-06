document.addEventListener("DOMContentLoaded", () => {
  let allPatients = JSON.parse(localStorage.getItem("appointments")) || [];

  let tableBody = document.querySelector(".appointment-table tbody");

  let content = "";

  allPatients.forEach((p) => {
    content += `
      <tr>
        <td>${p.patientName}</td>
        <td>${p.department}</td>
        <td>${p.doctorName}</td>
        <td>${p.time}</td>
        <td>${p.phone}</td>
        <td>${p.comment}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = content;
});
  