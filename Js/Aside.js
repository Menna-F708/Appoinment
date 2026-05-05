

document.addEventListener("DOMContentLoaded", () => {
   // ===== Sidebar Toggle =====
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.getElementById("sidebarToggle");

  toggle.addEventListener("click", () => { 
  sidebar.classList.toggle("open");
  console.log(toggle); 
  }); 


const toggleTheme = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
  
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleTheme.checked = true;
} else {
  document.body.classList.remove("dark-mode");
  toggleTheme.checked = false;
}

// التغيير
toggleTheme.addEventListener("change", () => {
  if (toggleTheme.checked) {
    document.body.classList.add("dark-mode"); 
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

 });