const doctors = [
  {
    name: "Dr. Ahmed Ali",
    specialty: "Cardiology",
    photo: "../images/Doctor in Hospital Hallway.png",
  },
  {
    name: "Dr. Sara Hassan",
    specialty: "Dermatology",
    photo: "../images/Confident Healthcare Professional.png",
  },
  {
    name: "Dr. John Smith",
    specialty: "Pediatrics",
    photo: "../images/Professional Doctor Portrait.png",
  },
  {
    name: "Dr. Fatma Mahmoud",
    specialty: "Neurology",
    photo: "../images/Medical Professional Portrait (1).png",
  },
  {
    name: "Dr. Nour Adel",
    specialty: "Orthopedics",
    photo: "../images/Medical Professional Portrait (2).png",
  },
  {
    name: "Dr. Laila Samir",
    specialty: "Gynecology",
    photo: "../images/Medical Professional Portrait (3).png",
  },
  {
    name: "Dr. Youssef Nabil",
    specialty: "Oncology",
    photo: "../images/Smiling Medical Professional.png",
  },
  {
    name: "Dr. Hanan Khaled",
    specialty: "Dentistry",
    photo: "../images/Medical Professional Portrait.png",
  },
  {
    name: "Dr. Mohamed Salah",
    specialty: "Cardiology",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
  },
  {
    name: "Dr. Dina Fathy",
    specialty: "Endocrinology",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Tamer Hossam",
    specialty: "Psychiatry",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },

  {
    name: "Dr. Karim Farouk",
    specialty: "Urology",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    name: "Dr. Salma Naguib",
    specialty: "Pediatrics",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },
  {
    name: "Dr. Mahmoud Adel",
    specialty: "Dermatology",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
];

const doctorsDiv = document.getElementById("doctor-info");

doctors.forEach((doctor) => {
  const doctorCard = document.createElement("div");
  doctorCard.classList.add("box-doc");

  doctorCard.innerHTML = `
    <div class="text-img-doc">
<img src="${doctor.photo}?w=200&h=200&fit=crop" alt="${doctor.name}" />     
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
