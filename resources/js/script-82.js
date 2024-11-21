const allowedUsers = ["Bytes", "Test"];

if (localStorage.getItem("loggedIn") !== "true" || !allowedUsers.includes(localStorage.getItem("currentUser"))) {
    document.getElementById("alert-overlay").classList.add("show");
} else {
    document.getElementById("alert-overlay").classList.remove("show");
}
