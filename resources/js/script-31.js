const checkbox = document.getElementById('terms-checkbox');
        const acceptButton = document.getElementById('accept-button');
        const thankYouMessage = document.getElementById('thank-you-message');

        if (localStorage.getItem('acceptedTerms')) {
            document.querySelector('.terms-section').style.display = 'none';  
            thankYouMessage.style.display = 'block';  
        } else {
            checkbox.addEventListener('change', function() {
                acceptButton.disabled = !this.checked;
            });

            acceptButton.addEventListener('click', function() {
                localStorage.setItem('acceptedTerms', 'true');  
                document.querySelector('.terms-section').style.display = 'none';  
                thankYouMessage.style.display = 'block';
            });
        }
