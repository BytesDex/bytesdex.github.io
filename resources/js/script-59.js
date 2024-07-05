function isBase64(str) {
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,3}=?)?$/;
    return base64Regex.test(str.replace(/\s/g, ''));
}

function decodeFromBase64() {
    const inputText = document.getElementById('inputText').value.trim();

    if (!inputText) {
        alert("Por favor, introduce algún texto antes de decodificar de código Base64.");
        return;
    }

    if (!isBase64(inputText)) {
        alert("El texto ingresado no parece ser un código en Base64 válido.");
        return;
    }

    try {
        let base64 = inputText.replace(/\s/g, ''); 
        const decodedText = atob(base64);
        const cleanText = decodedText.replace(/[^\x20-\x7E]/g, ''); 
        document.getElementById('result').innerText = cleanText;
    } catch (err) {
        alert('Error al decodificar el código en Base64');
    }
}

function copyToClipboard() {
    const resultElement = document.getElementById('result');
    const resultText = resultElement.innerText.trim(); 
    const copyIcon = document.getElementById('copyIcon');
    const checkIcon = document.getElementById('checkIcon');
    const copyText = document.getElementById('copyText');
    
    if (resultText === "") {
        alert("No hay texto decodificado para copiar.");
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(resultElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'inline';
        copyText.textContent = '¡Copiado!';
        setTimeout(function() {
            copyIcon.style.display = 'inline';
            checkIcon.style.display = 'none';
            copyText.textContent = 'Copiar';
        }, 1500);
    } catch (err) {
        alert('Error al copiar el texto decodificado');
    }
    
    selection.removeAllRanges();
    }

    const textarea = document.getElementById('inputText');
    const container = document.querySelector('.container');

    textarea.addEventListener('focus', () => {
    textarea.style.height = '150px'; 
    });

    textarea.addEventListener('blur', () => {
    textarea.style.height = '80px';  
    });
