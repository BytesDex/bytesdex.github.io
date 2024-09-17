        document.addEventListener('DOMContentLoaded', loadLoans);

        function addLoan() {
            const name = document.getElementById('name').value;
            let amount = document.getElementById('amount').value;

            if (name === '' || amount === '') {
                alert('Por favor, complete todos los campos');
                return;
            }

            amount = formatNumber(amount);

            const date = new Date();
            const loan = {
                name: name,
                amount: amount,
                date: date.toLocaleDateString(),
                time: date.toLocaleTimeString()
            };

            let loans = JSON.parse(localStorage.getItem('loans')) || [];
            loans.push(loan);
            localStorage.setItem('loans', JSON.stringify(loans));

            document.getElementById('name').value = '';
            document.getElementById('amount').value = '';

            displayLoan(loan);
        }

        function loadLoans() {
            const loans = JSON.parse(localStorage.getItem('loans')) || [];
            loans.forEach(loan => displayLoan(loan));
        }

        function displayLoan(loan) {
            const loanList = document.getElementById('loanList');
            const loanItem = document.createElement('div');
            loanItem.classList.add('loan-item');

            loanItem.innerHTML = `
                <strong>${loan.name}</strong><br>
                Prestó: Q${loan.amount}<br>
                <span>${loan.date} a las ${loan.time}</span>
                <button class="delete-btn" onclick="deleteLoan(this, '${loan.name}', '${loan.amount}')">Eliminar</button>
            `;

            loanList.appendChild(loanItem);
        }

        function deleteLoan(button, name, amount) {
            const loanItem = button.parentElement;
            
            let loans = JSON.parse(localStorage.getItem('loans')) || [];
            loans = loans.filter(loan => !(loan.name === name && loan.amount === amount));
            localStorage.setItem('loans', JSON.stringify(loans));

            loanItem.remove();
        }

        function formatNumber(number) {
            return Number(number).toLocaleString('es-GT');
        }
