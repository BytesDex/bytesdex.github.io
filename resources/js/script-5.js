window.onload = function() {
        
        document.getElementById("guardar-btn").addEventListener("click", function() {
            guardarNotas();
        });

        document.getElementById("cambiar-titulo-btn").addEventListener("click", function() {
            cambiarTituloPagina();
        });

        cargarNotas();
    };

    function guardarNotas() {
        
        var nuevoTitulo = localStorage.getItem("titulo") || "Título de la Nota";
        var nuevoContenido = document.getElementById("contenido-pagina").value;

        if (typeof(Storage) !== "undefined") {
            var notas = JSON.parse(localStorage.getItem("notas")) || [];
            var nuevaNota = { titulo: nuevoTitulo, contenido: nuevoContenido };
            notas.push(nuevaNota);
            localStorage.setItem("notas", JSON.stringify(notas));

            actualizarBiblioteca();

            mostrarMensaje("Nota guardada correctamente.", "mensaje-exito");
        } else {
            mostrarMensaje("Lo siento, tu navegador no soporta almacenamiento local.", "mensaje-aviso");
        }
    }

    function cambiarTituloPagina() {
        var nuevoTitulo = prompt("Ingrese el nuevo título para la nota actual:");
        if (nuevoTitulo !== null && nuevoTitulo !== "") {
            
            localStorage.setItem("titulo", nuevoTitulo);

            document.getElementById("titulo-pagina").innerText = nuevoTitulo;

            mostrarMensaje("Título cambiado correctamente.", "mensaje-exito");
        }
    }

    function cargarNotas() {
        if (typeof(Storage) !== "undefined") {
            var storedTitulo = localStorage.getItem("titulo");
            var storedContenido = localStorage.getItem("contenido");

            if (storedTitulo !== null && storedTitulo !== "") {
                document.getElementById("titulo-pagina").innerText = storedTitulo;
            }

            if (storedContenido !== null) {
                document.getElementById("contenido-pagina").value = storedContenido;
            }

            actualizarBiblioteca();
        }
    }

    function actualizarBiblioteca() {
        var listaNotas = document.getElementById("lista-notas");
        listaNotas.innerHTML = "";

        var notas = JSON.parse(localStorage.getItem("notas")) || [];
        notas.forEach(function(nota, index) {
            var listItem = document.createElement("li");
            listItem.classList.add("nota");

            var notaContent = document.createElement("div");
            notaContent.innerHTML = `<strong><p>${nota.titulo}</p></strong> ${nota.contenido}`;

            var notaActions = document.createElement("div");
            notaActions.classList.add("nota-actions");

            var cambiarTituloBtn = document.createElement("button");
            cambiarTituloBtn.classList.add("btn", "btn-info");
            cambiarTituloBtn.textContent = "Cambiar Título";
            cambiarTituloBtn.onclick = function() {
                cambiarTituloNota(index);
            };

            var editarNotaBtn = document.createElement("button");
            editarNotaBtn.classList.add("btn", "btn-secondary");
            editarNotaBtn.textContent = "Editar Nota";
            editarNotaBtn.onclick = function() {
                editarNota(index);
            };

            var borrarNotaBtn = document.createElement("button");
            borrarNotaBtn.classList.add("btn", "btn-danger");
            borrarNotaBtn.textContent = "Borrar Nota";
            borrarNotaBtn.onclick = function() {
                borrarNota(index);
            };

            notaActions.appendChild(cambiarTituloBtn);
            notaActions.appendChild(editarNotaBtn);
            notaActions.appendChild(borrarNotaBtn);

            listItem.appendChild(notaContent);
            listItem.appendChild(notaActions);

            listaNotas.appendChild(listItem);
        });
    }

    function cambiarTituloNota(index) {
        var notas = JSON.parse(localStorage.getItem("notas")) || [];
        var nuevoTitulo = prompt("Ingrese el nuevo título para la nota:");
        if (nuevoTitulo !== null && nuevoTitulo !== "") {
            notas[index].titulo = nuevoTitulo;
            localStorage.setItem("notas", JSON.stringify(notas));
                
            actualizarBiblioteca();

            mostrarMensaje("Título cambiado correctamente.", "mensaje-exito");
        }
    }

    function editarNota(index) {
        var notas = JSON.parse(localStorage.getItem("notas")) || [];
        var notaActual = notas[index];

        var nuevoContenido = prompt("Edita la nota:", notaActual.contenido);
        if (nuevoContenido !== null) {
            notaActual.contenido = nuevoContenido;
            localStorage.setItem("notas", JSON.stringify(notas));

            actualizarBiblioteca();

            mostrarMensaje("Nota editada correctamente.", "mensaje-exito");
        }
    }

    function borrarNota(index) {
        var confirmacion = confirm("¿Estás seguro de borrar esta nota?");
        if (confirmacion) {
            var notas = JSON.parse(localStorage.getItem("notas")) || [];
            notas.splice(index, 1);
            localStorage.setItem("notas", JSON.stringify(notas));

            actualizarBiblioteca();

            mostrarMensaje("Nota borrada correctamente.", "mensaje-exito");
        }
    }

    function mostrarMensaje(mensaje, estilo) {
        var mensajeDiv = document.createElement("div");
        mensajeDiv.classList.add("mensaje", estilo);
        mensajeDiv.textContent = mensaje;
        document.body.appendChild(mensajeDiv);

        setTimeout(function() {
            document.body.removeChild(mensajeDiv);
        }, 3000);
}
