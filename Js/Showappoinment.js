let allPatients = JSON.parse(localStorage.getItem("allPatients")) || [];

let tableBody = document.querySelector(".appointment-table tbody");
tableBody.innerHTML = ""; 
allPatients.forEach((p) => {
  tableBody.innerHTML += `
    <tr>
      <td data-label="Patient Name">${p.PatientName}</td>
      <td data-label="Department">${p.Department}</td>
      <td data-label="Doctor">${p.DoctorName}</td>
      <td data-label="Time">${p.TimeAppoinment}</td>
      <td data-label="Phone">${p.Phone}</td>
      <td data-label="Comments">${p.Comment}</td>
    </tr>
  `;
}); 