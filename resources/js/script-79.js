const codes = {
    code1: 'SDRLN1I5',
    code2: 'QTdCM0M5',
    code3: 'WDJZOFo1',
    code4: 'QTdCM0Mx',
    code5: 'TDNEOFAy',
    code6: 'UTVOMlI3',
    code7: 'SFY3SktV',
    code8: 'OTI1SDdG'
};

const downloadLinks = {
    'SDRLN1I5': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRXprbnZ2M3lBOEk1b3Q5U1c4d1FWQ2Fwbmc0ckFIUXkvdmlldw',
    'QTdCM0M5': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSDg5MVNuMHNrcm5XZVotcHFCOG52UUt3N1ZwUm4xT2Ivdmlldz91c3A9ZHJpdmVzZGs',
    'WDJZOFo1': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSEo2elFBNGFrV1hWV2l0ZTRmMGJzblJHZ1ViVU5LeVQvdmlldz91c3A9ZHJpdmVzZGs',
    'QTdCM0Mx': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTjczOHo2dzR4UnQ1dXAwVWQxVU43a1RoMkR6RnVIWmwvdmlldz91c3A9ZHJpdmVzZGs',
    'TDNEOFAy': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkZ4d2l4SWIwTzJSY2I5NWF4WHhrNVA4TFYwa00xY2Yvdmlldz91c3A9ZHJpdmVzZGs',
    'UTVOMlI3': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTktjbVI4LXBlQWpaWWRQSUNaRWh5ZXVqT3Q3WHoyemcvdmlldz91c3A9ZHJpdmVzZGs',
    'SFY3SktV': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xV012M0lnTUlDeUxrLVU0ZXp5QTZKaDR3QVNXNnJ5ZUovdmlldz91c3A9ZHJpdmVzZGs',
    'OTI1SDdG': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY1J1NkE5VktUQnpXNzRoRm1COUNLaEJUc2Z0RVpHSHgvdmlldz91c3A9ZHJpdmVzZGs'
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const userInput = event.target.value.trim();
        if (userInput) validateCode(userInput);
    }
}

function validateCode(userCode) {
    const inputField = document.getElementById('codeInput');
    inputField.classList.remove('correct', 'error');

    if (userCode === atob(codes.code1)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['SDRLN1I5']);
    } else if (userCode === atob(codes.code2)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['QTdCM0M5']);
    } else if (userCode === atob(codes.code3)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['WDJZOFo1']);
    } else if (userCode === atob(codes.code4)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['QTdCM0Mx']);
    } else if (userCode === atob(codes.code5)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['TDNEOFAy']);
    } else if (userCode === atob(codes.code6)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['UTVOMlI3']);
    } else if (userCode === atob(codes.code7)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['SFY3SktV']);
    } else if (userCode === atob(codes.code8)) {
        inputField.classList.add('correct');
        window.location.href = atob(downloadLinks['OTI1SDdG']);
    } else {
        inputField.classList.add('error');
        alert("Código incorrecto. Por favor, intenta de nuevo.");
        setTimeout(() => {
            inputField.classList.remove('error');
            inputField.value = '';
        }, 2000);
    }

    if (inputField.classList.contains('correct')) {
        setTimeout(() => {
            inputField.classList.remove('correct');
        }, 2000);
    }
}
function moveInputUp() {
    const inputWrapper = document.getElementById('inputWrapper');
    inputWrapper.style.bottom = '330px'; 
}

function moveInputDown() {
    const inputWrapper = document.getElementById('inputWrapper');
    inputWrapper.style.bottom = '200px'; 
}
