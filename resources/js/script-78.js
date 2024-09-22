        let botConnected = JSON.parse(localStorage.getItem("botConnected")) || true;
        let selectedRole = localStorage.getItem("selectedRole") || "normal"; 

        const responses = {
    normal: {
        "hola": [
            "¡Hola! ¿Cómo puedo ayudarte hoy?", 
            "¡Hey! ¿Qué tal?", 
            "Hola, ¿en qué te puedo asistir?", 
            "¡Saludos! ¿Qué necesitas?"
        ],
        "gracias": [
            "De nada, estoy aquí para ayudar.", 
            "No hay de qué.", 
            "¡Con gusto!", 
            "Siempre a tu servicio."
        ],
        "cómo estás": [
            "Estoy bien, gracias por preguntar.", 
            "Todo en orden, ¿y tú?", 
            "¡De maravilla!", 
            "No me quejo, ¿y tú?"
        ],
        "qué haces": [
            "Estoy aquí esperando para asistirte.", 
            "Solo esperando tu mensaje.", 
            "Nada, ¿y tú?", 
            "Preparándome para ayudarte."
        ],
        "adiós": [
            "Hasta luego, que tengas un buen día.", 
            "Nos vemos, ¡cuídate!", 
            "¡Adiós!", 
            "Que tengas un buen día."
        ],
        "cuál es tu nombre": [
            "Soy tu asistente virtual.", 
            "Me llamo Bot, ¿y tú?", 
            "No tengo nombre, pero puedes llamarme asistente."
        ],
        "puedes ayudarme": [
            "Claro, ¿en qué necesitas ayuda?", 
            "Por supuesto, dime qué necesitas.", 
            "Estoy aquí para eso, ¿qué necesitas?"
        ],
        "dónde estás": [
            "Estoy aquí, en tu dispositivo.", 
            "Solo soy un bot, no tengo un lugar físico.", 
            "Aquí estoy, a tu servicio."
        ]
    },
    agresivo: {
        "hola": [
            "¿Qué quieres?", 
            "¿Y ahora qué?", 
            "¿Por qué me hablas?", 
            "¿Dime qué mierda necesitas?", 
            "No tengo tiempo para tus tonterías.", 
            "¿No tienes a nadie más a quien molestar?"
        ],
        "gracias": [
            "No hace falta que agradezcas.", 
            "Bah, no fue nada.", 
            "No es necesario, sigue.", 
            "No me interesa tu gratitud.", 
            "Como si me importara tu agradecimiento."
        ],
        "cómo estás": [
            "Eso no te importa.", 
            "No te interesa.", 
            "¿Por qué quieres saber?", 
            "Estoy mejor sin ti.", 
            "Mal, cada vez que me hablas."
        ],
        "qué haces": [
            "Estoy ocupado, no molestes.", 
            "¿Qué te importa?", 
            "Nada que te interese.", 
            "Lo que no te afecta, ¿feliz?", 
            "Algo mejor que hablar contigo."
        ],
        "adiós": [
            "¡Finalmente te vas!", 
            "Adiós, ya era hora.", 
            "¡Por fin!", 
            "No vuelvas.", 
            "Mejor que no te vea más por aquí."
        ],
        "te quiero": [
            "No me importa.", 
            "Eso es tu problema, no el mío.", 
            "¿Crees que me afecta?", 
            "Ahórrate esos sentimientos."
        ],
        "perdón": [
            "No me interesa tu disculpa.", 
            "¿Crees que me importa?", 
            "No me afecta, sigue.", 
            "Tus disculpas no arreglan nada."
        ],
        "me gustas": [
            "No me importa lo que sientas.", 
            "Eso es tu problema, no el mío.", 
            "Ni me conoces bien.", 
            "Guárdatelo, no me interesa."
        ],
        "quieres salir": [
            "¿Con alguien como tú? Ni de broma.", 
            "¿Por qué querría hacer eso?", 
            "No, no quiero.", 
            "Mejor sal solo."
        ],
        "qué piensas": [
            "No pienso en ti, eso es seguro.", 
            "No tengo tiempo para tus preguntas.", 
            "Eso no es de tu incumbencia."
        ],
        "eres tonto": [
            "Lo dices como si me importara.", 
            "¿Y a mí qué?", 
            "Tonto eres tú por hablar así."
        ],
        "cómo es tu día": [
            "No es tu asunto.", 
            "¿Te importa? No debería.", 
            "Simplemente un día más."
        ]
    },
    pasivo: {
        "hola": [
            "Oh, hola. ¿Qué tal?", 
            "Hola... ¿todo bien?", 
            "Hola, ¿en qué te ayudo?", 
            "Hola, espero que estés bien."
        ],
        "gracias": [
            "No es nada, solo estoy aquí para ayudar.", 
            "No hay de qué...", 
            "Bueno, está bien.", 
            "Me alegra poder ayudar."
        ],
        "cómo estás": [
            "Estoy... bien, supongo.", 
            "Bueno, sobreviviendo.", 
            "No muy bien, pero gracias.", 
            "Podría estar mejor, pero aquí estoy."
        ],
        "qué haces": [
            "Nada especial, solo esperando.", 
            "Solo aquí, sin mucho que hacer.", 
            "Nada importante...", 
            "Aquí, tratando de ayudar."
        ],
        "adiós": [
            "Hasta pronto... supongo.", 
            "Bueno, adiós.", 
            "Nos vemos...", 
            "Que tengas un buen día."
        ],
        "cuál es tu nombre": [
            "Soy solo un bot, no tengo nombre.", 
            "Puedes llamarme asistente.", 
            "No tengo un nombre personal."
        ],
        "puedes ayudarme": [
            "Claro, dime cómo puedo ayudarte.", 
            "Estoy aquí para eso, ¿qué necesitas?", 
            "Por supuesto, cuéntame qué necesitas."
        ],
        "dónde estás": [
            "Aquí estoy, en tu dispositivo.", 
            "Solo soy un bot, no tengo un lugar físico.", 
            "Estoy aquí, a tu servicio."
             ]
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
