    emailjs.init('YOUR_USER_ID'); 

    function recaptchaCallback() {
        const submitButton = document.getElementById('submit-btn');
        submitButton.disabled = false; 
        submitButton.classList.add('enabled'); 
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (grecaptcha && grecaptcha.getResponse().length === 0) {
            alert('Por favor, completa el captcha.');
            return;
        }

        const params = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params) 
            .then(function(response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                document.getElementById('submit-message').innerText = 'El mensaje ha sido enviado correctamente.';
                document.getElementById('submit-btn').style.backgroundColor = '#4CAF50';
            }, function(error) {
                console.log('Error al enviar el correo', error);
                document.getElementById('submit-message').innerText = 'Error al enviar el mensaje: ' + JSON.stringify(error);
                document.getElementById('submit-btn').style.backgroundColor = '#f44336';
            });
    });
