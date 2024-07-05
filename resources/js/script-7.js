document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("longitud").value = "";
});

function generarContraseña() {
  var longitud = document.getElementById("longitud").value;
  var incluirMayusculas = document.getElementById("mayusculas").classList.contains("checked");
  var incluirMinusculas = document.getElementById("minusculas").classList.contains("checked");
  var incluirNumeros = document.getElementById("numeros").classList.contains("checked");
  var incluirSimbolos = document.getElementById("simbolos").classList.contains("checked");
  
  var caracteres = "";
  if (incluirMayusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (incluirMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
  if (incluirNumeros) caracteres += "0123456789";
  if (incluirSimbolos) caracteres += "!@#$%^&*()_+";
  
  var contraseña = "";
  for (var i = 0; i < longitud; i++) {
    contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  
  document.getElementById("contraseñaGenerada").value = contraseña;
}

document.querySelectorAll(".checkbox-square").forEach(function(square) {
  square.addEventListener("click", function() {
    square.classList.toggle("checked");
  });
});
