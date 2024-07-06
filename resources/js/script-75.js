const suggestions = {
    "¿Cómo me registro?": "Para registrarte, haz clic en el botón '<a href='./registro'>Registrarse</a>' en la esquina superior derecha y sigue las instrucciones.",
    "¿Cómo contacto con soporte?": "Puedes contactar con soporte a través del formulario de contacto en la página '<a href='./contacto'>Contacto</a>'.",
};

let isFirstTime = true;

function addMessage(content, sender = 'bot') {
    const chatContent = document.getElementById('chat-content');
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', sender);
    messageElem.innerHTML = content; 
    chatContent.appendChild(messageElem);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function addSuggestionButtons() {
    const chatContent = document.getElementById('chat-content');
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    for (const question in suggestions) {
        const button = document.createElement('button');
        button.innerText = question;
        button.onclick = () => handleSuggestionClick(question);
        buttonContainer.appendChild(button);
    }
    chatContent.appendChild(buttonContainer);
}

function handleSuggestionClick(question) {
    const response = suggestions[question];
    addMessage(question, 'user');
    setTimeout(() => {
        addMessage(response);
    }, 500); 
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input');
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';
            setTimeout(() => {
                const response = getResponse(message);
                addMessage(response);
            }, 1000);
        }
    }
}

function getResponse(message) {
    for (const question in suggestions) {
        if (message.toLowerCase().includes(question.toLowerCase())) {
            return suggestions[question];
        }
    }
    return "Lo siento, no tengo una respuesta para esa pregunta. Por favor, contacta con nuestro soporte.";
}

function toggleChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'block' : 'none';
    if (isFirstTime) {
        addMessage("¡Hola! Soy tu asistente de soporte. ¿En qué puedo ayudarte hoy?");
        addSuggestionButtons();
        isFirstTime = false;
    }
}
