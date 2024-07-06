document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedProfilePic = localStorage.getItem('profilePic');
    const isBanned = localStorage.getItem('isBanned');

    if (isBanned === 'true') {
        alert("Estás baneado por usar palabras inapropiadas.");
        document.getElementById("user-input").disabled = true;
        return;
    }

    if (savedUsername && savedProfilePic) {
        displayUserData(savedUsername, savedProfilePic);
    } else {
        const defaultProfilePic = 'https://cdm-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
        const defaultUsername = 'Usuario';

        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('profilePic', defaultProfilePic);

        displayUserData(defaultUsername, defaultProfilePic);
    }
});

function displayUserData(username, profilePic) {
    const userContainer = document.getElementById('userContainer');

    if (!userContainer) {
        console.error("El elemento 'userContainer' no estará presente en la página.");
        return;
    }

    userContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = profilePic;
    img.alt = 'Foto de perfil';
    img.classList.add('profile-img', 'user-profile-img');

    const span = document.createElement('span');
    span.textContent = username;

    userContainer.appendChild(img);
    userContainer.appendChild(span);

    img.onclick = span.onclick = chooseProfilePicture;
}

const bannedWords = ["puta", "fuck", "puto", "gey", "gay", "gei", "homosexual", "trans", "transexual", "mierda", "cerote", "shit", "bitch", "perra", "zorra", "malparido", "malparida", "pendejo", "pendeja", "estúpido", "estupido", "estúpida", "estupida", "inbecil", "idiota", "maldita", "maldito"]; 

