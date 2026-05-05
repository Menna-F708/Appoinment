let Name = document.getElementById("user-name");
let Select = document.getElementById("select");
let SignupBtn = document.getElementById("signup-btn");
let ErrorBox = document.getElementById("name-error");
let ErrorText = document.getElementById("error-text");
let profilepic = document.getElementById("profile-pic");
let email = document.getElementById("emaill");

SignupBtn.addEventListener("click", (eo) => {
  eo.preventDefault();

  let UserNameValue = Name.value.trim();
  let SelectValue = Select.value;
  let emailuser = email.value;

  if (UserNameValue === "") {
    showError("Please enter your name");
    return;
  }

  if (SelectValue === "") {
    showError("Please select account type");
    return;
  }

  const file = profilepic.files[0];
  if (!file) {
    showError("Please select a profile picture");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const imguser = reader.result;

    let allData = JSON.parse(localStorage.getItem("allData")) || [];

    let newinfo = {
      imguser,
      UserNameValue,
      emailuser,
      SelectValue,
    }; 

    allData.push(newinfo);
    localStorage.setItem("allData", JSON.stringify(allData));

    // redirect
    if (SelectValue === "patient") {
      window.location = "../PatientPages/overview.html";
    } else {
      window.location = "../DoctorePages/Overview.html";
    }
  };

  reader.readAsDataURL(file);
});

function showError(message) {
  ErrorText.textContent = message;
  ErrorBox.classList.remove("hidden");
} 