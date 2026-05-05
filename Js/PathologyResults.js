const sidebar = document.querySelector(".sidebar");
const toggle = document.getElementById("sidebarToggle");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("close");
});  
    