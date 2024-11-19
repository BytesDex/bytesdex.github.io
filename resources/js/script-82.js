if (localStorage.getItem("loggedIn") !== "true" || localStorage.getItem("currentUser") !== "Bytes") {
            document.getElementById("alert-overlay").classList.add("show");
        } else {
            document.getElementById("alert-overlay").classList.remove("show");
}
