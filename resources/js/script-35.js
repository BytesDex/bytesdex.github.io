document.addEventListener("DOMContentLoaded", function() {

    if (localStorage.getItem("loggedIn") === "true") {
      
      document.querySelector(".popup-container").style.display = "none";
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
  
  if (localStorage.getItem("loggedIn") === "true") {
    document.querySelector(".popup-container").style.display = "none";
  } else {
    
    document.querySelector(".popup-container").style.display = "flex";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  
  if (localStorage.getItem("loggedIn") === "true") {
    
    document.querySelector(".popup-container").style.display = "none";
  }
});
