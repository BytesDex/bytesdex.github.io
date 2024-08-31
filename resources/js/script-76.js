        function initializeCounter() {
            let savedCount = localStorage.getItem('sugarCount');
            let lastDate = localStorage.getItem('lastDate');
            let today = new Date().toISOString().split('T')[0];

            if (savedCount === null) {
                savedCount = 0;
            }

            if (lastDate !== today) {
                
                savedCount = 0;
                localStorage.setItem('sugarCount', savedCount);
            }

            document.getElementById('sugarCounter').innerText = savedCount;
        }

        function increment() {
            let currentCount = parseInt(document.getElementById('sugarCounter').innerText);
            currentCount++;
            document.getElementById('sugarCounter').innerText = currentCount;
            localStorage.setItem('sugarCount', currentCount);
            localStorage.setItem('lastDate', new Date().toISOString().split('T')[0]);

            showConfetti();
            document.getElementById('status').innerText = '¡Sigue así!';
            document.querySelector('.add-day').classList.add('animate-bounce');
            setTimeout(() => {
                document.querySelector('.add-day').classList.remove('animate-bounce');
            }, 600);
        }

        function consumeSugar() {
            localStorage.removeItem('sugarCount');
            localStorage.removeItem('lastDate');
            document.getElementById('sugarCounter').innerText = 0;
            document.getElementById('status').innerText = '¡Vuelve a empezar!';
            document.getElementById('status').classList.add('animate-fade');
            setTimeout(() => {
                document.getElementById('status').classList.remove('animate-fade');
            }, 500);
            showConfetti();
            document.querySelector('.consume').classList.add('animate-shake');
            setTimeout(() => {
                document.querySelector('.consume').classList.remove('animate-shake');
            }, 600);
        }

        function showConfetti() {
            const confettiContainer = document.getElementById('confetti');
            confettiContainer.innerHTML = '';
            const colors = ['#e67e22', '#d35400', '#c0392b', '#e74c3c'];
            const numberOfPieces = 150;

            for (let i = 0; i < numberOfPieces; i++) {
                const confettiPiece = document.createElement('div');
                confettiPiece.className = 'confetti-piece';
                confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
                confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
                confettiPiece.style.height = `${Math.random() * 10 + 5}px`;
                confettiPiece.style.top = `${Math.random() * 100}%`;
                confettiPiece.style.left = `${Math.random() * 100}%`;
                confettiPiece.style.animation = `confetti-fall ${Math.random() * 2 + 3}s ease-out forwards`;

                confettiContainer.appendChild(confettiPiece);
            }

            confettiContainer.style.display = 'block';

            setTimeout(() => {
                confettiContainer.style.display = 'none';
            }, 3000);
        }

        window.onload = initializeCounter;
