  // ===== جلب بيانات المستخدم من localStorage =====
  const userNameEl = document.getElementById("userName");
  const userRoleEl = document.getElementById("userRole");
  const userImageEl = document.getElementById("userImage");
  const welcomeNameEl = document.getElementById("welcomeName");

  const allData = JSON.parse(localStorage.getItem("allData")) || [];
  if (allData.length > 0) {
    const lastUser = allData[allData.length - 1];

    userNameEl.textContent = lastUser.UserNameValue;
    userRoleEl.textContent = lastUser.SelectValue.charAt(0).toUpperCase() + lastUser.SelectValue.slice(1);
    userImageEl.src = lastUser.imguser;
    welcomeNameEl.textContent = `Welcome ${lastUser.UserNameValue}`;
  }