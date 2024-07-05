    window.onload = function () {
      const usuarioIniciado = localStorage.getItem('usuarioIniciado');

      if (usuarioIniciado) {
        
        window.location.href = 'https://webcodem.github.io/funciones';
      }
    };

    function iniciarSesion() {
      const nombreUsuarioInput = document.getElementById('nombreUsuarioLogin');
      const contrasenaInput = document.getElementById('contrasenaLogin');
      const mensajeElemento = document.getElementById('mensajeLogin');

      const nombreUsuario = nombreUsuarioInput.value;
      const contrasena = contrasenaInput.value;

      const usuarioRegistrado = sessionStorage.getItem(nombreUsuario);

      if (usuarioRegistrado && JSON.parse(usuarioRegistrado).contrasena === contrasena) {
        mensajeElemento.innerText = 'Inicio de sesión exitoso';

        localStorage.setItem('usuarioIniciado', true);

        window.location.href = 'https://webcodem.github.io/funciones';
      } else {
        mensajeElemento.innerText = 'Nombre de usuario o contraseña incorrectos';
      }
    }

    function mostrarRegistro() {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registroForm').style.display = 'block';
    }

    function mostrarInicioSesion() {
      document.getElementById('registroForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
    }

    function registrarCuenta() {
      const nombreUsuarioInput = document.getElementById('nombreUsuarioRegistro');
      const contrasenaInput = document.getElementById('contrasenaRegistro');
      const mensajeElemento = document.getElementById('mensajeRegistro');

      const nombreUsuario = nombreUsuarioInput.value;
      const contrasena = contrasenaInput.value;

      sessionStorage.setItem(nombreUsuario, JSON.stringify({ nombreUsuario, contrasena }));
      mensajeElemento.innerText = 'Cuenta registrada con éxito';
    }
