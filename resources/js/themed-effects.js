document.addEventListener('DOMContentLoaded', function () {
    const snowActive = localStorage.getItem('snowActive') === 'true';
    const snowToggle = document.getElementById('snowToggle');
    const monthBadge = document.getElementById('monthBadge');
    const style = document.createElement('style');
    const snowflakeCountDisplay = document.getElementById('snowflakeCount');
    let snowflakesCount = 0;
    let snowInterval = null;
    let maxSnowflakes = 50;

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

    function adjustMaxSnowflakes() {
        const screenArea = window.innerWidth * window.innerHeight;
        maxSnowflakes = Math.max(50, Math.floor(screenArea / 50000));
    }

    function updateSnowflakeCount() {
        if (snowflakeCountDisplay) {
            snowflakeCountDisplay.textContent = `Copos activos: ${snowflakesCount}`;
        }
    }

    function createSnowEffect() {
        if (snowInterval) return;

        snowInterval = setInterval(() => {
            if (snowflakesCount >= maxSnowflakes) return;

            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em';
            snowflake.style.animationDuration = Math.random() * 4 + 4 + 's';
            document.body.appendChild(snowflake);

            snowflakesCount++;
            updateSnowflakeCount();

            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
                snowflakesCount--;
                updateSnowflakeCount();
            });

            setTimeout(() => {
                if (document.body.contains(snowflake)) {
                    snowflake.remove();
                    snowflakesCount--;
                    updateSnowflakeCount();
                }
            }, parseFloat(snowflake.style.animationDuration) * 1000);
        }, 500);
    }

    function removeSnowEffect() {
        if (snowInterval) {
            clearInterval(snowInterval);
            snowInterval = null;
        }

        const snowflakes = document.querySelectorAll('.snowflake');
        snowflakes.forEach(snowflake => snowflake.remove());

        snowflakesCount = 0;
        updateSnowflakeCount();
    }

    function restoreSnowState() {
        if (snowActive) {
            createSnowEffect();
        }
        if (snowToggle) {
            snowToggle.checked = snowActive;
        }
    }

    function checkDecember() {
        const today = new Date();
        const isDecember = today.getMonth() === 11;

        if (monthBadge) {
            monthBadge.textContent = isDecember ? 'Diciembre Activo' : 'Diciembre Inactivo';
            monthBadge.classList.toggle('active', isDecember);
        }

        if (isDecember && !snowActive) {
            localStorage.setItem('snowActive', 'true');
            restoreSnowState();
        } else if (!isDecember && snowActive) {
            localStorage.setItem('snowActive', 'false');
            removeSnowEffect();
        }
    }

    if (snowToggle) {
        snowToggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('snowActive', isChecked ? 'true' : 'false');
            if (isChecked) {
                createSnowEffect();
            } else {
                removeSnowEffect();
            }
        });
    }

    adjustMaxSnowflakes();
    restoreSnowState();
    checkDecember();
    window.addEventListener('resize', adjustMaxSnowflakes);
    window.addEventListener('beforeunload', removeSnowEffect);
    setInterval(checkDecember, 60000);
});
