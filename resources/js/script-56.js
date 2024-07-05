        const searchInput = document.getElementById('searchInput');
        const playlistItems = document.querySelectorAll('.playlist-item'); 

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            
            playlistItems.forEach(function(item) {
                const itemName = item.textContent.toLowerCase();
                if (itemName.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }); 

        function toggleInfo(infoId) {
            const info = document.getElementById(infoId);
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block';
            } else {
                info.style.display = 'none';
            }
        } 

        const songs = document.querySelectorAll('.playlist-item');
        songs.forEach(function(song) {
            song.addEventListener('click', function() {
                const audioId = this.getAttribute('id').replace('song', 'audio');
                const audio = document.getElementById(audioId);
                audio.currentTime += 0; 
            });
        }); 

        const audio1 = document.getElementById('audio1');
        const audio2 = document.getElementById('audio2');
        const audio3 = document.getElementById('audio3');
        const audio4 = document.getElementById('audio4');
        const audio5 = document.getElementById('audio5');
        const audio6 = document.getElementById('audio6');
        const audio7 = document.getElementById('audio7');
        const audio8 = document.getElementById('audio8');
        const audio9 = document.getElementById('audio9');
        audio1.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio2.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
       audio3.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio4.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio5.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio6.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio7.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio8.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        audio9.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