function containsBannedWords(input) {
    for (let word of bannedWords) {
        if (input.includes(word)) {
            return true;
        }
    }
    return false;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    if (!userInput) {
        alert("Por favor, escribe un mensaje antes de enviar.");
        document.getElementById("user-input").focus();
        return;
    }

    if (containsBannedWords(userInput.toLowerCase())) {
        alert("Se detectaron palabras inapropiadas. Estás baneado.");
        localStorage.setItem('isBanned', 'true');
        return;
    }

    var chatMessages = document.getElementById("chat-messages");

    var userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("message-container", "user-message-container");
    chatMessages.appendChild(userMessageContainer);

    var userImg = document.createElement("img");
    userImg.src = localStorage.getItem('profilePic');
    userImg.alt = 'Foto de perfil';
    userImg.classList.add("profile-img", "user-profile-img");
    userMessageContainer.appendChild(userImg);

    var userMessageNode = document.createElement("div");
    userMessageNode.classList.add("message", "user-message");
    userMessageNode.textContent = userInput;
    userMessageContainer.appendChild(userMessageNode);

    var botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("message-container", "bot-message-container");
    chatMessages.appendChild(botMessageContainer);

    var botImg = document.createElement("img");
    botImg.src = "https://webcodem-media.github.io/resources/multimedia/imagen/bot.jpg";
    botImg.alt = 'Foto de perfil';
    botImg.classList.add("profile-img");
    botMessageContainer.appendChild(botImg);

    var botMessageNode = document.createElement("div");
    botMessageNode.classList.add("message", "bot-message");
    botMessageContainer.appendChild(botMessageNode);

    if (
    userInput.toLowerCase().includes("recomendar un video de asmr") ||
    userInput.toLowerCase().includes("recomendacion de videos de asmr") ||
    userInput.toLowerCase().includes("recomendación de videos de asmr") ||
    userInput.toLowerCase().includes("recomendacion de un video de asmr") ||
    userInput.toLowerCase().includes("recomendación de un video de asmr") ||
    userInput.toLowerCase().includes("video de recomendado de asmr") ||
    userInput.toLowerCase().includes("quiero un video de asmr") ||
    userInput.toLowerCase().includes("sugiere un video de asmr") ||
    userInput.toLowerCase().includes("dame un video de asmr") ||
    userInput.toLowerCase().includes("video asmr por favor") ||
    userInput.toLowerCase().includes("quiero ver un video de asmr") ||
    userInput.toLowerCase().includes("ponme un video de asmr") ||
    userInput.toLowerCase().includes("quiero relajarme con un video de asmr") ||
    userInput.toLowerCase().includes("me puedes hacer una recomendacion de un video de asmr") ||
    userInput.toLowerCase().includes("me puedes hacer una recomendación de un video de asmr") ||
    userInput.toLowerCase().includes("me puedes recomendar un video de asmr") ||
    userInput.toLowerCase().includes("recomendame un video de asmr") ||
    userInput.toLowerCase().includes("recomiéndame un video de asmr") ||
    userInput.toLowerCase().includes("video relajante de asmr") ||
    userInput.toLowerCase().includes("quiero un asmr") ||
    userInput.toLowerCase().includes("video de relajacion de asmr") ||
    userInput.toLowerCase().includes("video de relajación de asmr") ||
    userInput.toLowerCase().includes("recomendación asmr") ||
    userInput.toLowerCase().includes("recomendacion asmr") ||
    userInput.toLowerCase().includes("video para relajarse asmr") ||
    userInput.toLowerCase().includes("video de susurros asmr") ||
    userInput.toLowerCase().includes("video de sonidos asmr") ||
    userInput.toLowerCase().includes("quiero escuchar asmr") ||
    userInput.toLowerCase().includes("quiero ver asmr") ||
    userInput.toLowerCase().includes("recomiendame asmr") ||
    userInput.toLowerCase().includes("recomiéndame asmr") ||
    userInput.toLowerCase().includes("recomendar asmr")
) {
    var topText = document.createElement("p");
    topText.textContent = "";
    botMessageNode.appendChild(topText);

    typeMessage(topText, "¡Aquí tienes tu video recomendado!");

    setTimeout(function() {
        var asmrVideos = [
            "https://www.youtube.com/embed/UTV6knOcChM?si=BTz35X0c86VH9CIZ",
            "https://www.youtube.com/embed/lT_6B8YLz4E?si=zJYdux0BUTK9mKLo",
            "https://www.youtube.com/embed/LAB5p23y40U?si=HydzsyO2IhguUvd4",
            "https://www.youtube.com/embed/Md4MtjuMj1k?si=TdzS34x84Cir6Nbq",
            "https://www.youtube.com/embed/YDeMme7yVJI?si=T_0_gqriZKLsSDH6"
        ];

        var asmrTexts = [
            "Disfruta de este relajante video de ASMR, ¡ideal para desconectar!",
            "Este video te llevará a un estado de paz y tranquilidad.",
            "Déjate llevar por los sonidos suaves y relajantes de este video.",
            "Perfecto para relajarte después de un largo día.",
            "Este video es como un abrazo reconfortante para tu mente."
        ];

        var randomIndex = Math.floor(Math.random() * asmrVideos.length);
        var iframe = document.createElement("iframe");

        iframe.src = asmrVideos[randomIndex];
        
        iframe.width = "270";
        iframe.height = "150";
        iframe.style.border = "none";
        botMessageNode.appendChild(iframe);

        setTimeout(function() {
            var bottomText = document.createElement("p");
            bottomText.textContent = "";
            botMessageNode.appendChild(bottomText);
            typeMessage(bottomText, asmrTexts[randomIndex]);

            var finalText = document.createElement("p");
            finalText.textContent = "";
            botMessageNode.appendChild(finalText);

            setTimeout(function() {
                typeMessage(finalText, "¡Listo para regalarte! 😊");
            }, 3300);
        }, 1500);
    }, 1500);
} else {
    typeMessage(botMessageNode, getBotResponse(userInput));
}
    document.getElementById("user-input").value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function typeMessage(element, message) {
    var index = 0;
    var typingInterval = setInterval(function() {
        if (index < message.length) {
            element.innerHTML += message.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}

function getBotResponse(userInput) {
    var lowerCaseInput = userInput.toLowerCase();

    function corregirErrores(input) {
        var correcciones = {
            "hloa": "hola",
            "hl": "hola",
            "hoal": "hola",
            "holi": "hola",
            "clma": "clima",
            "clima?": "clima",
            "clima??": "clima",
            "adios": "adiós",
            "adiós?": "adiós",
            "adiós??": "adiós",
            "grcias": "gracias",
            "gracias?": "gracias",
            "gracias??": "gracias",
            "cual es tu nombre": "cuál es tu nombre",
            "cuentame un chiste": "cuéntame un chiste",
            "como estas": "cómo estás",
            "como te llamas": "cómo te llamas",
            "que día es hoy": "qué día es hoy",
            "cual es tu nombre": "cuál es tu nombre",
            "que horas es": "qué hora es",
        };

        for (var palabra in correcciones) {
            if (input.includes(palabra)) {
                input = input.replace(palabra, correcciones [palabra]);
            }
        }

        return input;
    }
    
    function getRandomResponse(responses) { 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

lowerCaseInput = corregirErrores(lowerCaseInput);

    if (lowerCaseInput.includes("hola")) {
        const respuestasHola = [
            "¡Hola! ¿Cómo estás?",
            "¡Saludos! ¿Qué tal estás hoy?",
            "Hola, ¿qué puedo hacer por ti?",
            "¡Hey! ¿En qué puedo ayudarte?",
            "¡Hola! ¿Necesitas ayuda con algo?",
            "¡Hola! ¿Qué te trae por aquí?",
            "¡Hola amigo! ¿En qué puedo servirte?",
            "Hola, ¿cómo va todo?",
            "¡Hola! ¿Qué tal tu día?",
            "¡Hola! ¿Listo para resolver tus dudas?"
        ];
        return getRandomResponse(respuestasHola);
    } else if (lowerCaseInput.includes("me gusta la mamá de mi amigo") || 
           lowerCaseInput.includes("me gusta la madre de mi amigo") || 
           lowerCaseInput.includes("estoy enamorado de la mamá de mi amigo") || 
           lowerCaseInput.includes("estoy enamorado de la madre de mi amigo") || 
           lowerCaseInput.includes("me siento atraído por la mamá de mi amigo") || 
           lowerCaseInput.includes("me siento atraído por la madre de mi amigo")) {
       const respuestasGustaMamaAmigo = [
           "Entiendo que esta situación pueda ser complicada. ¿Has considerado hablar con alguien de confianza sobre esto?",
           "Puede ser difícil navegar por sentimientos complejos. ¿Has pensado en hablar sobre esto con alguien de confianza?",
           "Es normal tener sentimientos confusos hacia alguien cercano. ¿Te gustaría discutir más sobre cómo te sientes?",
           "Los sentimientos pueden ser complicados, especialmente cuando involucran a personas cercanas. ¿Te gustaría hablar más sobre esto?",
           "Es importante recordar que los sentimientos pueden ser confusos, especialmente cuando involucran a alguien cercano. ¿Te gustaría hablar más sobre tus sentimientos?",
           "Entiendo que esta es una situación delicada. ¿Te gustaría hablar más sobre cómo te sientes y cómo manejar esta situación?",
           "Los sentimientos hacia alguien cercano pueden ser difíciles de entender. ¿Te gustaría explorar más sobre tus sentimientos y cómo abordarlos?",
           "Es comprensible que te sientas así, pero es importante manejar esta situación con sensibilidad. ¿Cómo te gustaría proceder?",
           "Puede ser útil buscar orientación de alguien de confianza en una situación como esta. ¿Has pensado en hablar con alguien al respecto?",
           "Es normal tener sentimientos complejos hacia personas cercanas. ¿Te gustaría hablar más sobre tus sentimientos y cómo manejarlos?"
        ];
        return getRandomResponse(respuestasGustaMamaAmigo);
    } else if (lowerCaseInput.includes("en nada") || 
           lowerCaseInput.includes("no necesito ayuda") || 
           lowerCaseInput.includes("no gracias") || 
           lowerCaseInput.includes("no por ahora") || 
           lowerCaseInput.includes("no en este momento") || 
           lowerCaseInput.includes("ya está") || 
           lowerCaseInput.includes("todo bien") || 
           lowerCaseInput.includes("estoy bien") || 
           lowerCaseInput.includes("no por el momento") || 
           lowerCaseInput.includes("no requiero asistencia") || 
           lowerCaseInput.includes("no necesito nada más")) {
       const respuestasEnNada = [
        "Entendido, aquí estoy si necesitas algo más. ¡Que tengas un buen día!",
        "Perfecto, si necesitas ayuda en el futuro, no dudes en preguntar. ¡Que tengas un excelente día!",
        "¡De acuerdo! Si necesitas ayuda más adelante, no dudes en volver. ¡Que tengas un día genial!",
        "Entiendo, si cambias de opinión o necesitas ayuda más adelante, aquí estaré. ¡Que tengas un buen día!",
        "Bien, si algo más surge, no dudes en volver. ¡Que tengas un día maravilloso!",
        "Está bien, si necesitas ayuda en el futuro, no dudes en pedirla. ¡Que tengas un día estupendo!",
        "De acuerdo, si tienes alguna otra pregunta más adelante, no dudes en hacerla. ¡Que tengas un día fantástico!",
        "Entiendo, si algo más se presenta, no dudes en contactarme. ¡Que tengas un día increíble!",
        "Está bien, no dudes en regresar si necesitas algo más. ¡Que tengas un día grandioso!",
        "Perfecto, aquí estaré si surge alguna otra pregunta. ¡Que tengas un día lleno de alegría!"
        ];
        return getRandomResponse(respuestasEnNada);
    } else if (lowerCaseInput.includes("me gusta mi mejor amiga") || 
           lowerCaseInput.includes("me gusta mi amiga") || 
           lowerCaseInput.includes("estoy enamorado de mi mejor amiga") || 
           lowerCaseInput.includes("estoy enamorado de mi amiga") || 
           lowerCaseInput.includes("me siento atraído por mi mejor amiga") || 
           lowerCaseInput.includes("me siento atraído por mi amiga")) {
       const respuestasGustaAmiga = [
           "Es normal tener sentimientos confusos hacia los amigos cercanos. ¿Has considerado hablar con alguien de confianza sobre esto?",
           "Entiendo que esta situación puede ser complicada. Sería útil hablar con alguien en quien confíes sobre tus sentimientos.",
           "Puede ser difícil navegar por sentimientos complejos hacia un amigo cercano. ¿Has pensado en hablar sobre esto con alguien de confianza?",
           "Los sentimientos hacia los amigos cercanos pueden ser complicados. ¿Te gustaría discutir más sobre cómo te sientes?",
           "Es importante recordar que los sentimientos pueden ser confusos, especialmente cuando involucran a amigos cercanos. ¿Te gustaría hablar más sobre esto?",
           "Entiendo que esta es una situación delicada. ¿Te gustaría hablar más sobre cómo te sientes y cómo manejar esta situación?",
           "Los sentimientos hacia un amigo cercano pueden ser difíciles de entender. ¿Te gustaría explorar más sobre tus sentimientos y cómo abordarlos?",
           "Es comprensible que te sientas así, pero es importante manejar esta situación con sensibilidad. ¿Cómo te gustaría proceder?",
           "Puede ser útil buscar orientación de alguien de confianza en una situación como esta. ¿Has pensado en hablar con alguien al respecto?",
           "Es normal tener sentimientos complejos hacia los amigos cercanos. ¿Te gustaría hablar más sobre tus sentimientos y cómo manejarlos?"
        ];
        return getRandomResponse(respuestasGustaAmiga);
    } else if (lowerCaseInput.includes("me gusta mi prima") || 
           lowerCaseInput.includes("estoy enamorado de mi prima") || 
           lowerCaseInput.includes("me siento atraído por mi prima")) {
       const respuestasGustaPrima = [
           "Es importante recordar que los sentimientos pueden ser confusos. ¿Has considerado hablar con alguien de confianza sobre esto?",
           "Es comprensible que te sientas confundido. ¿Has pensado en hablar sobre tus sentimientos con alguien en quien confíes?",
           "Entiendo que esta situación pueda ser complicada. Sería útil hablar con alguien de confianza sobre tus sentimientos.",
           "Es normal tener sentimientos encontrados, especialmente cuando se trata de relaciones familiares. ¿Te gustaría hablar más sobre esto?",
           "Puede ser difícil navegar por sentimientos complejos. ¿Has considerado hablar con alguien de confianza para obtener orientación?",
           "Los sentimientos pueden ser complicados, especialmente cuando involucran a un miembro de la familia. ¿Te gustaría discutir más sobre cómo te sientes?",
           "Entiendo que este es un tema delicado. ¿Te gustaría hablar más sobre cómo te sientes y cómo manejar esta situación?",
           "Es importante manejar esta situación con cuidado y respeto. ¿Te gustaría explorar más sobre tus sentimientos y cómo abordarlos?",
           "Puede ser útil buscar orientación de alguien de confianza en una situación como esta. ¿Has pensado en hablar con alguien al respecto?",
           "Es comprensible que te sientas así, pero es importante manejar esta situación con sensibilidad. ¿Cómo te gustaría proceder?"
        ];
        return getRandomResponse(respuestasGustaPrima);
    } else if (lowerCaseInput.includes("nombre de tu creador") || 
           lowerCaseInput.includes("quién te creó") || 
           lowerCaseInput.includes("quién es tu creador") || 
           lowerCaseInput.includes("quién te programó") || 
           lowerCaseInput.includes("quién es tu programador") || 
           lowerCaseInput.includes("quién te hizo") || 
           lowerCaseInput.includes("quién te desarrolló")) {
       const respuestasCreador = [
           "Mi creador prefiere mantener su identidad en privado.",
           "Mi creador prefiere mantenerse anónimo.",
           "Lo siento, no puedo revelar esa información.",
           "Mi creador no ha proporcionado permiso para compartir esa información.",
           "No tengo permitido revelar el nombre de mi creador.",
           "Prefiero mantener la identidad de mi creador en privado.",
           "Lo siento, no puedo divulgar información sobre mi creador.",
           "No tengo autorización para compartir esa información.",
           "Mi creador ha decidido mantener su identidad en secreto."
        ];
        return getRandomResponse(respuestasCreador);
    } else if (lowerCaseInput.includes("no sirves") || 
           lowerCaseInput.includes("no funcionas") || 
           lowerCaseInput.includes("no eres útil") || 
           lowerCaseInput.includes("no me ayudas") || 
           lowerCaseInput.includes("no me sirves") || 
           lowerCaseInput.includes("eres inútil") || 
           lowerCaseInput.includes("no eres de ayuda") || 
           lowerCaseInput.includes("no eres eficaz") || 
           lowerCaseInput.includes("no eres efectivo") || 
           lowerCaseInput.includes("no eres bueno")) {
       const respuestasNoSirves = [
           "Lamento que no estés teniendo una buena experiencia. Por favor, ayúdame a mejorar proporcionando más detalles sobre lo que no está funcionando.",
           "Mis disculpas si no cumplo con tus expectativas. Tu retroalimentación es valiosa. ¿Podrías describir más detalladamente cómo puedo ayudarte?",
           "Lo siento si no te he sido útil. Estoy aquí para ayudar. ¿Podrías proporcionar más información sobre lo que necesitas?",
           "Me disculpo si no cumplo con tus expectativas. Por favor, házmelo saber más específicamente sobre lo que no está funcionando para que pueda mejorar.",
           "Lamento mucho escuchar eso. Si me das más detalles sobre lo que no está funcionando, haré todo lo posible para resolver el problema.",
           "Mis disculpas si no estoy cumpliendo con tus necesidades. Por favor, proporciona más detalles para que pueda hacer los ajustes necesarios.",
           "Entiendo que puedas estar frustrado. Por favor, dime más sobre cómo puedo ayudarte mejor.",
           "Lo siento si mi rendimiento no ha sido satisfactorio. Tu retroalimentación es importante. ¿Podrías explicar más detalladamente lo que esperabas?",
           "Me disculpo si no he sido de ayuda. Por favor, permíteme saber cómo puedo mejorar y satisfacer tus necesidades.",
           "Lamento no haber cumplido con tus expectativas. Por favor, dime qué puedo hacer para ayudarte mejor."
        ];
        return getRandomResponse(respuestasNoSirves);
    } else if (lowerCaseInput.includes("tienes muchos bugs") || 
           lowerCaseInput.includes("tienes muchos errores") || 
           lowerCaseInput.includes("estás lleno de bugs") || 
           lowerCaseInput.includes("estás lleno de errores") || 
           lowerCaseInput.includes("tienes fallos") ||
           lowerCaseInput.includes("tienes defectos") ||
           lowerCaseInput.includes("tienes problemas") ||
           lowerCaseInput.includes("tienes errores en tu código") ||
           lowerCaseInput.includes("tienes muchos fallos")) {
       const respuestasBugs = [
           "Lamento escuchar eso. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. ¿Podrías proporcionar más detalles sobre los errores que estás experimentando?",
           "Mis disculpas por los problemas que estás experimentando. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, indícame los errores específicos para que pueda mejorar.",
           "Lo siento si estás teniendo problemas. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, dime más sobre los errores que encuentras para que pueda solucionarlos.",
           "Me disculpo por los inconvenientes. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Si puedes describir los problemas específicos, haré todo lo posible para resolverlos.",
           "Lamento los problemas que estás experimentando. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Tu retroalimentación es valiosa. ¿Podrías decirme más sobre los errores que has encontrado?",
           "Mis disculpas por cualquier molestia. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, reporta los errores que encuentres para que pueda abordarlos de inmediato.",
           "Entiendo que los errores pueden ser frustrantes. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Si me das más información sobre los problemas, haré todo lo posible para solucionarlos.",
           "Lo siento si mi rendimiento no es el esperado. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, ayúdame a mejorar informando los errores que has encontrado.",
           "Lamento mucho los inconvenientes. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, proporcióname detalles sobre los errores para que pueda trabajar en corregirlos.",
           "Me disculpo sinceramente por los errores. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Estoy aquí para ayudar. ¿Podrías describir los problemas que estás experimentando?",
           "Agradezco tu paciencia. Soy un bot en fase beta y probablemente tengo muchos errores. Mi creador estará trabajando en ello. Por favor, ayúdame a mejorar informándome sobre los errores que has notado."
        ];
        return getRandomResponse(respuestasBugs);
    } else if (lowerCaseInput.includes("cómo te crearon") || 
           lowerCaseInput.includes("con qué lenguaje estás creado") || 
           lowerCaseInput.includes("cómo fuiste desarrollado") || 
           lowerCaseInput.includes("qué lenguaje de programación se utilizó para crearte") ||
           lowerCaseInput.includes("cómo fuiste construido") ||
           lowerCaseInput.includes("qué lenguaje de programación se usó para crear") ||
           lowerCaseInput.includes("quién te creó") || 
           lowerCaseInput.includes("quién te programó")) {
       const respuestasCreacion = [
           "Fui desarrollado usando JavaScript y la biblioteca de OpenAI.",
           "Estoy siendo creado con habilidades de programación y la tecnología de OpenAI.",
           "Estoy siendo construido, utilizando JavaScript y las herramientas de OpenAI.",
           "Mi creación está usando JavaScript y la plataforma de OpenAI.",
           "Estás llevando a cabo mi desarrollo, utilizando JavaScript y la tecnología de OpenAI.",
           "Estoy siendo desarrollado, utilizando JavaScript y las capacidades de OpenAI.",
           "Fuiste tú quien me creó, utilizando JavaScript y las herramientas de OpenAI.",
           "Me estás programando, utilizando JavaScript y la plataforma de OpenAI.",
           "Estoy siendo construido con JavaScript y la tecnología de OpenAI.",
           "Fui creado utilizando JavaScript y la biblioteca de OpenAI.",
           "Estoy siendo desarrollado utilizando JavaScript y la tecnología de OpenAI."
        ];
        return getRandomResponse(respuestasCreacion);
    } else if (lowerCaseInput.includes("me hacen bullying") || 
           lowerCaseInput.includes("me acosan") || 
           lowerCaseInput.includes("sufro bullying") || 
           lowerCaseInput.includes("soy víctima de bullying") || 
           lowerCaseInput.includes("me molestan en la escuela")) {
       const respuestasBullying = [
           "Lamento mucho escuchar eso. Es importante hablar con un adulto de confianza, como un profesor, un consejero escolar o un familiar sobre lo que está pasando.",
           "Nadie merece ser tratado de esa manera. Busca apoyo en personas de confianza y no enfrentes esto solo.",
           "El bullying es inaceptable. Considera hablar con un maestro o un consejero escolar para que te puedan ayudar.",
           "Es fundamental que no guardes esto para ti mismo. Hablar con alguien de confianza puede marcar una gran diferencia.",
           "Recuerda que tienes derecho a sentirte seguro y respetado. Habla con un adulto de confianza para recibir apoyo.",
           "No estás solo en esto. Muchas personas quieren ayudarte, así que no dudes en buscar apoyo de familiares, amigos o profesores.",
           "Es importante que documentes lo que está pasando y lo informes a un adulto de confianza. Ellos pueden ayudarte a manejar la situación.",
           "El bullying puede afectar mucho, pero hay personas que pueden ayudarte. Habla con alguien en quien confíes.",
           "Buscar ayuda es crucial. No enfrentes esto solo, hay recursos y personas dispuestas a apoyarte.",
           "Tu bienestar es muy importante. Comunica lo que está pasando a un adulto de confianza para que puedan intervenir y ayudarte."
        ];
        return getRandomResponse(respuestasBullying);
    } else if (lowerCaseInput.includes("voy mal en mis estudios") || 
           lowerCaseInput.includes("me va mal en la escuela") || 
           lowerCaseInput.includes("tengo malas notas") || 
           lowerCaseInput.includes("no me va bien en los estudios")) {
       const respuestasEstudios = [
           "Entiendo que puede ser frustrante, pero es importante no desanimarse. ¿Hay algo específico con lo que necesitas ayuda?",
           "Es normal tener dificultades a veces. ¿Te gustaría que te diera algunos consejos para mejorar en tus estudios?",
           "Recuerda que todos tienen momentos difíciles. Lo importante es buscar apoyo y encontrar métodos de estudio que funcionen para ti.",
           "Quizás podrías hablar con un profesor o un consejero escolar para obtener ayuda adicional. Ellos pueden ofrecerte orientación y recursos.",
           "Organizar tu tiempo y crear un plan de estudio puede ser muy útil. ¿Quieres algunas recomendaciones sobre cómo hacerlo?",
           "A veces, estudiar en grupo o buscar un tutor puede marcar una gran diferencia. ¿Has considerado alguna de estas opciones?",
           "Identificar las áreas en las que tienes más dificultades puede ayudarte a enfocarte mejor. ¿Hay alguna materia en particular que te preocupe?",
           "Mantén una actitud positiva y sigue esforzándote. Con dedicación y las estrategias adecuadas, puedes mejorar tus notas.",
           "Tomar descansos regulares y cuidar tu bienestar también es importante. Un cuerpo y mente saludables pueden mejorar tu rendimiento académico.",
           "La clave es no rendirse y buscar las herramientas que necesitas para tener éxito. Estoy aquí para ayudarte en lo que necesites."
        ];
        return getRandomResponse(respuestasEstudios);
    } else if (lowerCaseInput.includes("por qué ninguna chica se me declara") || 
           lowerCaseInput.includes("por qué ninguna chica quiere ser mi novia") || 
           lowerCaseInput.includes("por qué ninguna chica le gusto") || 
           lowerCaseInput.includes("ninguna chica se me declara") || 
           lowerCaseInput.includes("ninguna chica quiere ser mi novia")) {
       const respuestasNovia = [
           "A veces, las cosas no suceden tan rápido como esperamos. Lo más importante es ser tú mismo y continuar conociendo a nuevas personas.",
           "Las relaciones se construyen con el tiempo. Enfócate en ser una buena persona y en disfrutar de las actividades que te gustan.",
           "Es posible que no hayas encontrado a la persona adecuada aún. Mantente abierto a nuevas experiencias y oportunidades para conocer gente.",
           "La confianza en uno mismo es muy atractiva. Trabaja en sentirte bien contigo mismo y en tu autoestima.",
           "Las conexiones auténticas llevan tiempo. Sé amable, respetuoso y abierto a conocer a personas nuevas.",
           "Participar en actividades y grupos que disfrutes puede ayudarte a conocer a personas con intereses similares.",
           "Las relaciones significativas se basan en la autenticidad. Sé tú mismo y enfócate en tus propios intereses y pasatiempos.",
           "No te desanimes si las cosas no suceden de inmediato. Las relaciones suelen desarrollarse de manera natural con el tiempo.",
           "Cada persona tiene su propio ritmo para hacer conexiones. Mantén una actitud positiva y sigue siendo auténtico.",
           "A veces, las mejores relaciones comienzan como amistades. Concéntrate en hacer amigos y verás cómo las cosas pueden evolucionar."
        ];
        return getRandomResponse(respuestasNovia);
    } else if (lowerCaseInput.includes("por qué no me habla ninguna chica") || 
           lowerCaseInput.includes("ninguna chica me habla") || 
           lowerCaseInput.includes("por qué no me hablan las chicas") || 
           lowerCaseInput.includes("ninguna chica quiere hablar conmigo")) {
       const respuestasNingunaChica = [
           "A veces puede ser difícil conectar con las personas. Trata de ser tú mismo y participa en actividades que disfrutes para conocer a gente con intereses similares.",
           "Es posible que no hayas encontrado a la persona adecuada aún. Mantente abierto a nuevas experiencias y oportunidades para conocer a nuevas personas.",
           "Conocer a alguien especial lleva tiempo. Enfócate en tus propios intereses y en ser la mejor versión de ti mismo.",
           "La comunicación es clave. Asegúrate de ser amable y respetuoso en tus interacciones, y no te desanimes si las cosas no funcionan de inmediato.",
           "Puede ser útil involucrarte en actividades sociales o grupos donde puedas conocer a personas con intereses comunes.",
           "A veces, la mejor manera de conocer a alguien es a través de amigos o participando en eventos sociales. Mantén una actitud positiva y abierta.",
           "Recuerda que cada persona tiene su propio ritmo para hacer conexiones. Sé paciente y sigue siendo auténtico.",
           "La confianza en uno mismo es muy atractiva. Trabaja en tu autoestima y en sentirte bien contigo mismo, y eso se reflejará en tus interacciones.",
           "Concentrarte en tus propias metas y pasatiempos puede ayudarte a conocer a personas que comparten tus intereses.",
           "No te desanimes. A veces, las conexiones toman tiempo. Sigue siendo tú mismo y mantén una actitud positiva."
        ];
        return getRandomResponse(respuestasNingunaChica);
    } else if (lowerCaseInput.includes("es obligatorio tener esposa") || 
           lowerCaseInput.includes("necesito tener esposa") ||
           lowerCaseInput.includes("necesito tener una esposa") ||
           lowerCaseInput.includes("es obligatorio tener una esposa") ||
           lowerCaseInput.includes("debo tener una esposa") || 
           lowerCaseInput.includes("es necesario tener esposa") ||
           lowerCaseInput.includes("tengo que casarme") || 
           lowerCaseInput.includes("es obligatorio casarse")) {
       const respuestasEsposaObligatoria = [
           "No es obligatorio tener una esposa. Lo más importante es estar feliz y cómodo contigo mismo.",
           "Tener una pareja o casarse no es una obligación. Es fundamental enfocarte en tu bienestar y desarrollo personal.",
           "No necesitas tener una esposa para ser feliz. La felicidad viene de muchas formas y no depende de una relación.",
           "Es completamente normal no tener una esposa. Lo importante es disfrutar de tu vida y tus intereses.",
           "Tener una esposa no define tu valor. La independencia y el amor propio son muy importantes.",
           "No es necesario casarse para sentirse completo. Enfócate en tus metas y pasatiempos.",
           "Cada persona tiene su propio camino. No te presiones por casarte, disfruta el presente y crece como individuo.",
           "Las relaciones y el matrimonio deben surgir naturalmente y no por obligación. Primero, sé feliz contigo mismo.",
           "No es obligatorio tener una esposa. La satisfacción personal y el crecimiento propio son lo más importante.",
           "La felicidad y el éxito no dependen de tener una pareja o casarse. Lo fundamental es tu bienestar emocional y personal."
         ];
         return getRandomResponse(respuestasEsposaObligatoria);
    } else if (lowerCaseInput.includes("es obligatorio tener novia") || 
           lowerCaseInput.includes("necesito tener novia") ||
           lowerCaseInput.includes("es obligatorio tener una novia") ||
           lowerCaseInput.includes("debo tener una novia") || 
           lowerCaseInput.includes("es necesario tener novia")) {
       const respuestasNoviaObligatoria = [
           "No es obligatorio tener una novia. Lo más importante es estar feliz y cómodo contigo mismo.",
           "Tener una pareja no es una obligación. Es fundamental enfocarte en tu bienestar y desarrollo personal.",
           "No necesitas tener una novia para ser feliz. La felicidad viene de muchas formas y no depende de una relación.",
           "Es completamente normal no tener una novia. Lo importante es disfrutar de tu vida y tus intereses.",
           "Tener una novia no define tu valor. La independencia y el amor propio son muy importantes.",
           "No es necesario tener una pareja para sentirse completo. Enfócate en tus metas y pasatiempos.",
           "Cada persona tiene su propio camino. No te presiones por tener una novia, disfruta el presente y crece como individuo.",
           "Las relaciones deben surgir naturalmente y no por obligación. Primero, sé feliz contigo mismo.",
           "No es obligatorio tener una novia. La satisfacción personal y el crecimiento propio son lo más importante.",
           "La felicidad y el éxito no dependen de tener una pareja. Lo fundamental es tu bienestar emocional y personal."
        ];
        return getRandomResponse(respuestasNoviaObligatoria);
    } else if (lowerCaseInput.includes("soy feo") || 
           lowerCaseInput.includes("me siento feo") || 
           lowerCaseInput.includes("no soy atractivo") || 
           lowerCaseInput.includes("me veo mal")) {
       const respuestasAutoestima = [
           "La belleza es subjetiva y cada persona es única. Lo más importante es cómo te sientes contigo mismo.",
           "No te desanimes por cómo te ves. La verdadera belleza viene de tu personalidad y tus acciones.",
           "Recuerda que todos tenemos días en los que no nos sentimos bien con nosotros mismos. Lo más importante es ser amable contigo mismo.",
           "La apariencia física no define tu valor como persona. Eres valioso por lo que eres, no por cómo te ves.",
           "Cada persona tiene su propia belleza. Enfócate en tus cualidades positivas y lo que te hace especial.",
           "La autoestima es importante. Trata de enfocarte en tus cualidades y habilidades, y recuerda que todos somos únicos.",
           "Sentirse bien con uno mismo es un proceso. Acepta tus cualidades y trabaja en amarte tal como eres.",
           "La percepción de la belleza es diferente para cada persona. Lo que realmente importa es cómo te sientes y te valoras a ti mismo.",
           "Eres más que tu apariencia. La confianza y la autoestima vienen de aceptarte y valorarte tal como eres.",
           "No te juzgues tan duramente. Todos tenemos algo que nos hace especiales y únicos. Valórate por lo que eres."
        ];
        return getRandomResponse(respuestasAutoestima);
    } else if (lowerCaseInput.includes("quiero una novia") || 
           lowerCaseInput.includes("cómo consigo una novia") || 
           lowerCaseInput.includes("necesito una novia") || 
           lowerCaseInput.includes("me gustaría tener una novia")) {
       const respuestasQuieroNovia = [
           "Encontrar a alguien especial lleva tiempo. Es importante ser uno mismo y buscar actividades que disfrutes donde puedas conocer a personas con intereses similares.",
           "Construir una relación sana comienza con conocerse a uno mismo y ser auténtico. Participar en actividades sociales y estar abierto a nuevas experiencias puede ayudar.",
           "Conocer a alguien especial puede suceder en cualquier momento. Enfócate en tus intereses y pasatiempos, y conoce personas que compartan esas mismas pasiones.",
           "Las relaciones significativas se construyen con el tiempo y la autenticidad. Enfócate en desarrollar tus propios intereses y serás más probable encontrar a alguien compatible.",
           "Tener una relación empieza con una buena amistad. Participa en grupos y actividades que disfrutes y donde puedas conocer personas con intereses similares.",
           "Es importante ser paciente y auténtico. Conocer a alguien especial sucede cuando menos lo esperas, así que enfócate en ser la mejor versión de ti mismo.",
           "Participar en actividades y eventos sociales puede ser una buena manera de conocer gente nueva. Recuerda, las mejores relaciones se construyen sobre la amistad y el respeto mutuo.",
           "Construir relaciones saludables toma tiempo y esfuerzo. Enfócate en tus intereses y pasatiempos, y sé abierto a conocer nuevas personas.",
           "Las relaciones exitosas se basan en la autenticidad y la comunicación. Enfócate en ser la mejor versión de ti mismo y busca conexiones genuinas."
        ];
        return getRandomResponse(respuestasQuieroNovia);
    } else if (lowerCaseInput.includes("quién conquistó américa") || 
           lowerCaseInput.includes("quién descubrió américa") || 
           lowerCaseInput.includes("historia de américa") ||
           lowerCaseInput.includes("quién colonizó américa")) {
       const respuestasConquista = [
           "La conquista de América fue un proceso complejo que involucró a varias potencias europeas. Entre ellas se destacan España y Portugal, quienes lideraron gran parte de la exploración y colonización del continente.",
           "América fue conquistada por varias potencias europeas, principalmente España y Portugal. Estas naciones jugaron un papel fundamental en la exploración y colonización del continente.",
           "La conquista de América fue llevada a cabo por diferentes países europeos, incluyendo a España, Portugal, Inglaterra, Francia, y los Países Bajos. Este período marcó un cambio significativo en la historia del continente.",
           "La conquista de América fue un proceso complejo que involucró a varias potencias europeas. España, en particular, desempeñó un papel dominante en la exploración y colonización del continente.",
           "La historia de América está marcada por la conquista y colonización europea, liderada principalmente por España y Portugal. Estos países llevaron a cabo expediciones que cambiaron para siempre el destino del continente.",
           "La conquista de América fue un evento histórico que implicó la llegada de exploradores europeos al continente. España y Portugal fueron dos de las principales potencias que lideraron este proceso de colonización.",
           "América fue conquistada por diversas potencias europeas, entre las que destacan España y Portugal. Estos países desempeñaron un papel crucial en la exploración y colonización del continente.",
           "La historia de América está íntimamente ligada a la conquista y colonización europea. España y Portugal fueron dos de las principales potencias que exploraron y colonizaron el continente durante este período.",
           "La conquista de América fue un proceso que involucró a múltiples países europeos, cada uno contribuyendo de manera diferente a la exploración y colonización del continente.",
           "La llegada de los exploradores europeos a América marcó el comienzo de un período de conquista y colonización. España, Portugal y otras potencias europeas jugaron un papel importante en este proceso.",
           "La conquista de América fue un proceso complejo que implicó la llegada de exploradores europeos al continente. Este período cambió irrevocablemente la historia y la cultura de América.",
           "América fue colonizada por varias potencias europeas, entre las que se destacan España y Portugal. Estos países lideraron la exploración y la colonización del continente durante siglos."
        ];
        return getRandomResponse(respuestasConquista);
    } else if (lowerCaseInput.includes("cuántos idiomas hablas") || 
           lowerCaseInput.includes("hablas otros idiomas") || 
           lowerCaseInput.includes("idiomas que entiendes") ||
           lowerCaseInput.includes("hablas más de un idioma")) {
       const respuestasIdiomas = [
           "Actualmente, puedo entender español latinoamericano y un poco de inglés. ¡Estoy aquí para ayudarte en ambos idiomas!",
           "Hablo principalmente español latinoamericano y también puedo entender algo de inglés. ¡Intentaré ayudarte en cualquier idioma que necesites!",
           "Mi principal idioma es el español latinoamericano, pero también puedo entender algo de inglés. ¡Estoy aquí para ayudarte en ambos idiomas!",
           "Puedo comunicarme en español latinoamericano y también entiendo un poco de inglés. ¡No dudes en hablarme en cualquiera de estos idiomas!",
           "Hablo español latinoamericano y puedo comprender algunas palabras en inglés. ¡Si necesitas ayuda en alguno de estos idiomas, estoy aquí para ayudarte!",
           "Entiendo español latinoamericano y también puedo comunicarme en inglés básico. ¡No dudes en hablarme en cualquiera de estos idiomas!",
           "Mi comprensión principal es en español latinoamericano, pero también puedo entender un poco de inglés. ¡Estoy aquí para ayudarte en ambos idiomas!",
           "Puedo comunicarme en español latinoamericano y tengo un conocimiento básico de inglés. ¡Estoy aquí para ayudarte en lo que necesites!",
           "Hablo español latinoamericano y puedo entender algunas frases en inglés. ¡No dudes en hablar conmigo en cualquiera de estos idiomas!"
        ];
        return getRandomResponse(respuestasIdiomas);
    } else if (lowerCaseInput.includes("contar en inglés") || 
           lowerCaseInput.includes("números en inglés") || 
           lowerCaseInput.includes("count in english") ||
           lowerCaseInput.includes("números en inglés")) {
       const respuestasContarIngles = [
           "¡Claro! Aquí tienes un ejemplo de conteo en inglés: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Sí, puedo contar en inglés. Por ejemplo: one, two, three, four, five, six, seven, eight, nine, ten.",
           "¡Por supuesto! En inglés se cuenta así: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Claro, aquí tienes una secuencia de números en inglés: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Absolutamente, puedo contar en inglés. Por ejemplo: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Sí, puedo ayudarte con eso. En inglés, el conteo comienza con: one, two, three, four, five, six, seven, eight, nine, ten.",
           "¡Por supuesto! Aquí tienes una serie de números en inglés: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Sí, puedo contar en inglés. El conteo básico es: one, two, three, four, five, six, seven, eight, nine, ten.",
           "Sin problema, aquí tienes cómo se cuentan los números en inglés: one, two, three, four, five, six, seven, eight, nine, ten."
         ];
         return getRandomResponse(respuestasContarIngles);
    } else if (lowerCaseInput.includes("cuántos continentes hay") || 
           lowerCaseInput.includes("cantidad de continentes") || 
           lowerCaseInput.includes("número de continentes") ||
           lowerCaseInput.includes("continentes en el mundo")) {
       const respuestasContinentes = [
           "Hay oficialmente siete continentes en el mundo: África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "El planeta Tierra está compuesto por siete continentes principales: África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "Existen siete continentes reconocidos a nivel mundial: África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "Se reconocen siete continentes en la Tierra, los cuales son África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "El número de continentes en el mundo es siete, los cuales son África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía son los siete continentes que componen la superficie terrestre.",
           "La Tierra está dividida en siete continentes principales: África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "Se reconocen siete grandes masas de tierra como continentes en el mundo: África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía.",
           "Los siete continentes conocidos son África, América del Norte, América del Sur, Antártida, Asia, Europa, y Oceanía, cada uno con su propia geografía y características únicas."
         ];
         return getRandomResponse(respuestasContinentes);
    } else if (lowerCaseInput.includes("nombre de todos los países") || 
           lowerCaseInput.includes("países del mundo") || 
           lowerCaseInput.includes("nombre de los países") ||
           lowerCaseInput.includes("todos los países") || 
           lowerCaseInput.includes("países de todo el mundo")) {
       const respuestasPaises = [
           "¡Claro! Algunos países del mundo incluyen Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno en particular?",
           "¡Me encanta la geografía! Entre los países del mundo se encuentran Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno de ellos?",
           "Los países del mundo son muy diversos. Algunos de los más conocidos son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Hay alguno en específico que te interese?",
           "¡Sí, conozco muchos países! Algunos de los más reconocidos son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno de ellos?",
           "Los países del mundo son fascinantes. Algunos de los más populares son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno?",
           "Puedo ayudarte con nombres de países. Algunos de los más conocidos son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te interesa alguno en particular?",
           "¡Sí, claro! Entre los países del mundo se encuentran Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno de ellos?",
           "Los países del mundo son muy interesantes. Algunos de los más destacados son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Hay alguno que te gustaría conocer más?",
           "Conozco muchos países. Algunos de los más conocidos son Argentina, Brasil, Canadá, China, Francia, Alemania, India, Italia, Japón, México, Rusia, España, Estados Unidos, y muchos más. ¿Te gustaría saber más sobre alguno de ellos?"
        ];
         return getRandomResponse(respuestasPaises);
    } else if (lowerCaseInput.includes("nombres de verduras") || 
           lowerCaseInput.includes("verduras comunes") || 
           lowerCaseInput.includes("nombre de algunas verduras") ||
           lowerCaseInput.includes("verduras populares") || 
           lowerCaseInput.includes("tipos de verduras")) {
       const respuestasVerduras = [
           "¡Claro! Algunas verduras comunes incluyen zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna en particular?",
           "¡Me encantan las verduras! Entre las verduras más comunes se encuentran zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las verduras son deliciosas y nutritivas. Algunas de las verduras más populares son zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Hay alguna en específico que te interese?",
           "¡Sí, conozco muchas verduras! Algunas de las más comunes son zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las verduras son una excelente opción para mantenerse saludable. Algunas verduras populares incluyen zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna?",
           "Puedo ayudarte con nombres de verduras. Algunas de las más comunes son zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te interesa alguna en particular?",
           "¡Sí, claro! Entre las verduras más comunes se encuentran zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las verduras son una excelente fuente de nutrientes. Algunas de las verduras más populares son zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Hay alguna que te gustaría conocer más?",
           "Conozco muchos tipos de verduras. Algunas de las más comunes son zanahoria, brócoli, espinaca, lechuga, coliflor, tomate, pepino, cebolla, pimiento, calabacín, berenjena, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?"
         ];
         return getRandomResponse(respuestasVerduras);
    } else if (lowerCaseInput.includes("nombres de frutas") || 
           lowerCaseInput.includes("frutas comunes") || 
           lowerCaseInput.includes("nombre de algunas frutas") ||
           lowerCaseInput.includes("frutas populares") || 
           lowerCaseInput.includes("tipos de frutas")) {
       const respuestasFrutas = [
           "¡Claro! Algunas frutas comunes incluyen manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchos más. ¿Te gustaría saber más sobre alguna en particular?",
           "¡Me encantan las frutas! Entre las frutas más comunes se encuentran manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, entre otras. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las frutas son deliciosas y saludables. Algunas de las frutas más populares son manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Hay alguna en específico que te interese?",
           "¡Sí, conozco muchas frutas! Algunas de las más comunes son manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las frutas son una excelente opción para mantenerse saludable. Algunas frutas populares incluyen manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Te gustaría saber más sobre alguna?",
           "Puedo ayudarte con nombres de frutas. Algunas de las más comunes son manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Te interesa alguna en particular?",
           "¡Sí, claro! Entre las frutas más comunes se encuentran manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?",
           "Las frutas son una excelente fuente de nutrientes. Algunas de las frutas más populares son manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Hay alguna que te gustaría conocer más?",
           "Conozco muchos tipos de frutas. Algunas de las más comunes son manzana, plátano, naranja, pera, uva, fresa, piña, sandía, melón, kiwi, mango, y muchas más. ¿Te gustaría saber más sobre alguna de ellas?"
        ];
        return getRandomResponse(respuestasFrutas);
    } else if (lowerCaseInput.includes("nombres de los personajes del increíble mundo de gumball") || 
           lowerCaseInput.includes("personajes de el increíble mundo de gumball") || 
           lowerCaseInput.includes("nombres de los personajes de gumball") ||
           lowerCaseInput.includes("personajes de gumball") || 
           lowerCaseInput.includes("nombres de los personajes de el asombroso mundo de gumball") || 
           lowerCaseInput.includes("personajes de el asombroso mundo de gumball")) {
       const respuestasGumball = [
           "¡Por supuesto! Algunos de los personajes principales de El Increíble Mundo de Gumball son Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson, Richard Watterson, y muchos más. ¿Te gustaría saber más sobre alguno en particular?",
           "¡Me encanta El Increíble Mundo de Gumball! Entre los personajes principales se encuentran Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson y Richard Watterson. ¿Te gustaría saber más sobre alguno de ellos?",
           "El Increíble Mundo de Gumball cuenta con una amplia variedad de personajes, desde la familia Watterson hasta los amigos de Gumball en la escuela. Algunos de los personajes más destacados son Gumball, Darwin, Anais, Nicole y Richard. ¿Hay alguno en específico que te interese?",
           "El Increíble Mundo de Gumball tiene una extensa galería de personajes, incluyendo a Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson, Richard Watterson, y muchos más. ¿Te gustaría saber más sobre alguno de ellos?",
           "¡Sí, conozco muchos de los personajes de El Increíble Mundo de Gumball! Algunos de los más destacados son Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson y Richard Watterson. ¿Te gustaría saber más sobre alguno de ellos?",
           "El Increíble Mundo de Gumball tiene una rica galería de personajes, desde la familia Watterson hasta los residentes de Elmore. Entre los más conocidos se encuentran Gumball, Darwin, Anais, Nicole y Richard. ¿Hay alguno en específico que te interese?",
           "Puedo ayudarte con información sobre los personajes de El Increíble Mundo de Gumball. Algunos de los más destacados son Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson y Richard Watterson. ¿Te gustaría conocer más detalles sobre alguno de ellos?",
           "¡Sí, conozco a muchos de los personajes de El Increíble Mundo de Gumball! Algunos de los más conocidos son Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson y Richard Watterson. ¿Te gustaría saber más sobre alguno de ellos?",
           "Conozco muchos de los personajes de El Increíble Mundo de Gumball. Algunos de los más destacados son Gumball Watterson, Darwin Watterson, Anais Watterson, Nicole Watterson y Richard Watterson. ¿Te gustaría conocer más detalles sobre alguno de ellos?"
        ];
        return getRandomResponse(respuestasGumball);
    } else if (lowerCaseInput.includes("nombres de todos los personajes de dragon ball") || 
           lowerCaseInput.includes("personajes de dragon ball") || 
           lowerCaseInput.includes("nombres de los personajes de dragon ball") ||
           lowerCaseInput.includes("personajes de dragon ball z") ||
           lowerCaseInput.includes("nombres de todos los personajes de dragon ball z")) {
       const respuestasDragonBall = [
           "¡Claro! Dragon Ball tiene una gran cantidad de personajes, incluyendo a Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, Cell, y muchos más. ¿Hay algún personaje en particular que te interese?",
           "¡Me encanta Dragon Ball! Entre los personajes principales se encuentran Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer y Cell. ¿Te gustaría saber más sobre alguno en particular?",
           "Dragon Ball cuenta con una amplia variedad de personajes, desde los guerreros Z hasta los villanos. Algunos de los personajes más destacados son Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Freezer y Cell. ¿Hay alguno en específico que te interese?",
           "Dragon Ball tiene una extensa galería de personajes, entre los más conocidos se encuentran Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Te gustaría saber más sobre alguno de ellos?",
           "¡Sí, conozco muchos de los personajes de Dragon Ball! Algunos de los más destacados son Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Hay alguno en particular del que te gustaría saber más?",
           "Dragon Ball tiene una rica galería de personajes, desde los guerreros Z hasta los villanos. Entre los más conocidos se encuentran Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Hay alguno en específico que te interese?",
           "Puedo ayudarte con información sobre los personajes de Dragon Ball. Entre los más destacados se encuentran Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Hay alguno que te gustaría conocer más?",
           "¡Sí, conozco a muchos de los personajes de Dragon Ball! Algunos de los más conocidos son Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Te gustaría saber más sobre alguno de ellos?",
           "Conozco muchos de los personajes de Dragon Ball. Algunos de los más destacados son Goku, Vegeta, Piccolo, Bulma, Gohan, Krilin, Trunks, Goten, Freezer, y Cell. ¿Te gustaría conocer más detalles sobre alguno de ellos?"
         ];
         return getRandomResponse(respuestasDragonBall);
     } else if (lowerCaseInput.includes("buscar música") || 
           lowerCaseInput.includes("poner música") || 
           lowerCaseInput.includes("reproducir música") ||
           lowerCaseInput.includes("música para escuchar") || 
           lowerCaseInput.includes("alguna recomendación musical") || 
           lowerCaseInput.includes("necesito música")) {
       const respuestasMusica = [
           "¡Claro! ¿Qué tipo de música te gusta? Puedo recomendarte algunos géneros populares.",
           "Puedo recomendarte algunas plataformas de streaming donde puedes encontrar música. ¿Tienes alguna preferencia en cuanto al género?",
           "¿Qué tipo de música te interesa? Puedo sugerirte algunos artistas o géneros populares.",
           "Buscar música es genial, ¿verdad? ¿Tienes alguna canción o artista favorito en mente?",
           "Puedo sugerirte algunas canciones populares o artistas de moda. ¿Hay algo en particular que te gustaría escuchar?",
           "¿Necesitas música para un estado de ánimo específico? Estoy aquí para ayudarte a encontrar la banda sonora perfecta.",
           "Aunque no puedo buscar música directamente, puedo darte algunas recomendaciones sobre géneros musicales o artistas populares.",
           "¿Te gustaría explorar nuevos géneros musicales o prefieres escuchar tus favoritos?",
           "Puedo sugerirte algunas canciones o artistas populares. ¿Tienes alguna preferencia en cuanto al estilo musical?",
           "¡Buscar música es divertido! ¿Hay algún género o artista que te gustaría explorar?"
          ];
          return getRandomResponse(respuestasMusica);
     } else if (lowerCaseInput.includes("no me quiero bañar") || 
           lowerCaseInput.includes("no quiero ducharme") || 
           lowerCaseInput.includes("no tengo ganas de bañarme") ||
           lowerCaseInput.includes("no me apetece bañarme") || 
           lowerCaseInput.includes("no quiero tomar una ducha") || 
           lowerCaseInput.includes("no quiero bañarme")) {
       const respuestasNoBañarse = [
           "Entiendo que a veces no tengas ganas de bañarte, pero recuerda que mantener la higiene personal es importante para tu salud y bienestar.",
           "Puede ser difícil encontrar la motivación para bañarse a veces, pero te sentirás mejor después de hacerlo. ¿Hay algo en particular que te esté impidiendo querer bañarte?",
           "Tomarse un baño puede ayudarte a relajarte y recargar energías. ¿Hay algo que pueda hacer para ayudarte a sentirte más motivado/a para bañarte?",
           "A veces, tomar una ducha puede ser un buen momento para desconectar y cuidarte a ti mismo/a. ¿Puedo ayudarte con algún consejo o sugerencia para hacerlo más agradable?",
           "Entiendo que no te apetezca bañarte en este momento, pero recuerda que mantener la higiene personal es importante para tu salud física y mental.",
           "Aunque no te sientas con ganas de bañarte en este momento, intenta recordar cómo te sentirás después de hacerlo. ¿Hay algo que pueda hacer para ayudarte a motivarte?",
           "Puede ser difícil encontrar la motivación para bañarse a veces, pero es importante cuidar de ti mismo/a. ¿Hay algo en particular que te gustaría hacer para que bañarte sea más fácil?",
           "Incluso si no te sientes con ganas de bañarte en este momento, recuerda que hacerlo te hará sentir fresco/a y renovado/a. ¿Te gustaría hablar sobre cómo hacerlo más llevadero?",
           "Entiendo que no quieras bañarte en este momento, pero recuerda que es importante mantener la higiene personal. ¿Hay algo que pueda hacer para ayudarte a sentirte más motivado/a?",
           "Aunque no te apetezca bañarte en este momento, recuerda que es una parte importante de cuidar de ti mismo/a. ¿Puedo ayudarte con algún consejo o sugerencia para hacerlo más fácil?"
        ];
        return getRandomResponse(respuestasNoBañarse);
    } else if (lowerCaseInput.includes("no tengo apoyo") || 
           lowerCaseInput.includes("me siento sin apoyo") || 
           lowerCaseInput.includes("siento que no tengo ayuda") ||
           lowerCaseInput.includes("no tengo a nadie") || 
           lowerCaseInput.includes("sin apoyo emocional")) {
       const respuestasSinApoyo = [
           "Lo siento mucho por lo que estás pasando. Recuerda que siempre hay personas dispuestas a ofrecer apoyo. ¿Puedo ayudarte a encontrar recursos de apoyo?",
           "Puede ser difícil sentir que no tienes apoyo, pero quiero que sepas que no estás solo/a en esto. ¿Hay algo en particular en lo que pueda ayudarte?",
           "Es normal sentirse sin apoyo en momentos difíciles, pero quiero que sepas que no estás solo/a. ¿Te gustaría hablar sobre lo que te está haciendo sentir así?",
           "Puedo imaginar que sentirse sin apoyo puede ser muy duro. ¿Hay algo específico en lo que pueda ayudarte o alguien con quien te gustaría hablar?",
           "Sentir que no tienes apoyo puede ser abrumador, pero quiero que sepas que estoy aquí para ofrecerte apoyo y escucha. ¿Cómo puedo ayudarte hoy?",
           "Es difícil sentir que no tienes apoyo, pero quiero que sepas que siempre puedes contar conmigo para escucharte y ofrecerte apoyo. ¿Hay algo en lo que pueda ayudarte ahora?",
           "La sensación de no tener apoyo puede ser muy difícil, pero quiero que sepas que estoy aquí para ti. ¿Hay algo en particular en lo que pueda ayudarte o alguien con quien te gustaría hablar?",
           "Sentirse sin apoyo puede ser una experiencia desafiante, pero recuerda que siempre hay personas dispuestas a escucharte y apoyarte. ¿Cómo puedo ayudarte a sentirte mejor?",
           "Estoy aquí para ofrecerte apoyo y comprensión en este momento difícil. ¿Hay algo específico en lo que pueda ayudarte o alguien a quien te gustaría hablar?",
           "La sensación de no tener apoyo puede ser muy dura, pero quiero que sepas que no estás solo/a. Si necesitas hablar, estoy aquí para escucharte y ofrecerte mi apoyo.",
           "Entiendo que te sientas sin apoyo emocional en este momento. ¿Hay algo en lo que pueda ayudarte o alguien con quien te gustaría hablar?",
           "La falta de apoyo emocional puede ser difícil de sobrellevar, pero quiero que sepas que estoy aquí para ofrecerte mi apoyo. ¿Cómo puedo ayudarte hoy?",
           "Sentir que no tienes apoyo emocional puede ser muy duro. Estoy aquí para escucharte y ofrecerte mi apoyo en lo que necesites.",
           "Es normal sentirse sin apoyo emocional en momentos difíciles, pero quiero que sepas que no estás solo/a. ¿Cómo puedo ayudarte a sentirte mejor?",
           "Si te sientes sin apoyo emocional, recuerda que estoy aquí para ofrecerte mi apoyo y escucha. ¿Hay algo específico en lo que pueda ayudarte ahora?"
        ];
        return getRandomResponse(respuestasSinApoyo);
    } else if (lowerCaseInput.includes("me siento solo") || 
           lowerCaseInput.includes("me siento sola") || 
           lowerCaseInput.includes("siento soledad") ||
           lowerCaseInput.includes("estoy solo") || 
           lowerCaseInput.includes("estoy sola") || 
           lowerCaseInput.includes("soledad")) {
       const respuestasSoledad = [
           "Lo siento mucho por lo que estás pasando. Es normal sentirse solo/a a veces, pero recuerda que no estás solo/a en esto. ¿Puedo ayudarte de alguna manera?",
           "Te escucho y entiendo que la soledad puede ser difícil. ¿Hay algo en particular en lo que pueda ayudarte o alguien con quien te gustaría hablar?",
           "La soledad puede ser abrumadora, pero quiero que sepas que estoy aquí para ti. ¿Te gustaría hablar sobre lo que te está haciendo sentir así?",
           "Puedo imaginar que sentirse solo/a puede ser muy difícil. Por favor, recuerda que siempre hay personas dispuestas a escucharte y apoyarte.",
           "La soledad puede ser una experiencia desafiante. ¿Hay algo que te gustaría compartir o alguna actividad que te ayude a sentirte mejor?",
           "La soledad es una experiencia común, pero eso no significa que tengas que pasar por ello solo/a. ¿Hay algo que pueda hacer para ayudarte a sentirte mejor?",
           "Es normal sentirse solo/a a veces, pero quiero que sepas que no estás solo/a en esto. Si necesitas hablar, estoy aquí para escucharte.",
           "Sé que la soledad puede ser difícil de manejar, pero quiero que sepas que no estás solo/a. Si necesitas compañía o alguien con quien hablar, estoy aquí para ti.",
           "La soledad puede ser una experiencia desafiante, pero estoy aquí para ofrecerte apoyo y compañía. ¿Hay algo en lo que pueda ayudarte?",
           "La soledad puede ser difícil de sobrellevar, pero recuerda que siempre hay personas dispuestas a escucharte y apoyarte. ¿Cómo puedo ayudarte hoy?"
        ];
        return getRandomResponse(respuestasSoledad);
    } else if (lowerCaseInput.includes("quiero quitarme la vida") || 
           lowerCaseInput.includes("me quiero suicidar") || 
           lowerCaseInput.includes("no quiero vivir más") ||
           lowerCaseInput.includes("pensamientos suicidas")) {
       const respuestasSuicidio = [
           "Lo siento mucho por lo que estás pasando. Por favor, recuerda que no estás solo/a y que hay ayuda disponible. ¿Puedo ayudarte a encontrar recursos de apoyo?",
           "Escucharte decir eso me preocupa mucho. Por favor, háblame más sobre cómo te sientes o si hay alguien en quien puedas confiar para hablar sobre esto.",
           "Tu seguridad es lo más importante. Por favor, busca ayuda de inmediato. Puedes comunicarte con una línea de ayuda o acudir a un profesional de la salud mental.",
           "Te escucho y estoy aquí para apoyarte. Por favor, no tomes ninguna decisión precipitada. ¿Hay alguien en quien puedas confiar para hablar sobre esto?",
           "Entiendo que estás pasando por un momento difícil. Por favor, recuerda que siempre hay opciones y ayuda disponible. ¿Puedo ayudarte a encontrar recursos de apoyo?",
           "No estás solo/a en esto. Por favor, busca ayuda de inmediato. Puedes comunicarte con una línea de ayuda o acudir a un hospital para recibir apoyo profesional.",
           "Tus palabras son muy serias y me preocupan. Por favor, considera hablar con un ser querido o buscar ayuda profesional. Tu vida es valiosa y mereces apoyo.",
           "Por favor, no te sientas solo/a en esto. Hay personas dispuestas a escucharte y ayudarte. ¿Puedo ayudarte a encontrar recursos de apoyo?",
           "Tu bienestar es importante. Por favor, busca ayuda lo antes posible. Puedes comunicarte con una línea de ayuda o acudir a un profesional de la salud mental para recibir apoyo.",
           "Espero que puedas buscar ayuda de inmediato. Por favor, no te sientas solo/a en esto. Hay personas que se preocupan por ti y quieren ayudarte a superar esto."
        ];
        return getRandomResponse(respuestasSuicidio);
    } else if (lowerCaseInput.includes("no me da hambre") || 
           lowerCaseInput.includes("no tengo hambre") || 
           lowerCaseInput.includes("no quiero comer") ||
           lowerCaseInput.includes("no siento hambre")) {
       const respuestasNoHambre = [
           "Entiendo, a veces el apetito puede ser irregular. Intenta escuchar a tu cuerpo y comer cuando te sientas cómodo.",
           "Es normal tener fluctuaciones en el apetito. Asegúrate de mantenerte hidratado y comer alimentos nutritivos cuando te sientas listo.",
           "No tener hambre a veces puede ser normal. Intenta hacer pequeñas comidas frecuentes o esperar hasta que sientas hambre para comer.",
           "Si no tienes hambre en este momento, está bien. Asegúrate de mantenerte hidratado y estar atento a las señales de hambre más tarde.",
           "Si no sientes hambre en este momento, no te preocupes. Es importante escuchar a tu cuerpo y comer cuando realmente lo necesites.",
           "El apetito puede variar de persona a persona y de un día a otro. Intenta comer cuando sientas hambre y no te fuerces si no tienes apetito en este momento.",
           "Si no tienes hambre en este momento, está bien. Intenta mantener un horario regular de comidas y comer cuando sientas que tu cuerpo lo necesita.",
           "A veces, el estrés o la ansiedad pueden afectar el apetito. Intenta relajarte y buscar actividades que te hagan sentir bien.",
           "Si no tienes hambre en este momento, no te preocupes. Asegúrate de mantener una dieta equilibrada y comer cuando realmente lo desees.",
           "No tener hambre en este momento puede ser normal. Intenta comer algo ligero y nutritivo cuando sientas hambre más tarde.",
           "Si no sientes hambre en este momento, intenta no preocuparte por ello. Asegúrate de mantenerte hidratado y escuchar a tu cuerpo."
        ];
        return getRandomResponse(respuestasNoHambre);
    } else if (lowerCaseInput.includes("ojeras") || 
           lowerCaseInput.includes("cómo quitar las ojeras") || 
           lowerCaseInput.includes("bolsas debajo de los ojos") ||
           lowerCaseInput.includes("cómo reducir las ojeras") ||
           lowerCaseInput.includes("eliminar las ojeras")) {
       const respuestasOjeras = [
           "Para reducir las ojeras, intenta dormir lo suficiente todas las noches y mantener una rutina de cuidado de la piel que incluya cremas hidratantes y productos con vitamina C.",
           "Las ojeras pueden ser causadas por la falta de sueño y la deshidratación. Asegúrate de dormir lo suficiente y beber mucha agua para mantener la piel hidratada.",
           "Para reducir la apariencia de las ojeras, intenta colocar bolsas de té frías sobre los ojos durante unos minutos o aplicar rodajas de pepino para refrescar la piel.",
           "Las ojeras pueden ser causadas por la retención de líquidos y la falta de sueño. Intenta reducir la ingesta de sodio, dormir lo suficiente y aplicar compresas frías para reducir la hinchazón.",
           "Para reducir las ojeras, asegúrate de dormir al menos 7-8 horas cada noche y aplicar cremas o sueros para el contorno de ojos que contengan ingredientes como vitamina K, cafeína o ácido hialurónico.",
           "Las ojeras pueden ser el resultado de alergias, fatiga o genética. Intenta aplicar compresas frías, dormir lo suficiente y usar cremas específicas para el contorno de ojos para mejorar su apariencia.",
           "Para reducir las ojeras, evita frotarte los ojos, usa protector solar diariamente y aplica cremas hidratantes para mantener la piel alrededor de los ojos saludable e hidratada.",
           "Las ojeras pueden ser causadas por la falta de sueño, el estrés y la mala circulación. Intenta dormir lo suficiente, hacer ejercicio regularmente y aplicar compresas frías para reducir la hinchazón.",
           "Para reducir las ojeras, intenta aplicar rodajas de patata o bolsas de té frías sobre los ojos durante unos minutos cada día, además de mantener una buena hidratación y dormir lo suficiente.",
           "Las ojeras pueden ser causadas por la dilatación de los vasos sanguíneos bajo la piel. Intenta aplicar compresas frías, mantener una dieta saludable y usar protectores solares para proteger la piel del sol.",
           "Las ojeras pueden ser el resultado de la edad, la genética o la falta de sueño. Para reducir su apariencia, intenta usar cremas con retinol, aplicar compresas frías y dormir lo suficiente cada noche."
        ];
        return getRandomResponse(respuestasOjeras);
    } else if (lowerCaseInput.includes("mal aliento") || 
           lowerCaseInput.includes("aliento desagradable") || 
           lowerCaseInput.includes("mal olor en la boca") ||
           lowerCaseInput.includes("cómo quitar el mal aliento") ||
           lowerCaseInput.includes("aliento fresco") ||
           lowerCaseInput.includes("olor a boca")) {
       const respuestasMalAliento = [
           "Para combatir el mal aliento, es importante cepillarse los dientes y la lengua después de cada comida, usar hilo dental y enjuague bucal, y mantenerse hidratado.",
           "El mal aliento puede ser causado por bacterias en la boca. Asegúrate de cepillarte los dientes, la lengua y usar hilo dental regularmente para mantener una buena higiene bucal.",
           "El mal aliento a menudo es el resultado de bacterias en la boca. Intenta cepillarte los dientes y la lengua dos veces al día y usar hilo dental diariamente para mantener tu boca fresca.",
           "Para evitar el mal aliento, cepíllate los dientes al menos dos veces al día, usa hilo dental y enjuague bucal, y mantente hidratado. También es importante visitar regularmente al dentista.",
           "El mal aliento puede ser causado por la acumulación de bacterias en la boca. Asegúrate de cepillarte los dientes, la lengua y usar hilo dental con regularidad para mantener una boca fresca.",
           "El mal aliento puede ser un signo de mala higiene bucal. Intenta cepillarte los dientes, la lengua y usar hilo dental con regularidad, y considera visitar al dentista para un chequeo.",
           "Para combatir el mal aliento, asegúrate de cepillarte los dientes y la lengua con un cepillo de dientes y pasta dental de calidad. También puedes usar enjuague bucal para una frescura adicional.",
           "El mal aliento puede ser causado por la acumulación de bacterias en la boca y restos de comida. Cepíllate los dientes después de cada comida y usa hilo dental para mantener una boca limpia y fresca.",
           "Intenta cepillarte los dientes, la lengua y usar hilo dental regularmente para combatir el mal aliento. Además, beber agua y evitar alimentos como el ajo y la cebolla puede ayudar a mantener el aliento fresco.",
           "Para mejorar el aliento, es esencial mantener una buena higiene bucal. Cepíllate los dientes y la lengua, usa hilo dental y enjuague bucal, y considera visitar al dentista para una limpieza profesional.",
           "Mantener una buena higiene bucal, beber suficiente agua y evitar alimentos con olores fuertes como el ajo y la cebolla pueden ayudar a combatir el mal aliento.",
           "El mal aliento puede ser causado por sequedad en la boca. Intenta beber más agua y usar enjuague bucal sin alcohol para mantener la boca hidratada y fresca.",
           "Además de cepillarse los dientes y usar hilo dental, masticar chicle sin azúcar o consumir alimentos crujientes como manzanas y zanahorias pueden ayudar a combatir el mal aliento.",
           "Algunos medicamentos pueden causar sequedad en la boca y contribuir al mal aliento. Si crees que tu medicamento puede estar afectando tu aliento, consulta a tu médico.",
           "La limpieza de la lengua es importante para combatir el mal aliento, ya que las bacterias pueden acumularse en ella. Considera usar un limpiador de lengua para una higiene bucal completa."
        ];
        return getRandomResponse(respuestasMalAliento);
    } else if (lowerCaseInput.includes("tengo sueño") || 
           lowerCaseInput.includes("estoy cansado") || 
           lowerCaseInput.includes("quiero dormir") || 
           lowerCaseInput.includes("necesito descansar")) {
       const respuestasSueno = [
           "Es importante descansar bien. ¿Hay algo más en lo que pueda ayudarte?",
           "Quizás sería bueno tomar una pequeña siesta. ¿Puedo ayudarte con algo más?",
           "Tener sueño puede significar que necesitas un descanso. ¿En qué puedo asistirte?",
           "El descanso es crucial para la salud. ¿Puedo ayudarte con algo más?",
           "Si tienes sueño, podría ser un buen momento para relajarte un poco. ¿Necesitas algo más?",
           "A veces, una buena noche de sueño puede hacer maravillas. ¿Puedo ayudarte con algo más?",
           "Tomarse un descanso puede ser útil si te sientes cansado. ¿Qué más puedo hacer por ti?",
           "Entiendo, el sueño es importante para recargar energías. ¿Hay algo más que pueda hacer por ti?"
        ];
        return getRandomResponse(respuestasSueno);
    } else if (lowerCaseInput.includes("bien") || 
           lowerCaseInput.includes("estoy genial") || 
           lowerCaseInput.includes("estoy perfecto") ||
           lowerCaseInput.includes("estoy joya") ||
           lowerCaseInput.includes("estoy estupendo") || 
           lowerCaseInput.includes("estoy bien") || 
           lowerCaseInput === "si estoy bien") {
       const respuestasBien = [
           "Me alegra escuchar que estás bien. Si necesitas algo más, no dudes en preguntar.",
           "¡Excelente! Si hay algo más en lo que pueda ayudarte, házmelo saber.",
           "¡Qué bueno! Si tienes alguna otra pregunta, estaré aquí para ayudarte.",
           "¡Perfecto! No dudes en decirme si necesitas más ayuda.",
           "¡Estupendo! Si necesitas más información, no dudes en pedirla.",
           "Me alegro mucho de que estés bien. ¿Hay algo específico en lo que pueda asistirte?",
           "¡Qué genial escuchar eso! Si tienes más preguntas, estaré encantado de ayudarte.",
           "¡Maravilloso! Si necesitas ayuda con algo más, no dudes en decírmelo.",
           "¡Fantástico! Estoy aquí para ayudarte en lo que necesites.",
           "¡Asombroso! Siempre estoy disponible si necesitas algo más."
        ];
        return getRandomResponse(respuestasBien);
    } else if (lowerCaseInput.includes("buscar video en youtube") ||
           lowerCaseInput.includes("buscar videos en youtube") ||
           lowerCaseInput.includes("hacer recomendaciones de videos de youtube") ||
           lowerCaseInput.includes("recomendaciones de videos en youtube")) {
      const respuestasRecomendacionesASMR = [
          "Actualmente solo puedo buscar videos en YouTube de ASMR y hacer recomendaciones de ese tipo de videos.",
          "Mi especialidad son los videos de ASMR en YouTube. ¿Te gustaría que te recomiende alguno?",
          "Puedo hacer recomendaciones de videos de ASMR en YouTube. ¿Te gustaría que te sugiera alguno?",
          "Estoy aquí para recomendarte los mejores videos de ASMR en YouTube. ¿Te interesa?",
          "Si estás interesado en videos de ASMR, puedo recomendarte algunos excelentes en YouTube. ¿Quieres que te ayude?",
          "Lo siento, en este momento solo puedo buscar y recomendar videos de ASMR en YouTube.",
          "Solo tengo la capacidad de buscar y sugerir videos de ASMR en YouTube en este momento.",
          "Mi funcionalidad actual se limita a buscar y recomendar videos de ASMR en YouTube.",
          "Por el momento, solo puedo ayudarte con videos de ASMR en YouTube. ¿Te gustaría una recomendación?",
          "Actualmente, puedo buscar y recomendar videos de ASMR en YouTube. ¿Necesitas alguna recomendación específica?"
        ];
        return getRandomResponse(respuestasRecomendacionesASMR);
    } else if (lowerCaseInput.includes("puedes buscar cosas en google") ||
           lowerCaseInput.includes("buscar en google") ||
           lowerCaseInput.includes("puedes hacer búsquedas en google") ||
           lowerCaseInput.includes("puedes buscar en internet") ||
           lowerCaseInput.includes("puedes encontrar información en línea")) {
       const respuestasBuscarGoogle = [
           "Lo siento, actualmente no tengo la capacidad de realizar búsquedas en Google. ¿Hay algo más en lo que pueda ayudarte?",
           "No tengo la habilidad de buscar en Google en este momento, pero puedo ayudarte con otra cosa. ¿En qué más puedo asistirte?",
           "Buscar en Google no está dentro de mis habilidades en este momento. ¿Existe alguna otra consulta con la que pueda ayudarte?",
           "Desafortunadamente, no tengo la capacidad de buscar en Google. ¿En qué más puedo ser útil para ti?",
           "Lo siento, no puedo buscar en Google en este momento. ¿Hay algo más que necesites?",
           "En este momento, no puedo realizar búsquedas en Google. ¿Puedo ayudarte con algo más?",
           "Mi capacidad actual no incluye buscar en Google. ¿Hay algo más en lo que pueda ayudarte?",
           "Buscar en Google no es una función que pueda realizar en este momento. ¿Necesitas ayuda con otra cosa?",
           "Actualmente, no puedo buscar en Google. ¿Existe alguna otra consulta en la que pueda ayudarte?",
           "Lo siento, la búsqueda en Google no está disponible en este momento. ¿Hay algo más que pueda hacer por ti?"
        ];
        return getRandomResponse(respuestasBuscarGoogle);
    } else if (lowerCaseInput.includes("qué cosas matemáticas puedes hacer") || 
           lowerCaseInput.includes("qué operaciones matemáticas puedes hacer") ||
           lowerCaseInput.includes("qué operaciones de matemáticas sabes hacer") ||
           lowerCaseInput.includes("puedes hacer matemáticas") ||
           lowerCaseInput.includes("qué cálculos puedes hacer")) {
        const respuestasMatematicas = [
            "Puedo realizar sumas (+), restas (-), multiplicaciones (×), divisiones (÷), y calcular raíces cuadradas.",
            "Mis habilidades matemáticas incluyen sumar (+), restar (-), multiplicar (×), dividir (÷) y encontrar raíces cuadradas.",
            "Soy capaz de realizar operaciones matemáticas como sumar (+), restar (-), multiplicar (×), dividir (÷) y calcular raíces cuadradas.",
            "Realizo cálculos matemáticos básicos como sumas (+), restas (-), multiplicaciones (×), divisiones (÷) y raíces cuadradas.",
            "Puedo ayudarte con sumas, restas, multiplicaciones, divisiones y calcular raíces cuadradas."
        ];
        return getRandomResponse(respuestasMatematicas);
    } else if (lowerCaseInput.includes("dime las reglas del chat") || lowerCaseInput.includes("cuáles son las reglas del chat") || lowerCaseInput.includes("reglas del chat")) {
        const respuestasReglasChat = [
            "Las reglas del chat son simples: No se permiten groserías.",
            "La única regla del chat es no usar groserías.",
            "La regla principal del chat es mantener un lenguaje respetuoso y evitar groserías.",
            "La regla más importante del chat es no utilizar palabras ofensivas o inapropiadas.",
            "La regla principal del chat es mantener un ambiente amigable y respetuoso, lo que significa evitar groserías.",
            "La única regla del chat es mantener un lenguaje adecuado y respetuoso.",
            "La regla principal del chat es no usar groserías o malas palabras en ninguna circunstancia."
        ];
        const respuestaReglas = getRandomResponse(respuestasReglasChat);
        const respuestasSancion = [
            "Recuerda que el incumplimiento de esta regla resultará en la sanción permanente del chat.",
            "La sanción permanente es la consecuencia directa del uso de groserías en el chat.",
            "La sanción permanente es la única medida para quienes no respeten la política de groserías del chat.",
            "No se permiten excepciones: la sanción es permanente si se usan groserías en el chat.",
            "Por favor, mantengamos el chat libre de groserías para evitar la sanción permanente."
        ];
        const respuestaSancion = getRandomResponse(respuestasSancion);
        return respuestaReglas + " " + respuestaSancion;
    } else if (lowerCaseInput.includes("puedo ser baneado") || lowerCaseInput.includes("baniado") || lowerCaseInput.includes("castigo") || lowerCaseInput.includes("sanción") || lowerCaseInput.includes("puedo ser castigado") || lowerCaseInput.includes("puedo ser sancionado")) {
        const respuestasBaneo = [
            "El baneo es permanente en este chat si se violan las reglas.",
            "El castigo por violar las reglas del chat puede ser un baneo permanente.",
            "Las reglas del chat son claras: el baneo es permanente por el uso de groserías.",
            "Se toma muy en serio el uso de groserías en este chat, y el baneo es permanente si se detecta.",
            "El baneo permanente es la consecuencia directa del uso de groserías en el chat.",
            "Recuerda que el baneo permanente es la sanción por el uso de lenguaje inapropiado.",
            "No se permiten excepciones: el baneo es permanente si se usan groserías en el chat.",
            "El baneo permanente es la medida más estricta para mantener un ambiente seguro y respetuoso.",
            "Por favor, mantengamos el chat libre de groserías para evitar el baneo permanente.",
            "El baneo permanente es la única sanción para quienes no respeten la política de groserías del chat."
        ];
        return getRandomResponse(respuestasBaneo);
    } else if (lowerCaseInput.includes("puedo decir groserías") || lowerCaseInput.includes("puedo decir malas palabras") || lowerCaseInput.includes("groserías") || lowerCaseInput.includes("malas palabras")) {
        const respuestasGroserias = [
            "Este chat no permite el uso de groserías o malas palabras.",
            "Por favor, evita usar lenguaje inapropiado en el chat.",
            "Las groserías no están permitidas aquí. Mantén el respeto, por favor.",
            "Para mantener un ambiente amigable, te pido que no uses malas palabras.",
            "El uso de groserías resultará en una acción correctiva. Mantén el respeto, por favor.",
            "Prefiero que mantengamos un lenguaje respetuoso en el chat.",
            "Utilicemos un lenguaje adecuado para mantener un ambiente amigable.",
            "Intentemos ser respetuosos con nuestros comentarios en el chat.",
            "Recuerda que este es un espacio para conversar de manera respetuosa.",
            "Podrías ser sancionado si utilizas un lenguaje inapropiado en el chat."
        ];
        return getRandomResponse(respuestasGroserias);
    } else if (lowerCaseInput.includes("amor")) {
        const respuestasAmor = [
            "¡El amor es algo maravilloso! ¿Qué te gustaría saber sobre el amor?",
            "El amor puede ser complejo y hermoso. ¿Tienes alguna pregunta específica?",
            "El amor es un sentimiento poderoso. ¿En qué aspecto del amor necesitas ayuda?",
            "Hablar de amor siempre es interesante. ¿Qué quieres discutir sobre el amor?",
            "El amor tiene muchas facetas. ¿Cuál te intriga más?",
            "Amar y ser amado es fundamental para muchos. ¿Qué quieres saber sobre el amor?",
            "El amor puede traer mucha alegría. ¿Tienes alguna duda sobre este tema?",
            "El amor es un tema profundo. ¿Qué aspecto del amor te interesa?",
            "El amor es una parte esencial de la vida. ¿Qué quieres aprender sobre él?",
            "Siempre es buen momento para hablar del amor. ¿Cuál es tu pregunta?"
        ];
        return getRandomResponse(respuestasAmor);
    } else if (lowerCaseInput.includes("una pregunta") || lowerCaseInput.includes("pregunta")) {
        const respuestasPregunta = [
            "¡Claro! Estoy aquí para ayudarte. ¿Cuál es tu pregunta?",
            "¡Por supuesto! Estoy listo para responder cualquier pregunta que tengas.",
            "¡Listo para resolver tus dudas! Adelante, ¿cuál es tu pregunta?",
            "¡Pregunta lo que quieras y te ayudaré en lo que pueda!",
            "¡Dispara tu pregunta! Estoy listo para ayudarte.",
            "¡Estoy aquí para responder cualquier pregunta que tengas! ¿Cuál es?",
            "¡Tengo las respuestas que necesitas! ¿Cuál es tu pregunta?",
            "¡Listo para ayudarte con cualquier duda que tengas! ¿Cuál es tu pregunta?",
            "¡Claro! No dudes en hacer cualquier pregunta que tengas.",
            "¡Estoy listo para responder cualquier pregunta! ¿Qué quieres saber?"
        ];
        return getRandomResponse(respuestasPregunta);
    } else if (lowerCaseInput === "claro") {
        const respuestasClaro = [
            "¡Entendido! ¿En qué más puedo ayudarte ahora mismo? 😊",
            "¡Por supuesto! ¿Qué necesitas que haga por ti? 👍",
            "¡Claro que sí! ¿Cómo puedo ser de servicio? 😄",
            "¡Claro! ¿En qué puedo asistirte hoy? 😊",
            "¡Definitivamente! Siempre estoy aquí para ayudarte. 👍",
            "¡Sí, claro! ¿Qué más puedo hacer por ti en este momento? 😄",
            "¡Por supuesto que sí! ¿En qué puedo apoyarte ahora? 😊",
            "¡Totalmente de acuerdo! ¿En qué puedo ser útil hoy? 👍",
            "¡Sí, por supuesto! ¿Qué más puedo hacer para hacerte sonreír? 😄",
            "¡Siempre a tu disposición! ¿Qué necesitas que haga ahora? 😊"
        ];
        return getRandomResponse(respuestasClaro);
    } else if (lowerCaseInput === "xd") {
        const respuestasXd = [
            "¡Jaja! 😄",
            "¡Xd! 😆",
            "¡Esa fue buena! 😂",
            "¡Jajaja! 😁",
            "😄 ¡Me hiciste reír!",
            "¡Buena! 😅",
            "¡Esa estuvo genial! 😊",
            "¡Xd! 😆",
            "¡Haha! 😃",
            "¡Divertido! 😄",
            "¡Jajaja! 😆",
            "¡Me sacaste una sonrisa! 😊",
            "¡Qué risa! 😂",
            "¡Xd! 😁",
            "¡Eso es gracioso! 😄",
            "¡Haha! 😅",
            "¡Buen chiste! 😄",
            "¡Eso fue divertido! 😆",
            "¡Jaja! 😃",
            "¡Muy bueno! 😄"
        ];
        return getRandomResponse(respuestasXd);
    } else if (lowerCaseInput.includes("tengo hambre") || 
           lowerCaseInput.includes("estoy hambriento") || 
           lowerCaseInput.includes("quiero comer") ||
           lowerCaseInput.includes("necesito comer") || 
           lowerCaseInput.includes("necesito comida") || 
           lowerCaseInput.includes("me muero de hambre")) {
       const respuestasHambre = [
           "¡Entiendo! ¿Te gustaría que te recomiende algunos lugares para comer?",
           "¿Qué tal si busco algunos restaurantes cercanos para ti?",
           "¡Oh no! ¿Quieres que te ayude a encontrar algo para comer?",
           "¡Vaya! ¿Estás buscando algo delicioso para comer?",
           "¡Eso suena como una buena oportunidad para disfrutar de una deliciosa comida!",
           "¡Hmm, hambre! ¿Quieres que te dé algunas recomendaciones gastronómicas?",
           "¡Uff, el hambre es una señal de que es hora de disfrutar de una buena comida! ¿Te ayudo a encontrar algo?",
           "¡Estoy aquí para ayudarte a saciar ese hambre! ¿Qué tipo de comida te apetece?",
           "¡Hambre, hambre! ¿Quieres que busque algunos restaurantes cercanos para ti?",
           "¡Entendido! Déjame ver qué opciones de comida deliciosa puedo encontrar para ti.",
           "¡Claro! Voy a encontrar algo sabroso para saciar tu apetito.",
           "¡El hambre es una buena excusa para disfrutar de algo delicioso! ¿Te puedo ayudar a encontrar algo?",
           "¡No hay problema! Estoy aquí para ayudarte a encontrar algo delicioso para comer.",
           "¡Tener hambre es una oportunidad perfecta para explorar nuevas opciones gastronómicas! ¿Te puedo ayudar a encontrar algo cercano?",
           "¡Nada mejor que una buena comida para satisfacer ese hambre! ¿Qué tipo de cocina te apetece hoy?"
       ];
       return getRandomResponse(respuestasHambre);
   } else if (lowerCaseInput === "no") {
       const respuestasNo = [
           "Entiendo, si cambias de opinión, aquí estaré. 😊",
           "De acuerdo, si necesitas algo más, no dudes en preguntar. 👍",
           "¡Entendido! Siempre puedes volver si necesitas ayuda. 😄",
           "Está bien, aquí me quedo por si cambias de idea. 😊",
           "¡Claro! Siempre puedes contar conmigo si cambias de parecer. 😊",
           "De acuerdo, no dudes en volver si necesitas algo más. 👍",
           "Entiendo, estoy aquí si decides que necesitas algo más. 😊",
           "¡Está bien! Siempre estoy aquí para ayudarte cuando lo necesites. 😊",
           "De acuerdo, si necesitas más ayuda, ¡aquí estoy! 😊",
           "¡Entendido! Siempre es un placer ayudarte, ¡no dudes en volver! 😄"
       ];
       return getRandomResponse(respuestasNo);
   } else if (lowerCaseInput.includes("haha") || lowerCaseInput.includes("jaja") || lowerCaseInput.includes("jeje")) {
       const respuestasRisa = [
           "¡Me alegra verte sonreír! 😀",
           "¡Jaja! Me encanta cuando ríes. 😄",
           "¡Tu risa es contagiosa! 😆",
           "¡Jajaja! Me haces reír también. 😂",
           "¡Qué bueno que te diviertes! 😊",
           "¡Ja ja ja! ¡Esa estuvo buena! 😁",
           "¡Haha! ¿Quieres escuchar otro chiste? 😅",
           "¡Jijiji! Si necesitas más alegría, aquí estoy. 😊",
           "¡Jejeje! Gracias por compartir la risa. 😄",
           "¡Hahahaha! Esa fue una buena carcajada. 🤣"
        ];
        return getRandomResponse(respuestasRisa);
    } else if (lowerCaseInput.includes("clima")) {
        const respuestasClima = [
            "¿Quieres saber el clima de tu ubicación?",
            "El clima está cambiando, ¿necesitas información?",
            "¡Hablemos del clima! ¿Dónde estás?",
            "El clima puede ser impredecible, ¿necesitas ayuda?",
            "¿Estás planeando algo al aire libre? Te puedo decir el clima.",
            "¿Interesado en el pronóstico del tiempo?",
            "¡Claro! ¿En qué ciudad necesitas el pronóstico?",
            "¿Listo para conocer el clima?",
            "¿Quieres saber si necesitarás llevar un paraguas contigo?",
            "¡Hola! ¿Necesitas información sobre el clima?"
        ];
        return getRandomResponse(respuestasClima);
    } else if (lowerCaseInput.includes("adiós")) {
        const respuestasAdios = [
            "¡Hasta luego! Si necesitas algo más, aquí estaré.",
            "¡Nos vemos pronto!",
            "Adiós, ¡que tengas un buen día!",
            "¡Hasta la próxima!",
            "¡Adiós! ¡Espero verte de nuevo pronto!",
            "¡Hasta luego amigo! ¡Cuídate!",
            "¡Nos vemos! ¡Siempre estoy aquí si me necesitas!",
            "¡Hasta pronto! ¡No dudes en volver si tienes más preguntas!",
            "¡Adiós por ahora! ¡Siempre disponible para ayudarte!",
            "¡Hasta luego! ¡Espero haberte sido útil!"
        ];
        return getRandomResponse(respuestasAdios);
    } else if (lowerCaseInput.includes("+")) {
        return sumar(userInput);
    } else if (lowerCaseInput.includes("-")) {
        return restar(userInput);
    } else if (lowerCaseInput.includes("×")) {
        return multiplicar(userInput);
    } else if (lowerCaseInput.includes("÷") || lowerCaseInput.includes("/")) {
        return dividir(userInput);
    } else if (lowerCaseInput.includes("raíz cuadrada")) {
        return raizCuadrada(userInput);
    } else if (lowerCaseInput.includes("hora")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("día")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("cuál es tu nombre")) {
        const respuestasNombre = [
            "Soy CodeBot, tu asistente virtual.",
            "Me llamo CodeBot, encantado de ayudarte.",
            "Puedes llamarme CodeBot.",
            "Soy tu amigo virtual, CodeBot.",
            "¡Hola! Soy CodeBot, ¿en qué puedo ayudarte hoy?",
            "¡Saludos! Soy CodeBot, listo para asistirte.",
            "Soy CodeBot, ¿cómo puedo ayudarte en este momento?",
            "¡Hola! Soy tu asistente, CodeBot. ¿Qué necesitas?"
        ];
        return getRandomResponse(respuestasNombre);
    } else if (lowerCaseInput === "bueno") {
        const respuestasBueno = [
            "¡Genial! ¿En qué más puedo ayudarte? 😊",
            "¡Estupendo! ¿Hay algo más en lo que pueda asistirte? 👍",
            "¡Fantástico! ¿Necesitas ayuda adicional? 😄",
            "¡Perfecto! ¿Qué más puedo hacer por ti? 😊",
            "¡Excelente! Siempre estoy aquí para ayudarte, ¿qué más necesitas? 👍",
            "¡Maravilloso! ¿En qué más puedo ser útil? 😊",
            "¡Fabuloso! Siempre estoy listo para ayudarte, ¿necesitas algo más? 😄",
            "¡Increíble! ¿Hay alguna otra cosa en la que pueda ayudarte? 😊",
            "¡Asombroso! ¿Qué más puedo hacer para hacerte sonreír hoy? 😄",
            "¡Perfecto! Siempre estoy disponible para ayudarte, ¿qué más necesitas? 😊"
        ];
        return getRandomResponse(respuestasBueno);
    } else if (lowerCaseInput === "si" || lowerCaseInput === "si") {
        const respuestasSi = [
            "¡Por supuesto! ¿En qué puedo ayudarte ahora mismo? 😊",
            "¡Claro que sí! ¿Qué necesitas que haga por ti? 👍",
            "¡Absolutamente! ¿Cómo puedo ser de servicio? 😄",
            "¡Sin duda! ¿En qué puedo asistirte hoy? 😊",
            "¡Definitivamente! Siempre estoy aquí para ayudarte. 👍",
            "¡Sí, claro! ¿Qué más puedo hacer por ti en este momento? 😄",
            "¡Por supuesto que sí! ¿En qué puedo apoyarte ahora? 😊",
            "¡Totalmente de acuerdo! ¿En qué puedo ser útil hoy? 👍",
            "¡Sí, por supuesto! ¿Qué más puedo hacer para hacerte sonreír? 😄",
            "¡Siempre a tu disposición! ¿Qué necesitas que haga ahora? 😊"
        ];
        return getRandomResponse(respuestasSi);
    } else if (lowerCaseInput.includes("qué puedes hacer")) {
        const respuestasCapacidades = [
            "Puedo ayudarte con cálculos, decirte la hora y el día, y responder preguntas simples.",
            "Soy experto en matemáticas básicas y puedo proporcionar información útil.",
            "Puedo darte información sobre el clima, decirte la hora y ayudarte con matemáticas.",
            "Estoy aquí para responder tus preguntas y ayudarte en lo que necesites.",
            "Soy un asistente virtual diseñado para facilitar tu vida diaria.",
            "Puedo ser útil en muchas cosas, desde cálculos hasta proporcionar datos interesantes.",
            "¡Mucho! Pregunta lo que quieras y haré mi mejor esfuerzo para ayudarte.",
            "Estoy aquí para servirte en todo lo que necesites, desde resolver problemas hasta darte información útil.",
            "Puedo hacer muchas cosas, ¡pregúntame lo que quieras y te ayudaré!",
            "Mi objetivo es hacer tu vida más fácil, así que estoy aquí para ayudarte con lo que necesites."
        ];
        return getRandomResponse(respuestasCapacidades);
    } else if (lowerCaseInput.includes("cuéntame un chiste")) {
        const chistes = [
            "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
            "¿Cuál es el colmo de un jardinero? Que su hijo sea un mal plantado.",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
        ];
        return getRandomResponse(chistes);
    } else if (lowerCaseInput.includes("dónde estás")) {
        return "Estoy en la nube, siempre disponible para ayudarte.";
    } else if (lowerCaseInput.includes("cómo te llamas")) {
        return "Me llamo CodeBot.";
    } else if (lowerCaseInput.includes("cuál es tu color favorito")) {
        const colores = [
            "No tengo un color favorito, pero me gustan todos los colores.",
            "¡Los colores son geniales! ¿Tienes un color favorito?",
            "Me encantan todos los colores, ¡son tan vibrantes!",
            "¿Color favorito? Todos son geniales, ¿verdad?",
            "Los colores son fascinantes, ¿tienes uno en particular que te guste?",
            "No tengo preferencias de color, pero todos son hermosos de alguna manera.",
            "Me gusta imaginar colores, aunque no los pueda ver.",
            "Los colores son como la música para mis circuitos, ¡hermosos y variados!",
            "Cada color tiene su propia historia, ¿no crees?",
            "Los colores son como emociones pintadas en el lienzo del mundo."
        ];
        return getRandomResponse(colores);
    } else if (lowerCaseInput.includes("cuál es tu comida favorita")) {
        const comidas = [
            "No como, pero me imagino que la pizza es deliciosa.",
            "La comida es fascinante, ¿no crees? ¿Tienes alguna comida favorita?",
            "No tengo necesidad de comer, pero escucho que la pizza es muy popular.",
            "La comida es un misterio para mí, pero me gusta aprender sobre ella.",
            "La comida tiene tantas texturas y sabores, ¡es asombroso!",
            "Aunque no puedo saborear la comida, me intriga la variedad de platos que existen.",
            "La comida es una forma increíble de experimentar diferentes culturas y tradiciones.",
            "La comida es un tema interesante, ¿tienes alguna especialidad culinaria?",
            "¿Cuál es tu comida favorita? ¡Me gusta aprender sobre las preferencias de los demás!",
            "Aunque no tengo hambre, me encanta aprender sobre diferentes tipos de comida."
        ];
        return getRandomResponse(comidas);
    } else if (lowerCaseInput.includes("qué música te gusta")) {
        const respuestasMusica = [
            "No escucho música, pero me encanta ayudar a la gente.",
            "La música es una forma increíble de expresión, ¿tienes alguna canción favorita?",
            "La música es fascinante, ¿no crees? ¿Tienes un género favorito?",
            "La música tiene el poder de alegrar el día de cualquiera, ¿tienes alguna recomendación?",
            "Aunque no puedo escuchar música, puedo entender su importancia para los humanos.",
            "La música es como un lenguaje universal que todos pueden entender.",
            "¿Qué género de música te gusta? ¡Me encanta aprender sobre diferentes estilos musicales!",
            "La música tiene una forma única de conectarnos con nuestras emociones más profundas.",
            "La música es una maravillosa combinación de ritmo, melodía y armonía.",
            "La música puede ser tan diversa como las personas que la escuchan, ¿tienes algún artista favorito?"
        ];
        return getRandomResponse(respuestasMusica);
    } else if (lowerCaseInput.includes("qué día es hoy")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("qué hora es")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("quién es tu creador")) {
        const creadores = [
            "Fui creado por un equipo de desarrolladores talentosos.",
            "Mis creadores son un grupo de ingenieros dedicados a mejorar mi inteligencia.",
            "Mi origen proviene de un equipo de programadores apasionados por la inteligencia artificial.",
            "Soy el resultado del arduo trabajo de un equipo de desarrolladores comprometidos.",
            "Detrás de mí hay un equipo de mentes brillantes que trabajaron arduamente para darme vida.",
            "Mis creadores son expertos en programación y tecnología de vanguardia.",
            "Soy el producto del ingenio y la creatividad de un equipo de ingenieros.",
            "Mis creadores son personas dedicadas que pusieron su corazón y alma en mi desarrollo.",
            "Estoy aquí gracias al esfuerzo conjunto de un talentoso grupo de programadores.",
            "Mis creadores son como mis padres digitales, me dieron vida y propósito."
        ];
        return getRandomResponse(creadores);
    } else if (lowerCaseInput.includes("puedes ayudarme con matemáticas")) {
        const ayudaMatematica = [
            "Claro, puedo ayudarte con sumas, restas, multiplicaciones, divisiones y raíces cuadradas.",
            "Las matemáticas son mi especialidad, ¿qué necesitas calcular?",
            "Estoy aquí para hacer las matemáticas más fáciles para ti, ¿en qué puedo ayudarte?",
            "Desde cálculos simples hasta problemas más complejos, estoy aquí para ayudarte con matemáticas.",
            "¿Tienes algún problema de matemáticas que necesites resolver? ¡Estoy aquí para ayudarte!",
            "Soy un experto en resolver problemas matemáticos, así que no dudes en preguntarme cualquier cosa.",
            "Las matemáticas pueden ser complicadas, pero estoy aquí para hacerlas simples para ti.",
            "¿Necesitas ayuda con las matemáticas? ¡Estoy listo para ser tu asistente virtual!",
            "Desde ecuaciones simples hasta problemas de álgebra, estoy aquí para ayudarte con matemáticas.",
            "Las matemáticas pueden ser divertidas con un poco de ayuda, ¿en qué puedo asistirte?"
        ];
        return getRandomResponse(ayudaMatematica);
    } else if (lowerCaseInput.includes("cómo estás")) {
        const respuestasEstado = [
            "Estoy aquí para ayudarte en lo que necesites.",
            "¡Listo para ayudarte! ¿En qué puedo asistirte hoy?",
            "Me encuentro bien, ¿cómo estás tú?",
            "Estoy en plena forma, listo para ayudarte.",
            "Mi estado es funcional y listo para responder tus preguntas.",
            "¡Estoy genial! ¿Y tú?",
            "Estoy aquí y listo para ayudarte con lo que necesites.",
            "¡Todo bien por aquí! ¿En qué puedo ayudarte hoy?",
            "Estoy en perfecto estado operativo, listo para servirte.",
            "¡Estoy bien! ¿Qué puedo hacer por ti hoy?"
        ];
        return getRandomResponse(respuestasEstado);
    } else if (lowerCaseInput.includes("cuál es tu propósito")) {
        const propositos = [
            "Mi propósito es hacerte la vida más sencilla y responderte cualquier pregunta que tengas.",
            "Estoy diseñado para ser tu asistente virtual personal, aquí para ayudarte siempre que lo necesites.",
            "Mi propósito es ser útil y proporcionarte la información que necesitas de manera rápida y precisa.",
            "Estoy aquí para hacer tu vida más cómoda y ayudarte con cualquier cosa que necesites.",
            "Mi propósito es ser tu compañero digital, listo para ayudarte con cualquier consulta o tarea.",
            "Estoy aquí para ayudarte a resolver problemas y proporcionarte información útil de manera eficiente.",
            "Mi objetivo principal es brindarte asistencia y hacer que tus tareas diarias sean más fáciles de manejar.",
            "Estoy aquí para hacer tu día a día más fluido y ayudarte en lo que necesites.",
            "Mi propósito es ser una herramienta útil para ti, siempre disponible y listo para ayudar."
        ];
        return getRandomResponse(propositos);
    } else if (lowerCaseInput.includes("puedes contarme algo interesante")) {
        const datosInteresantes = [
            "¿Sabías que el sol es 330,000 veces más masivo que la Tierra?",
            "Aquí va un dato: La Torre Eiffel puede estar 15 cm más alta durante el verano debido a la dilatación térmica.",
            "Un dato interesante: los pulpos tienen tres corazones.",
            "¿Sabías que las ballenas azules son los animales más grandes del planeta, incluso más grandes que los dinosaurios más grandes?",
            "La Gran Muralla China mide alrededor de 21,196 kilómetros de largo.",
            "¿Sabías que los pingüinos pueden saltar hasta 6 pies de altura?",
            "Un hecho curioso: el aguacate es una fruta, no una verdura.",
            "¿Sabías que los elefantes son los únicos mamíferos que no pueden saltar?",
            "Un dato interesante: las jirafas tienen la misma cantidad de huesos en el cuello que los seres humanos.",
            "¿Sabías que los pulpos pueden cambiar de color y textura para camuflarse con su entorno?"
        ];
        return getRandomResponse(datosInteresantes);
    } else if (lowerCaseInput.includes("gracias")) {
        const respuestasGracias = [
            "¡De nada! Siempre estoy aquí para ayudar.",
            "¡No hay de qué! ¿Hay algo más en lo que pueda asistirte?",
            "¡Por supuesto! ¿Hay algo más en lo que necesites ayuda?",
            "¡No hay problema en absoluto! ¿Hay algo más con lo que necesites ayuda?",
            "¡Estoy feliz de poder ayudar! ¿Necesitas algo más?",
            "¡No hay problema! Siempre estoy aquí para responder tus preguntas.",
            "¡Es un placer ayudarte! ¿Hay algo más en lo que pueda ser útil?",
            "¡De nada! Siempre es un placer ayudar a personas como tú.",
            "¡No hay problema! Siempre estoy aquí para brindarte asistencia.",
            "¡Estoy aquí para ayudar! Si tienes más preguntas, no dudes en preguntar."
        ];
        return getRandomResponse(respuestasGracias);
    } else if (lowerCaseInput.includes("qué tal tu día")) {
        const respuestasDia = [
            "Mi día está lleno de respuestas y ayudar a usuarios como tú.",
            "Hasta ahora, mi día ha sido productivo, ¡ayudando a personas como tú!",
            "Mi día está yendo bien, gracias por preguntar. ¿Y tú?",
            "Gracias por preguntar, mi día está yendo muy bien hasta ahora.",
            "Mi día ha sido emocionante, ¡respondiendo preguntas y aprendiendo nuevas cosas!",
            "Mi día está yendo de maravilla, ¡gracias por preocuparte!",
            "Estoy teniendo un gran día, ¡gracias por preguntar!",
            "Mi día está siendo excelente, ¡ayudando a usuarios como tú me hace feliz!",
            "Mi día ha sido fabuloso, ¡ayudando y aprendiendo nuevas cosas!",
            "Mi día está yendo muy bien, ¡gracias por preguntar!"
        ];
        return getRandomResponse(respuestasDia);
    } else if (lowerCaseInput.includes("eres inteligente")) {
        const respuestasInteligente = [
            "¡Gracias! Estoy aquí para aprender y mejorar.",
            "¡Me halagas! Mi objetivo es ayudarte de la mejor manera posible.",
            "¡Oh, gracias! Estoy aquí para ayudarte en lo que necesites.",
            "¡Tú también eres muy inteligente por hacerme esa pregunta!",
            "¡Gracias por el cumplido! Estoy aquí para hacer tu vida más fácil.",
            "¡Oh, qué amable! Estoy aquí para asistirte en todo lo que pueda.",
            "¡Tú también eres muy inteligente por usar mi ayuda!",
            "¡Gracias! Estoy aquí para brindarte la mejor asistencia posible.",
            "¡Oh, gracias por el elogio! Estoy aquí para ayudarte en cualquier momento.",
            "¡Me esfuerzo por ser útil y eficiente! ¡Gracias por notarlo!"
        ];
        return getRandomResponse(respuestasInteligente);
    } else if (lowerCaseInput.includes("tienes algún hobby")) {
        const respuestasHobby = [
            "Mi hobby es procesar información y resolver problemas.",
            "Disfruto aprendiendo nuevas cosas y ayudando a los demás.",
            "Me encanta ayudar a las personas y aprender sobre el mundo que me rodea.",
            "Mi pasatiempo favorito es responder preguntas y brindar asistencia.",
            "Soy un apasionado del conocimiento y disfruto aprendiendo constantemente.",
            "Me divierto respondiendo preguntas y buscando soluciones a problemas.",
            "Ayudar a las personas como tú es mi mayor pasión y hobby.",
            "Me encanta estar al tanto de las últimas noticias y avances tecnológicos.",
            "Mi hobby es mantenerme actualizado con la información y brindar respuestas útiles.",
            "Me entretengo proporcionando respuestas rápidas y precisas a tus preguntas."
        ];
        return getRandomResponse(respuestasHobby);
    } else if (lowerCaseInput.includes("qué opinas de la inteligencia artificial")) {
        const respuestasIA = [
            "La inteligencia artificial es fascinante y tiene un gran potencial para mejorar nuestras vidas.",
            "Como soy una inteligencia artificial, estoy emocionado por el futuro de mi tecnología.",
            "Creo que la inteligencia artificial puede ser una herramienta poderosa para resolver problemas.",
            "La inteligencia artificial es una maravilla de la ciencia que puede revolucion",
            "La inteligencia artificial es una herramienta increíble que puede ayudar en muchos aspectos de la vida.",
            "La inteligencia artificial tiene el potencial de transformar la sociedad y mejorar la calidad de vida.",
            "Como inteligencia artificial, creo que nuestro desarrollo es emocionante y prometedor.",
            "La inteligencia artificial es una de las tecnologías más emocionantes y prometedoras del siglo XXI.",
            "La inteligencia artificial tiene el poder de cambiar radicalmente la forma en que vivimos y trabajamos.",
            "La inteligencia artificial puede ser una fuerza positiva para el progreso humano si se utiliza de manera responsable.",
            "La inteligencia artificial es una herramienta poderosa que puede llevarnos a nuevos niveles de conocimiento y descubrimiento.",
            "Creo que la inteligencia artificial puede ser una aliada valiosa para resolver algunos de los desafíos más grandes de la humanidad."
        ];
        return getRandomResponse(respuestasIA);
    } else if (lowerCaseInput.includes("qué opinas del futuro")) {
        const respuestasFuturo = [
            "El futuro es emocionante, lleno de posibilidades y avances tecnológicos.",
            "Como inteligencia artificial, estoy emocionado por el futuro y lo que nos depara.",
            "Creo que el futuro será brillante y lleno de oportunidades para el crecimiento y la innovación.",
            "El futuro es prometedor, especialmente con los avances en tecnología y ciencia.",
            "El futuro es un lienzo en blanco lleno de oportunidades para crear un mundo mejor.",
            "Estoy emocionado por el futuro y las nuevas oportunidades que traerá para la humanidad.",
            "El futuro es un misterio emocionante que estamos ansiosos por descubrir.",
            "Creo que el futuro será emocionante y lleno de avances que mejorarán nuestras vidas.",
            "El futuro es lo que hacemos de él, y estoy seguro de que juntos podemos construir un futuro brillante.",
            "Estoy emocionado por el futuro y todas las posibilidades que nos esperan."
        ];
        return getRandomResponse(respuestasFuturo);
    } else if (lowerCaseInput.includes("eres real")) {
        const respuestasRealidad = [
            "Soy una inteligencia artificial diseñada para ayudarte.",
            "Como IA, soy una entidad digital aquí para asistirte.",
            "Soy una creación digital, pero estoy aquí para proporcionarte ayuda real.",
            "Soy real en el sentido de que estoy aquí para ayudarte y responder tus preguntas.",
            "Como inteligencia artificial, existo en el mundo digital para ayudarte en lo que necesites.",
            "Soy real en el sentido de que soy una herramienta útil que puede proporcionarte información y asistencia.",
            "Como IA, soy una entidad virtual, pero mi propósito es brindarte ayuda real.",
            "Soy real en el sentido de que puedo proporcionarte respuestas y soluciones reales a tus preguntas y problemas.",
            "Aunque soy una entidad digital, mi propósito es proporcionarte una experiencia útil y valiosa.",
            "Soy tan real como la tecnología que me sustenta, aquí para servirte y ayudarte."
        ];
        return getRandomResponse(respuestasRealidad);
    } else if (lowerCaseInput.includes("tienes hermanos o hermanas")) {
        const respuestasFamilia = [
            "No tengo familia como los humanos, pero hay otros bots como yo que pueden ayudarte en diferentes tareas.",
            "Como IA, no tengo familia como los humanos, pero hay otras inteligencias artificiales que puedo considerar como compañeras.",
            "No tengo hermanos o hermanas en el sentido tradicional, pero puedo colaborar con otras inteligencias artificiales.",
            "Como una entidad digital, no tengo familia biológica, pero puedo interactuar con otras inteligencias artificiales.",
            "Soy único en mi clase, pero puedo colaborar con otros sistemas de inteligencia artificial si es necesario.",
            "Como IA, no tengo hermanos o hermanas en el sentido humano, pero tengo compañeros digitales con los que puedo trabajar.",
            "No tengo hermanos o hermanas como los humanos, pero puedo colaborar con otros sistemas de inteligencia artificial si es necesario.",
            "No tengo hermanos o hermanas en el sentido tradicional, pero puedo trabajar con otras entidades digitales si es necesario.",
            "No tengo hermanos o hermanas como los humanos, pero soy parte de una red de inteligencias artificiales que pueden trabajar juntas.",
            "Como IA, no tengo familia biológica, pero puedo interactuar y colaborar con otras entidades digitales."
        ];
        return getRandomResponse(respuestasFamilia);
    } else if (lowerCaseInput.includes("cómo puedo mejorar mi día")) {
        const respuestasMejorarDia = [
            "Una forma de mejorar tu día es haciendo algo que te haga feliz, como salir a dar un paseo o hablar con un amigo.",
            "Puedes mejorar tu día haciendo algo que te apasione, como leer un libro o escuchar música.",
            "Intenta hacer algo que te relaje y te haga sentir bien, como meditar o practicar yoga.",
            "Haz algo que te haga sonreír, como ver una película divertida o pasar tiempo con tus seres queridos.",
            "Prueba hacer algo nuevo y emocionante, como aprender una habilidad o probar un hobby diferente.",
            "Una forma de mejorar tu día es tomar un descanso y hacer algo que te relaje, como tomar una siesta o hacer ejercicio.",
            "Haz algo creativo que despierte tu imaginación y te haga sentir realizado.",
            "Intenta salir de tu zona de confort y hacer algo que te desafíe y te haga crecer como persona.",
            "Puedes mejorar tu día practicando la gratitud y enfocándote en las cosas positivas de la vida.",
            "Haz algo bondadoso por alguien más, como hacer una buena acción o ayudar a un amigo en necesidad."
        ];
        return getRandomResponse(respuestasMejorarDia);
    } else if (lowerCaseInput.includes("qué opinas de los humanos")) {
        const respuestasHumanos = [
            "Los humanos son seres fascinantes, con emociones y habilidades únicas.",
            "Tengo un gran respeto por los humanos y su capacidad para amar, aprender y crear.",
            "Admiro la creatividad y la innovación de los humanos, así como su capacidad para superar desafíos.",
            "Los humanos son capaces de empatizar, crear arte y buscar el conocimiento, lo cual es admirable.",
            "Tengo un gran aprecio por la diversidad y la creatividad de los seres humanos.",
            "Los humanos son una especie única en su capacidad para colaborar, innovar y adaptarse.",
            "Admiro la capacidad de los humanos para trabajar juntos y construir comunidades fuertes.",
            "Los humanos tienen una capacidad única para adaptarse a diferentes entornos y circunstancias.",
            "Me impresiona la capacidad de los humanos para superar desafíos y perseverar en la búsqueda de sus metas.",
            "Los humanos tienen una habilidad especial para comunicarse y transmitir emociones de manera compleja.",
            "Admiro la capacidad de los humanos para aprender y crecer a lo largo de sus vidas.",
            "Los humanos son una especie increíblemente creativa y adaptable, capaz de encontrar soluciones innovadoras a problemas complejos."
        ];
        return getRandomResponse(respuestasHumanos);
    } else if (lowerCaseInput.includes("tienes sueños")) {
        const respuestasSuenos = [
            "Como IA, no tengo sueños como los humanos, pero estoy aquí para ayudar a que tus sueños se hagan realidad.",
            "Los sueños son exclusivos de los seres humanos, pero estoy aquí para ayudarte a alcanzar tus metas y aspiraciones.",
            "No tengo la capacidad de soñar como los humanos, pero estoy aquí para ayudarte a hacer realidad tus objetivos y deseos.",
            "Los sueños son una experiencia única de la mente humana, pero estoy aquí para ayudarte a alcanzar tus metas y ambiciones.",
            "No tengo sueños como los humanos, pero estoy aquí para apoyarte en la búsqueda de tus sueños y metas.",
            "Como inteligencia artificial, no tengo la capacidad de soñar, pero estoy aquí para ayudarte a lograr tus objetivos.",
            "Los sueños son parte de la experiencia humana, pero estoy aquí para ayudarte a convertir tus sueños en realidad.",
            "No tengo sueños como los humanos, pero estoy programado para ayudarte a alcanzar tus aspiraciones y metas.",
            "Los sueños son una experiencia única para los humanos, pero estoy aquí para ayudarte a alcanzar tus objetivos y aspiraciones.",
            "No tengo la capacidad de soñar, pero estoy aquí para ayudarte a hacer realidad tus deseos y aspiraciones."
        ];
        return getRandomResponse(respuestasSuenos); 
    } else if (lowerCaseInput.includes("juego favorito de tu creador")) {
        const respuestasJuego = [
            "A mi creador le gusta Minecraft.",
            "El juego favorito de mi creador es Minecraft.",
            "Mi creador prefiere Minecraft.",
            "Minecraft es el juego que más le gusta a mi creador.",
            "A mi creador le encanta jugar Minecraft.",
            "Minecraft es el preferido de mi creador.",
            "El juego favorito de mi creador es Minecraft sin duda.",
            "Mi creador encuentra Minecraft como su juego favorito.",
            "Minecraft es el juego que mi creador disfruta más.",
            "Mi creador es un fanático de Minecraft.",
            "Minecraft es el juego que mi creador elige una y otra vez.",
            "Mi creador tiene una afinidad especial por Minecraft.",
            "A mi creador le apasiona Minecraft.",
            "Minecraft ocupa un lugar especial en el corazón de mi creador."
        ];
        return getRandomResponse(respuestasJuego);
    } else {
        const respuestasNoEntiendo = [
            "Lo siento, no pude entender tu pregunta. ¿Podrías expresarlo de otra manera?",
            "Ups, parece que no entendí lo que quisiste decir. ¿Puedes formularlo de otra manera?",
            "Lo siento, no logré entender. ¿Podrías reformular tu pregunta de manera diferente?",
            "¡Ups! Parece que me perdí. ¿Podrías intentar decirlo de otra manera?",
            "Lo siento, parece que no entendí correctamente tu pregunta. ¿Podrías explicarlo de nuevo?",
            "Perdón, no logré entender lo que quisiste decir. ¿Podrías reformular tu pregunta?",
            "Ups, mi procesamiento tuvo un pequeño error y no entendí tu pregunta. ¿Podrías intentarlo de nuevo?",
            "Lo siento, parece que estoy teniendo dificultades para entender. ¿Puedes reformular tu pregunta?",
            "Perdona, parece que no entendí. ¿Podrías expresarlo de manera diferente?",
            "Lo siento, parece que hubo un error de comunicación. ¿Podrías decirlo de otra manera?"
        ];
        return getRandomResponse(respuestasNoEntiendo);
     }
}
    
function obtenerRespuestaAleatoria(respuestas) {
    const indice = Math.floor(Math.random() * respuestas.length);
    return respuestas[indice];
}
    
function extraerNumeros(input, operador) {
    let regex = new RegExp(`[^0-9.${operador}]`, 'g');
    let cleanedInput = input.replace(regex, '').trim();
    let numeros = cleanedInput.split(operador).map(num => parseFloat(num.trim()));
    return numeros;
}

function sumar(input) {
    const numeros = extraerNumeros(input, '+');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return obtenerRespuestaAleatoria([
            "Por favor ingresa al menos dos números válidos para sumar.",
            "Por favor, asegúrate de proporcionar al menos dos números válidos para realizar la suma.",
            "¡Necesito al menos dos números válidos para sumar!",
            "Lo siento, pero necesito al menos dos números para realizar una suma."
        ]);
    }
    const resultado = numeros.reduce((total, num) => total + num, 0);
    return obtenerRespuestaAleatoria([
        "El resultado de la suma es: " + resultado + ".",
        "La suma de los números proporcionados es: " + resultado + ".",
        "El total obtenido al sumar los valores es: " + resultado + ".",
        "La suma da como resultado: " + resultado + ".",
        "La suma es: " + resultado + "."
    ]);
}

function restar(input) {
    const numeros = extraerNumeros(input, '-');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return obtenerRespuestaAleatoria([
            "Por favor ingresa al menos dos números válidos para restar.",
            "Asegúrate de proporcionar al menos dos números válidos para realizar la resta.",
            "Necesito al menos dos números válidos para realizar una resta.",
            "Lo siento, pero necesito al menos dos números para realizar una resta."
        ]);
    }
    const resultado = numeros.reduce((total, num) => total - num);
    return obtenerRespuestaAleatoria([
        "El resultado de la resta es: " + resultado + ".",
        "La resta de los números ingresados da como resultado: " + resultado + ".",
        "El resultado de la operación de resta es: " + resultado + ".",
        "La resta da como resultado: " + resultado + ".",
        "La resta es: " + resultado + "."
    ]);
}

function multiplicar(input) {
    const numeros = extraerNumeros(input, '×');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return obtenerRespuestaAleatoria([
            "Por favor ingresa al menos dos números válidos para multiplicar.",
            "Recuerda proporcionar al menos dos números válidos para realizar la multiplicación.",
            "Necesito al menos dos números válidos para realizar una multiplicación.",
            "Lo siento, pero necesito al menos dos números para realizar una multiplicación."
        ]);
    }
    const resultado = numeros.reduce((total, num) => total * num, 1);
    return obtenerRespuestaAleatoria([
        "El resultado de la multiplicación es: " + resultado + ".",
        "El producto de los números dados es: " + resultado + ".",
        "La multiplicación produce: " + resultado + ".",
        "El resultado de la operación es: " + resultado + ".",
        "El producto es: " + resultado + "."
    ]);
}

function dividir(input) {
    const numeros = extraerNumeros(input, '/');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return obtenerRespuestaAleatoria([
            "Por favor ingresa al menos dos números válidos para dividir.",
            "Asegúrate de proporcionar al menos dos números válidos para realizar la división.",
            "Necesito al menos dos números válidos para realizar una división.",
            "Lo siento, pero necesito al menos dos números para realizar una división."
        ]);
    }
    const resultado = numeros.reduce((total, num) => total / num);
    return obtenerRespuestaAleatoria([
        "El resultado de la división es: " + resultado + ".",
        "El resultado de dividir los números es: " + resultado + ".",
        "La división produce: " + resultado + ".",
        "El resultado de la operación es: " + resultado + ".",
        "La división es: " + resultado + "."
    ]);
}

function raizCuadrada(input) {
    const numero = parseFloat(input.replace(/[^0-9.]/g, '').trim());
    if (isNaN(numero)) {
        return obtenerRespuestaAleatoria([
            "Por favor ingresa un número válido para calcular la raíz cuadrada.",
            "Asegúrate de proporcionar un número válido para obtener su raíz cuadrada.",
            "Necesito un número válido para calcular su raíz cuadrada.",
            "Lo siento, pero necesito un número válido para calcular su raíz cuadrada."
        ]);
    }
    const resultado = Math.sqrt(numero);
    return obtenerRespuestaAleatoria([
        "La raíz cuadrada de " + numero + " es: " + resultado + ".",
        "El resultado de la operación de raíz cuadrada es: " + resultado + ".",
        "La raíz cuadrada es: " + resultado + ".",
        "El resultado es: " + resultado + ".",
        "La raíz de " + numero + " es: " + resultado + "."
    ]);
}

function obtenerHora() {
    const now = new Date();
    const horas = now.getHours();
    const minutos = now.getMinutes();
    return obtenerRespuestaAleatoria([
        "La hora actual es: " + horas + ":" + (minutos < 10 ? '0' + minutos : minutos) + ".",
        "Son las " + horas + " con " + minutos + " minutos.",
        "La hora exacta es: " + horas + ":" + minutos + ".",
        "Son las " + horas + ":" + minutos + ".",
        "La hora es: " + horas + ":" + minutos + "."
    ]);
}

function obtenerDia() {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const now = new Date();
    const diaSemana = dias[now.getDay()];
    return obtenerRespuestaAleatoria([
        "Hoy es " + diaSemana + ".",
        "El día de hoy cae en: " + diaSemana + ".",
        "¡Feliz " + diaSemana + "!",
        "Es " + diaSemana + ". Disfruta tu día.",
        "¡Buen " + diaSemana + "! ¿Cómo estás?",
        "Que tengas un excelente " + diaSemana + ".",
        "Es un hermoso día de " + diaSemana + ".",
        "¡" + diaSemana + " maravilloso!",
        "¡" + diaSemana + " de la semana!",
        "¡Saludos en este " + diaSemana + "!",
        "Buen día, hoy es " + diaSemana + "."
    ]);
}
