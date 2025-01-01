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

        let snowflakesCount = 0;
        let snowInterval = null;
        const snowToggle = document.getElementById('snowToggle');
        const monthBadge = document.getElementById('monthBadge');
        const snowflakeCountDisplay = document.getElementById('snowflakeCount');

        if (localStorage.getItem('snowActive') === 'true') {
            snowToggle.checked = true;
            createSnowEffect();
        }

        function updateSnowflakeCount() {
            snowflakeCountDisplay.textContent = `Copos activos: ${snowflakesCount}`;
        }

        function createSnowEffect() {
            if (snowInterval) return;

            snowInterval = setInterval(() => {
                if (snowflakesCount >= 50) {
                    return;
                }

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

        function checkDecember() {
            const today = new Date();
            const isDecember = today.getMonth() === 11;

            monthBadge.textContent = isDecember ? 'Diciembre Activo' : 'Diciembre Inactivo';
            monthBadge.classList.toggle('active', isDecember);

            if (isDecember && !snowToggle.checked) {
                createSnowEffect();
            } else if (!isDecember && !snowToggle.checked) {
                removeSnowEffect();
            }
        }

        checkDecember();
        setInterval(checkDecember, 60000);

        snowToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                createSnowEffect();
                localStorage.setItem('snowActive', 'true');
            } else {
                removeSnowEffect();
                localStorage.setItem('snowActive', 'false');
            }
        });
