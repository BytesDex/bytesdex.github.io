document.addEventListener('DOMContentLoaded', function() {
    const checkboxTerms = document.getElementById('terms-checkbox');
    const acceptButtonTerms = document.getElementById('accept-button-terms');
    const thankYouMessageTerms = document.getElementById('thank-you-message-terms');

    if (checkboxTerms && acceptButtonTerms && thankYouMessageTerms) {
        if (localStorage.getItem('acceptedTerms')) {
            document.querySelector('.terms-section').style.display = 'none';
            thankYouMessageTerms.style.display = 'block';
        } else {
            checkboxTerms.addEventListener('change', function() {
                acceptButtonTerms.disabled = !this.checked;
            });

            acceptButtonTerms.addEventListener('click', function() {
                localStorage.setItem('acceptedTerms', 'true');
                document.querySelector('.terms-section').style.display = 'none';
                thankYouMessageTerms.style.display = 'block';
            });
        }
    }

    const checkboxPrivacy = document.getElementById('privacy-checkbox');
    const acceptButtonPrivacy = document.getElementById('accept-button-privacy');
    const thankYouMessagePrivacy = document.getElementById('thank-you-message-privacy');

    if (checkboxPrivacy && acceptButtonPrivacy && thankYouMessagePrivacy) {
        if (localStorage.getItem('acceptedPrivacy')) {
            document.querySelector('.privacy-section').style.display = 'none';
            thankYouMessagePrivacy.style.display = 'block';
        } else {
            checkboxPrivacy.addEventListener('change', function() {
                acceptButtonPrivacy.disabled = !this.checked;
            });

            acceptButtonPrivacy.addEventListener('click', function() {
                localStorage.setItem('acceptedPrivacy', 'true');
                document.querySelector('.privacy-section').style.display = 'none';
                thankYouMessagePrivacy.style.display = 'block';
            });
        }
    }

    const checkboxSecurity = document.getElementById('security-checkbox');
    const acceptButtonSecurity = document.getElementById('accept-button-security');
    const thankYouMessageSecurity = document.getElementById('thank-you-message-security');

    if (checkboxSecurity && acceptButtonSecurity && thankYouMessageSecurity) {
        if (localStorage.getItem('acceptedSecurity')) {
            document.querySelector('.security-section').style.display = 'none';
            thankYouMessageSecurity.style.display = 'block';
        } else {
            checkboxSecurity.addEventListener('change', function() {
                acceptButtonSecurity.disabled = !this.checked;
            });

            acceptButtonSecurity.addEventListener('click', function() {
                localStorage.setItem('acceptedSecurity', 'true');
                document.querySelector('.security-section').style.display = 'none';
                thankYouMessageSecurity.style.display = 'block';
            });
        }
    }
});
