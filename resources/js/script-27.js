function copiarSimbolo(boton) {
    var simbolo = boton.previousElementSibling.innerText;
    var aux = document.createElement("input");
    aux.setAttribute("value", simbolo);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    mostrarMensajeCopiado(boton);
}

function mostrarMensajeCopiado(boton) {
    var mensaje = boton.nextElementSibling;
    mensaje.style.display = "block";
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 2000); 
}
