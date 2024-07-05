var input = document.getElementById("input");
var button = document.getElementById("send");

input.oninput = function() {
  if (input.value.length > 0) {
    button.style.display = "inline";
  } else {
    button.style.display = "none";
  }
};

function cambiarNombre() {
    var nombreInput = document.getElementById("nombreInput").value;
    document.getElementById("nombreChat").innerHTML = '<span>' + nombreInput + '</span>';
    document.getElementById("fondoBlanco").style.display = "none";
    
    localStorage.setItem('chatName', nombreInput);
}

document.addEventListener('DOMContentLoaded', function() {
    var savedChatName = localStorage.getItem('chatName');
    
    if (savedChatName) {
        
        document.getElementById("nombreChat").innerHTML = '<span>' + savedChatName + '</span>';
        document.getElementById("fondoBlanco").style.display = "none";
    }
});
