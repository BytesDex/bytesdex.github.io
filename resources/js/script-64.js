        let points = 0;
        let purchasedItems = [];

        function loadPurchasedItems() {
            const savedItems = localStorage.getItem('purchasedItems');
            if (savedItems) {
                purchasedItems = JSON.parse(savedItems);
                purchasedItems.forEach(item => {
                    if (item === 'colorButton') {
                        const index = item.indexOf('_');
                        const color1 = item.substring(index + 1, index + 8);
                        const color2 = item.substring(index + 10, index + 17);
                        changeEggColor(color1, color2);
                    } else if (item === 'sizeButton') {
                        const index = item.indexOf('_');
                        const width = item.substring(index + 1, index + 4);
                        const height = item.substring(index + 6, index + 9);
                        changeEggSize(width, height);
                    } else if (item === 'customButton') {
                        customizeEgg();
                    } else if (item.startsWith('decorationButton')) {
                        const decoration = item.split('_')[1];
                        addDecoration(decoration);
                    }
                });
            }
        }

        loadPurchasedItems();

        function incrementPoints() {
            points++;
            document.getElementById('pointCount').textContent = points;
            updateStoreButtons();
            animateEgg();
        }

        function toggleStore() {
            const store = document.querySelector('.store');
            store.style.display = store.style.display === 'none' ? 'flex' : 'none';
        }

        function updateStoreButtons() {
            const colorButtons = document.querySelectorAll('.colorButton');
            colorButtons.forEach(button => {
                button.disabled = points < 10;
            });

            const sizeButtons = document.querySelectorAll('.sizeButton');
            sizeButtons.forEach(button => {
                button.disabled = points < 10 && button.textContent.includes('Original');
            });

            const customButton = document.getElementById('customButton');
            customButton.disabled = points < 999;

            const decorationButtons = document.querySelectorAll('.decorationButton');
            decorationButtons.forEach(button => {
                const cost = parseInt(button.textContent.match(/\d+/)[0]);
                button.disabled = points < cost;
            });
        }

        function changeEggColor(color1, color2) {
            if (points >= 10) {
                points -= 10;
                document.getElementById('pointCount').textContent = points;
                document.querySelector('.egg').style.background = `linear-gradient(to bottom, ${color1} 0%, ${color2} 100%)`;
                purchasedItems.push('colorButton_' + color1 + '_' + color2);
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                updateStoreButtons();
            }
        }

        function changeEggSize(width, height) {
            if (points >= 10) {
                points -= 10;
                document.getElementById('pointCount').textContent = points;
                document.querySelector('.egg').style.width = width + 'px';
                document.querySelector('.egg').style.height = height + 'px';
                purchasedItems.push('sizeButton_' + width + '_' + height);
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                updateStoreButtons();
            }
        }

        function customizeEgg() {
            const fileInput = document.getElementById('imageUpload');
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    document.querySelector('.egg').style.backgroundImage = `url(${imageUrl})`;
                    purchasedItems.push('customButton');
                    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                    updateStoreButtons();
                };
                reader.readAsDataURL(file);
            }
        }

        function buyCustomization() {
            if (points >= 999) {
                points -= 999;
                document.getElementById('pointCount').textContent = points;
                const fileInput = document.getElementById('imageUpload');
                fileInput.disabled = false;
                purchasedItems.push('customButton');
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                updateStoreButtons();
            }
        }

        function addDecoration(decoration) {
            const cost = parseInt(event.target.textContent.match(/\d+/)[0]);
            if (points >= cost) {
                points -= cost;
                document.getElementById('pointCount').textContent = points;
                const egg = document.querySelector('.egg');
                egg.innerHTML += `<span style="position: absolute; font-size: 24px;">${decoration}</span>`;
                purchasedItems.push(`decorationButton_${decoration}`);
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                updateStoreButtons();
            }
        }

        function animateEgg() {
            const egg = document.querySelector('.egg');
            egg.style.transform = 'scale(0.95)';
            setTimeout(() => {
                egg.style.transform = 'scale(1)';
            }, 100);
        }

        window.onload = () => {
            toggleStore();
        };
