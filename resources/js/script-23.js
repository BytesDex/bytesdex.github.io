     document.addEventListener("DOMContentLoaded", function() {
      
      if (!localStorage.getItem("popupShown")) {
        mostrarPopup();
      } else {
        var edadInput = localStorage.getItem("edadInput");
        if (edadInput !== null && parseInt(edadInput) >= 18) {
          cerrarPopup();
        } else {
          mostrarOverlay();
        }
      }
    });

    function mostrarPopup() {
      var popup = document.getElementById("popup");
      var overlay = document.getElementById("overlay");
      popup.style.display = "block";
      overlay.style.display = "none";
    }

    function cerrarPopup() {
      var popup = document.getElementById("popup");
      var overlay = document.getElementById("overlay");
      popup.style.display = "none";
      overlay.style.display = "none"; 
      
      localStorage.setItem("popupShown", "true");
    }

    function mostrarOverlay() {
      var overlay = document.getElementById("overlay");
      overlay.style.display = "flex";
    }

    function verificarEdad() {
      var edadInput = document.getElementById("edadInput").value;
      localStorage.setItem("edadInput", edadInput); 
      if (edadInput && parseInt(edadInput) >= 18) {
        cerrarPopup();
      } else {
        mostrarOverlay();
        cerrarPopup(); 
      }
    }
