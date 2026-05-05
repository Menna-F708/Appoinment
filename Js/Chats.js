const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
}); 

const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

sendBtn.onclick = () => {
  if (input.value.trim() === "") return;

  const msg = document.createElement("div");
  msg.className = "msg me";
  msg.textContent = input.value;

  messages.appendChild(msg);

  input.value = "";

  messages.scrollTop = messages.scrollHeight;
};

// قراءة اسم الدكتور من الرابط
const urlParams = new URLSearchParams(window.location.search);
const doctorName = urlParams.get("doctor");

// عرض الاسم في صفحة الشات
const doctorTitle = document.getElementById("doctor-name");
if (doctorTitle && doctorName) {
  doctorTitle.textContent = `${doctorName}`;
}
