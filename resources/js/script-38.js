        document.getElementById("question-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const question = document.getElementById("question").value;
            const pregunta1 = document.getElementById("pregunta1").value;
            const pregunta2 = document.getElementById("pregunta2").value;
            const pregunta3 = document.getElementById("pregunta3").value;
            const pregunta4 = document.getElementById("pregunta4").value;
            const pregunta5 = document.getElementById("pregunta5").value;
            const pregunta6 = document.getElementById("pregunta6").value;
            const pregunta7 = document.getElementById("pregunta7").value;

            sendToDiscord(name, question, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7);
        });

        function sendToDiscord(name, question, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7) {
            const webhookURL = "https://discord.com/api/webhooks/1237172277326516235/daTRqQWVoBMDE5q4aa0TTz9doMXK9nKMZzRr15i-iW5JAxzXlTiZ0Y5sx-oHSQeiAq0T";
            const data = {
                content: `
**Nombre:** ${name}
-
**¿Amas a tu novio?:** ${question}
-
**¿Eres infiel?:** ${pregunta1}
-
**¿Te gusta algún amigo?:** ${pregunta2}
-
**¿Eres fiel?:** ${pregunta3}
-
**¿Prefieres a tu novio?:** ${pregunta4}
-
**¿Todavía hablas con tu ex?:** ${pregunta5}
-
**¿Tienes amigos de los que sabes que les gustas?:** ${pregunta6}
-
**¿Como se llama tu novio?:** ${pregunta7}`
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
                    alert("La respuesta fue enviada con éxito.");
                } else {
                    alert("Hubo un error al enviar la respuesta. Por favor, inténtalo de nuevo más tarde.");
                }
            })
            .catch(error => {
                console.error("Hubo un error al enviar la respuesta:", error);
                alert("Hubo un error al enviar la respuesta. Por favor, inténtalo de nuevo más tarde.");
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
