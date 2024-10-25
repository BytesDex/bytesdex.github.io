       const codes = {
            code1: 'SDRLN1I5', 
            code2: 'Y29kaW8y',
            code3: 'Y29kaW8z' 
        };

        const downloadLinks = {
            'SDRLN1I5': 'aHR0cHM6Ly9kb2N1bWVudC5jb20vZG93bmxvYWQvcGF0aC90ZXN0MS5qcGc',
            'Y29kaW8y': 'aHR0cHM6Ly9kb2N1bWVudC5jb20vZG93bmxvYWQvcGF0aC90ZXN0MS5qcGc',
            'Y29kaW8z': 'aHR0cHM6Ly9kb2N1bWVudC5jb20vZG93bmxvYWQvcGF0aC90ZXN0MS5qcGc'
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
                window.location.href = downloadLinks['SDRLN1I5'];
            } else if (userCode === atob(codes.code2)) {
                inputField.classList.add('correct');
                window.location.href = downloadLinks['Y29kaW8y'];
            } else if (userCode === atob(codes.code3)) {
                inputField.classList.add('correct');
                window.location.href = downloadLinks['Y29kaW8z'];
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