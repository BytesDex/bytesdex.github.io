function handleCheckboxChange(checkbox, button) {
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

function handleButtonClick(button, messageElement, sectionElement) {
    button.addEventListener('click', function() {
        sectionElement.style.display = 'none'; 
        messageElement.style.display = 'block'; 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#terms-checkbox')) {
        const checkboxTerms = document.getElementById('terms-checkbox');
        const acceptButtonTerms = document.getElementById('accept-button');
        const thankYouMessageTerms = document.getElementById('thank-you-message');
        handleCheckboxChange(checkboxTerms, acceptButtonTerms);
        handleButtonClick(acceptButtonTerms, thankYouMessageTerms, document.querySelector('.terms-section'));
    }

    if (document.querySelector('#terms-checkbox') && !document.querySelector('#privacy-checkbox')) {
        const checkboxSecurity = document.getElementById('terms-checkbox');
        const acceptButtonSecurity = document.getElementById('accept-button');
        const thankYouMessageSecurity = document.getElementById('thank-you-message');
        handleCheckboxChange(checkboxSecurity, acceptButtonSecurity);
        handleButtonClick(acceptButtonSecurity, thankYouMessageSecurity, document.querySelector('.terms-section'));
    }

    if (document.querySelector('#privacy-checkbox')) {
        const checkboxPrivacy = document.getElementById('privacy-checkbox');
        const acceptButtonPrivacy = document.getElementById('accept-button-privacy');
        const thankYouMessagePrivacy = document.getElementById('thank-you-message-privacy');
        handleCheckboxChange(checkboxPrivacy, acceptButtonPrivacy);
        handleButtonClick(acceptButtonPrivacy, thankYouMessagePrivacy, document.querySelector('.terms-section'));
    }
});
