const style = document.createElement('style');
style.innerHTML = `
    .snowflake {
        position: fixed;
        top: -10px;
        color: white;
        font-size: 1em;
        animation: snowfall linear infinite;
        pointer-events: none;
        opacity: 0.8;
        z-index: 9999;
    }

    @keyframes snowfall {
        from {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0.8;
        }
        to {
            transform: translateY(105vh) rotate(360deg);
            opacity: 0.2;
        }
    }

    .badge.active {
        animation: bounce 1s infinite;
    }

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
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

class SnowEffect {
    constructor() {
        this.snowActive = localStorage.getItem('snowActive') === 'true';
        this.snowToggle = document.getElementById('snowToggle');
        this.snowflakeCountDisplay = document.getElementById('snowflakeCount');
        this.snowflakesCount = 0;
        this.maxSnowflakes = 50;
        this.snowInterval = null;
        this.isPageVisible = true;
        this.activeSnowflakes = new Set();
        this.monthBadge = document.getElementById('monthBadge');

        this.initializeStyles();
        this.initializeEventListeners();
        this.adjustMaxSnowflakes();
        
        this.checkDecember();

        if (this.snowActive) {
            this.startSnowfall();
        }
    }

    initializeStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .snowflake {
                position: fixed;
                top: -10px;
                color: white;
                font-size: 1em;
                pointer-events: none;
                opacity: 0.8;
                z-index: 9999;
                animation: snowfall linear infinite;
            }

            @keyframes snowfall {
                from {
                    transform: translateY(-10px) rotate(0deg);
                    opacity: 0.8;
                }
                to {
                    transform: translateY(105vh) rotate(360deg);
                    opacity: 0.2;
                }
            }

            .badge.active {
                animation: bounce 1s infinite;
            }

            @keyframes bounce {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    initializeEventListeners() {
        document.addEventListener('visibilitychange', () => {
            this.isPageVisible = document.visibilityState === 'visible';
            if (this.isPageVisible && this.snowActive) {
                this.startSnowfall();
            } else {
                this.pauseSnowfall();
            }
        });

        window.addEventListener('resize', () => this.adjustMaxSnowflakes());
        
        if (this.snowToggle) {
            this.snowToggle.checked = this.snowActive;
            this.snowToggle.addEventListener('change', (e) => {
                this.snowActive = e.target.checked;
                localStorage.setItem('snowActive', this.snowActive);
                if (this.snowActive) {
                    this.startSnowfall();
                } else {
                    this.stopSnowfall();
                }
            });
        }
    }

    createSnowflake() {
        if (this.activeSnowflakes.size >= this.maxSnowflakes || !this.isPageVisible) return;

        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;

        const duration = Math.random() * 4 + 4;
        snowflake.animate(
            [
                { transform: 'translateY(-10px) rotate(0deg)', opacity: 0.8 },
                { transform: 'translateY(105vh) rotate(360deg)', opacity: 0.2 }
            ],
            {
                duration: duration * 1000,
                easing: 'linear',
                iterations: 1
            }
        ).onfinish = () => this.removeSnowflake(snowflake);

        document.body.appendChild(snowflake);
        this.activeSnowflakes.add(snowflake);
        this.snowflakesCount = this.activeSnowflakes.size;
        this.updateSnowflakeCount();

        setTimeout(() => {
            if (document.body.contains(snowflake)) {
                this.removeSnowflake(snowflake);
            }
        }, duration * 1000 + 1000);
    }

    removeSnowflake(snowflake) {
        if (document.body.contains(snowflake)) {
            snowflake.remove();
            this.activeSnowflakes.delete(snowflake);
            this.snowflakesCount = this.activeSnowflakes.size;
            this.updateSnowflakeCount();
        }
    }

    startSnowfall() {
        if (this.snowInterval) return;
        
        for (let i = 0; i < Math.min(10, this.maxSnowflakes); i++) {
            this.createSnowflake();
        }

        this.snowInterval = setInterval(() => {
            if (this.isPageVisible && this.snowActive) {
                this.createSnowflake();
            }
        }, 200);
    }

    pauseSnowfall() {
        if (this.snowInterval) {
            clearInterval(this.snowInterval);
            this.snowInterval = null;
        }
    }

    stopSnowfall() {
        this.pauseSnowfall();
        this.activeSnowflakes.forEach(snowflake => this.removeSnowflake(snowflake));
        this.activeSnowflakes.clear();
        this.snowflakesCount = 0;
        this.updateSnowflakeCount();
    }

    adjustMaxSnowflakes() {
        const screenArea = window.innerWidth * window.innerHeight;
        this.maxSnowflakes = Math.max(50, Math.floor(screenArea / 50000));
    }

    updateSnowflakeCount() {
        if (this.snowflakeCountDisplay) {
            this.snowflakeCountDisplay.textContent = `Copos activos: ${this.snowflakesCount}`;
        }
    }

    checkDecember() {
        const today = new Date();
        const isDecember = today.getMonth() === 11;

        if (this.monthBadge) {
            this.monthBadge.textContent = isDecember ? 'Diciembre Activo' : 'Diciembre Inactivo';
            if (isDecember) {
                this.monthBadge.style.backgroundColor = '#0071e3';
            } else {
                this.monthBadge.style.backgroundColor = '';
            }
            this.monthBadge.classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.snowEffect = new SnowEffect();
});
