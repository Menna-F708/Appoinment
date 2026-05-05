let logout = document.getElementById("log-btn");

logout.addEventListener("click", () => {
  window.location = "../index.html";
});

const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
}); 