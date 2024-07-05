    function countdown() {
        var seconds = 20;
        var countdownElement = document.getElementById('countdown');
        
        var countdownInterval = setInterval(function() {
            seconds--;
            countdownElement.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                window.location.href = 'webcodem.github.io';
            }
        }, 1000); 
    }
    
    window.onload = function() {
        countdown();
    };
