document.addEventListener("DOMContentLoaded", () => {
const sidebar = document.querySelector(".sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
}); 

  let allData = JSON.parse(localStorage.getItem("allData")) || [];
  const carddetails = document.getElementById("card-details");

  if (allData.length > 0) {
    const data = allData[allData.length - 1];

    carddetails.innerHTML = `
      <div class="profile-section">
        <div class="profile-img">
          <img src="${data.imguser || '../images/Portrait of Young Woman.png'}"
               class="w-24 h-24 rounded-full object-cover" />
        </div>
      </div>

      <div class="form-section">
        <h3>Account Details</h3>

        <label>First Name</label> 
        <input type="text" value="${data.UserNameValue}" />

        <label>Email</label> 
        <input type="email" value="${data.emailuser}" />

        <label>Account Type</label> 
        <input type="text" value="${data.SelectValue}" />

        <button class="save-btn">SAVE NEW CHANGES</button>
      </div>
    `;
  } else {
    carddetails.innerHTML = `<p>No data found</p>`;
  }
}); 