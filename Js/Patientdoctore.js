const Patient = [
  {
    name: "Dr. Ahmed Ali",
    specialty: "Cardiology",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Dr. Sara Hassan",
    specialty: "Dermatology",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Dr. John Smith",
    specialty: "Pediatrics",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Dr. Fatma Mahmoud",
    specialty: "Neurology",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Dr. Omar Adel",
    specialty: "Orthopedics",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Dr. Laila Samir",
    specialty: "Gynecology",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Dr. Youssef Nabil",
    specialty: "Oncology",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Hanan Khaled",
    specialty: "Dentistry",
    photo: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Dr. Mohamed Salah",
    specialty: "Cardiology",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Dr. Dina Fathy",
    specialty: "Endocrinology",
    photo: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    name: "Dr. Tamer Hossam",
    specialty: "Psychiatry",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Dr. Rania Mostafa",
    specialty: "Ophthalmology",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Dr. Karim Farouk",
    specialty: "Urology",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Dr. Salma Naguib",
    specialty: "Pediatrics",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Dr. Mahmoud Adel",
    specialty: "Dermatology",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const doctorsDiv = document.getElementById("doctor-info");

Patient.forEach((doctor) => {
  const doctorCard = document.createElement("div");
  doctorCard.classList.add("box-doc");

  doctorCard.innerHTML = `
    <div class="text-img-doc">
      <img src="${doctor.photo}" alt="${doctor.name}" />
      <div class="text-doc">
        <p class="dr">${doctor.name}</p>
        <p class="family">${doctor.specialty}</p>
      </div>
    </div> 
    <div class="line"></div>
    <div class="btns">
      <button class="chat"><a href="../PatientPages/Chats.html?doctor=${encodeURIComponent(doctor.name)}">Chat</a></button>
      <button class="book"><a href="../PatientPages/Appoinment.html">Book</a></button>
    </div>
  `;

  doctorsDiv.appendChild(doctorCard);
});

const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
}); 