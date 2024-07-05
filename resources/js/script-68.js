        const searchInput = document.getElementById('searchInput');
        const textureItems = Array.from(document.querySelectorAll('.texture-item'));
        const textureContainer = document.getElementById('textureContainer');
        const searchAlert = document.getElementById('searchAlert');
        let timeoutId = null;

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.trim().toLowerCase();

            clearTimeout(timeoutId);

            timeoutId = setTimeout(function() {
                textureContainer.classList.add('animating');

                let itemsToShow = 0;

                textureItems.forEach(function(item) {
                    const itemName = item.querySelector('.texture-name').textContent.toLowerCase();
                    if (itemName.includes(searchTerm)) {
                        item.style.display = 'block';
                        itemsToShow++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                if (itemsToShow === 0) {
                    searchAlert.style.display = 'block';
                } else {
                    searchAlert.style.display = 'none';
                }

                setTimeout(function() {
                    textureContainer.classList.remove('animating');
                }, 500); 
            }, 300); 
        });
