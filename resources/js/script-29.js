 const usuarios = [
    { nombre: "Juan", comentario: "¡Esta página es genial!" },
    { nombre: "María", comentario: "Me encanta este sitio web." },
    { nombre: "Carlos", comentario: "La página funciona muy bien." },
    { nombre: "Laura", comentario: "¡Excelente diseño y funcionalidad!" },
    { nombre: "Pedro", comentario: "Buena interfaz de usuario." },
    { nombre: "Ana", comentario: "¡Nunca he visto algo así antes!" },
    { nombre: "Diego", comentario: "Fácil de usar y muy útil." },
    { nombre: "Sofía", comentario: "¡Mis felicitaciones al equipo de desarrollo!" },
    { nombre: "Luis", comentario: "¡Qué gran trabajo han hecho!" },
    { nombre: "Elena", comentario: "Me gusta mucho la estética de la página." },
    { nombre: "Alejandro", comentario: "Gran variedad de funciones." },
    { nombre: "Lucía", comentario: "Interfaz intuitiva y amigable." },
    { nombre: "Pablo", comentario: "¡Increíble experiencia de usuario!" },
    { nombre: "Carmen", comentario: "Perfecta combinación de diseño y funcionalidad." },
    { nombre: "Javier", comentario: "No puedo dejar de explorar la página." },
    { nombre: "Marta", comentario: "¡Qué fácil es encontrar lo que necesito!" },
    { nombre: "Andrés", comentario: "Muy impresionado con la calidad del servicio." },
    { nombre: "Teresa", comentario: "¡Una joya de página web!" },
    { nombre: "Roberto", comentario: "Me hace la vida mucho más fácil." },
    { nombre: "Isabel", comentario: "¡Recomendaré esta página a todos mis amigos!" },
    { nombre: "Fernando", comentario: "La usabilidad de este sitio es excepcional." },
    { nombre: "Mónica", comentario: "¡Mis felicitaciones al equipo de desarrollo!" },
    { nombre: "Jorge", comentario: "Cada vez que visito esta página, me sorprende." },
    { nombre: "Natalia", comentario: "¡Nunca había visto algo tan impresionante!" },
    { nombre: "Ricardo", comentario: "La página cumple todas mis expectativas." },
    { nombre: "Lucas", comentario: "¡Es increíble lo fácil que es navegar aquí!" },
    { nombre: "Daniela", comentario: "¡No puedo dejar de recomendar esta página!" },
    { nombre: "Gabriel", comentario: "Excelente servicio al cliente." },
    { nombre: "Victoria", comentario: "¡Una experiencia de usuario de primera clase!" },
    { nombre: "José", comentario: "¡Definitivamente mi página favorita!" },
    { nombre: "Adriana", comentario: "Perfecta combinación de diseño y funcionalidad." },
    { nombre: "Camila", comentario: "¡Me encanta pasar tiempo aquí!" },
    { nombre: "Francisco", comentario: "¡La navegación es tan fluida!" },
    { nombre: "Valentina", comentario: "¡Gracias por este sitio tan útil!" },
    { nombre: "Eduardo", comentario: "La página se ve increíble en móviles también." },
    { nombre: "Paula", comentario: "¡Es tan fácil encontrar lo que necesito!" },
    { nombre: "Mateo", comentario: "¡Me siento inspirado cada vez que la visito!" },
    { nombre: "Esther", comentario: "¡Simplemente perfecta!" }
  ];

  function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generarComentario() {
    const chat = document.getElementById("chat");
    const usuario = usuarios[numeroAleatorio(0, usuarios.length - 1)];
    const comentario = `${usuario.nombre}: ${usuario.comentario}`;
    const commentDiv = document.createElement("div");
    commentDiv.textContent = comentario;
    commentDiv.classList.add("comment");

    if (chat.firstChild && chat.childNodes.length >= 21) { 
      chat.removeChild(chat.lastChild);
    }

    chat.insertBefore(commentDiv, chat.firstChild);
  }

  setInterval(generarComentario, 3000);
