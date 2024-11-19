const verifiedUsers = ["Bytes"];  

function checkVerification() {
  const currentUser = localStorage.getItem("currentUser");

  if (verifiedUsers.includes(currentUser)) {
    window.location.href = "./funciones-beta"; 
  } else {
    showAccessDeniedAlert();
  }
}

function showAccessDeniedAlert() {
  const alertBox = document.getElementById("access-denied-alert");
  alertBox.style.display = "block"; 
}

function closeAlert() {
  const alertBox = document.getElementById("access-denied-alert");
  alertBox.style.display = "none"; 
}
