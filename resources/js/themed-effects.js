const style = document.createElement('style');
style.innerHTML = `
    .snowflake {
        position: fixed;
        top: -10px;
        color: white;
        font-size: 1em;
        animation: fall linear infinite;
        pointer-events: none;
        opacity: 0.8;
        z-index: 9999;
    }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.2;
        }
    }
`;
document.head.appendChild(style);

function initSnowEffect() {
    const today = new Date();
    const currentMonth = today.getMonth(); 
    const currentDay = today.getDate(); 

    if (currentMonth === 11 && currentDay >= 1 && currentDay <= 31) {
        createSnowEffect();
    }
}

function createSnowEffect() {
    const body = document.body;
    let snowflakesCount = 0; 

    const interval = setInterval(() => {
        if (snowflakesCount >= 50) { 
            clearInterval(interval);
        } else {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄'; 
            snowflake.style.left = Math.random() * 100 + 'vw'; 
            snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em'; 
            snowflake.style.animationDuration = Math.random() * 4 + 4 + 's'; 
            body.appendChild(snowflake);

            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
                snowflakesCount--;  
            });

            snowflakesCount++; 
        }
    }, 500); 
}

initSnowEffect();
