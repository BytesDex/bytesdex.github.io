    window.onload = function () {
        var storedDebt = localStorage.getItem('debt');
        var storedMessages = localStorage.getItem('paymentMessages');

        if (storedDebt) {
            document.getElementById('debt').innerText = storedDebt;
        }

        if (storedMessages) {
            document.getElementById('paymentMessages').innerHTML = storedMessages;
        }
    };

    function agregarDeuda() {
        var nuevaDeuda = parseFloat(document.getElementById('newDebt').value);
        var deudaActual = parseFloat(document.getElementById('debt').innerText);

        if (!isNaN(nuevaDeuda) && nuevaDeuda > 0) {
            var deudaTotal = deudaActual + nuevaDeuda;
            document.getElementById('debt').innerText = deudaTotal.toFixed(2);
            document.getElementById('newDebt').value = "";

            localStorage.setItem('debt', deudaTotal.toFixed(2));
        } else {
            alert("Por favor, ingrese un monto válido para la nueva deuda.");
        }
    }

    function registrarPago() {
        var pago = parseFloat(document.getElementById('payment').value);
        var deudaActual = parseFloat(document.getElementById('debt').innerText);

        if (!isNaN(pago) && pago > 0) {
            var nuevaDeuda = Math.max(0, deudaActual - pago);
            document.getElementById('debt').innerText = nuevaDeuda.toFixed(2);
            document.getElementById('payment').value = "";

            localStorage.setItem('debt', nuevaDeuda.toFixed(2));

            var fecha = new Date();
            var fechaPago = fecha.toLocaleString();

            var message = "Pago registrado el " + fechaPago + ". Deuda actual: Q" + nuevaDeuda.toFixed(2);
            showSuccessMessage(message);

            saveMessageToStorage(message);

            if (nuevaDeuda === 0) {
                var paidMessage = "¡Deuda pagada!";
                showSuccessMessage(paidMessage);
                
                localStorage.removeItem('paymentMessages');
            }
        } else {
            alert("Por favor, ingrese un monto válido para el pago.");
        }
    }

    function showSuccessMessage(message) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'successMessage';
        messageDiv.innerHTML = message;

        document.getElementById('paymentMessages').appendChild(messageDiv);
    }

    function saveMessageToStorage(message) {
        var storedMessages = localStorage.getItem('paymentMessages') || '';
        storedMessages += message + '<br>';
        localStorage.setItem('paymentMessages', storedMessages);
    }

    function toggleButton() {
        var newDebtInput = document.getElementById('newDebt');
        var paymentInput = document.getElementById('payment');

        var newDebtButton = newDebtInput.nextElementSibling;
        var paymentButton = paymentInput.nextElementSibling;

        newDebtButton.style.display = newDebtInput.value.trim() !== '' ? 'inline-block' : 'none';
        paymentButton.style.display = paymentInput.value.trim() !== '' ? 'inline-block' : 'none';
    }

    function toggleButton(buttonId) {
        var input = document.getElementById(buttonId.replace("Button", ""));
        var button = document.getElementById(buttonId);

        button.style.visibility = input.value.trim() !== '' ? 'visible' : 'hidden';
    }
