function filtrarFunciones() {
            const input = document.querySelector('.search-input').value.toLowerCase();
            const actions = document.querySelectorAll('.action');
            let found = false;

            actions.forEach(action => {
                const text = action.textContent.toLowerCase();
                action.style.display = text.includes(input) ? 'block' : 'none';
                if (text.includes(input)) found = true;
            });

            document.getElementById('no-results').style.display = found ? 'none' : 'block';
}
