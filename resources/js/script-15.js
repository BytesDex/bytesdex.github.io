       function toggleMenu() {
            const menu = document.getElementById('dropdown-menu');
            menu.classList.toggle('show');
        }

        function redirectToPage(page) {
            window.location.href = page;
        }

        window.onclick = function (event) {
            const menu = document.getElementById('dropdown-menu');
            if (event.target !== menu && event.target !== document.querySelector('.menu-icon')) {
                menu.classList.remove('show');
            }
        }
