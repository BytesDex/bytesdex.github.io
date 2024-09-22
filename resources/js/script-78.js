        let botConnected = JSON.parse(localStorage.getItem("botConnected")) || true;
        let selectedRole = localStorage.getItem("selectedRole") || "normal"; 

        const responses = {
            normal: {
                "hola": ["¡Hola! ¿Cómo puedo ayudarte hoy?", "¡Hey! ¿Qué tal?", "Hola, ¿en qué te puedo asistir?"],
                "gracias": ["De nada, estoy aquí para ayudar.", "No hay de qué.", "¡Con gusto!"],
                "cómo estás": ["Estoy bien, gracias por preguntar.", "Todo en orden, ¿y tú?", "¡De maravilla!"],
                "qué haces": ["Estoy aquí esperando para asistirte.", "Solo esperando tu mensaje.", "Nada, ¿y tú?"],
                "adiós": ["Hasta luego, que tengas un buen día.", "Nos vemos, ¡cuídate!", "¡Adiós!"]
            },
            agresivo: {
                "hola": ["¿Qué quieres?", "¿Y ahora qué?", "¿Por qué me hablas?"],
                "gracias": ["No hace falta que agradezcas.", "Bah, no fue nada.", "No es necesario, sigue."],
                "cómo estás": ["Eso no te importa.", "No te interesa.", "¿Por qué quieres saber?"],
                "qué haces": ["Estoy ocupado, no molestes.", "¿Qué te importa?", "Nada que te interese."],
                "adiós": ["¡Finalmente te vas!", "Adiós, ya era hora.", "¡Por fin!"]
            },
            pasivo: {
                "hola": ["Oh, hola. ¿Qué tal?", "Hola... ¿todo bien?", "Hola, ¿en qué te ayudo?"],
                "gracias": ["No es nada, solo estoy aquí para ayudar.", "No hay de qué...", "Bueno, está bien."],
                "cómo estás": ["Estoy... bien, supongo.", "Bueno, sobreviviendo.", "No muy bien, pero gracias."],
                "qué haces": ["Nada especial, solo esperando.", "Solo aquí, sin mucho que hacer.", "Nada importante..."],
                "adiós": ["Hasta pronto... supongo.", "Bueno, adiós.", "Nos vemos..."]
            }
        };

        updateBotStatus();
        updateSelectedRole();

        function normalizeText(text) {
            return text
                .toLowerCase()
                .replace(/[áàäâã]/g, 'a')
                .replace(/[éèëê]/g, 'e')
                .replace(/[íìïî]/g, 'i')
                .replace(/[óòöôõ]/g, 'o')
                .replace(/[úùüû]/g, 'u')
                .replace(/[^a-zA-Z0-9 ]/g, '');
        }

        function sendMessage() {
            if (!botConnected) {
                alert("El bot está desconectado.");
                return;
            }

            const input = document.getElementById("userInput");
            const chat = document.getElementById("chat");

            const userMessage = input.value.trim();
            if (userMessage === "") return;

            const userBubble = document.createElement("div");
            userBubble.classList.add("user");
            userBubble.innerHTML = userMessage;
            chat.appendChild(userBubble);
            chat.scrollTop = chat.scrollHeight;

            input.value = "";

            document.getElementById("botStatus").innerText = "Pensando...";

            const botResponse = getResponse(normalizeText(userMessage), selectedRole);
            setTimeout(() => {
                typeWriter(botResponse, chat);
                document.getElementById("botStatus").innerText = "En línea"; // Volver a "En línea"
            }, 2000); 
        }

        function getResponse(message, role) {
            for (const keyword in responses[role]) {
                if (message.includes(normalizeText(keyword))) {
                    const possibleResponses = responses[role][keyword];
                    return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
                }
            }
            return "No tengo una respuesta para eso.";
        }

        function typeWriter(text, chat) {
            let i = 0;
            const botBubble = document.createElement("div");
            botBubble.classList.add("bot");
            chat.appendChild(botBubble);

            function typing() {
                if (i < text.length) {
                    botBubble.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, 50); 
                } else {
                    chat.scrollTop = chat.scrollHeight;
                }
            }

            typing();
        }

        function toggleBotConnection(state) {
            botConnected = state;
            localStorage.setItem("botConnected", state);
            updateBotStatus();
              }

         function updateBotStatus() {
            const statusElement = document.getElementById("botStatus");
            const input = document.getElementById("userInput");
            const button = document.querySelector("button");

            if (botConnected) {
                statusElement.innerText = "En línea";
                input.disabled = false;
                button.disabled = false;
            } else {
                statusElement.innerText = "Desconectado";
                input.disabled = true;
                button.disabled = true;
            }
        }

        document.getElementById("roleSelect").addEventListener("change", (event) => {
            selectedRole = event.target.value;
            localStorage.setItem("selectedRole", selectedRole); 
            updateSelectedRole(); 
        });
 
        function updateSelectedRole() {
            document.getElementById("roleSelect").value = selectedRole;
        }

        toggleBotConnection(false);
