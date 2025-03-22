const mainPage = document.getElementById('main-page');
        const artistDetail = document.getElementById('artist-detail');
        const miniPlayer = document.getElementById('mini-player');
        const audioPlayer = document.getElementById('audio-player');
        const playButton = document.getElementById('mini-play-button');
        const prevButton = document.getElementById('mini-prev-button');
        const nextButton = document.getElementById('mini-next-button');
        const progressBar = document.getElementById('progress-bar');
        const miniSongTitle = document.getElementById('mini-song-title');
        const miniSongArtist = document.getElementById('mini-song-artist');
        const miniAlbumArt = document.getElementById('mini-album-art');
        
        let isPlaying = false;
        let currentSongIndex = 0;
        
        function showArtistDetail() {
            mainPage.style.display = 'none';
            artistDetail.classList.add('active');
        }
        
        function goBack() {
            mainPage.style.display = 'block';
            artistDetail.classList.remove('active');
        }
        
        function togglePlay() {
            if (isPlaying) {
                audioPlayer.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audioPlayer.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        }
        
        function updateProgress() {
            const { currentTime, duration } = audioPlayer;
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
        
        function showAndPlaySong(event) {
            const songItem = event.currentTarget;
            const songFile = songItem.getAttribute('data-song');
            const songTitle = songItem.getAttribute('data-title');
            const songArtist = songItem.getAttribute('data-artist');
            const songCover = songItem.getAttribute('data-cover');
            
            miniSongTitle.textContent = songTitle;
            miniSongArtist.innerHTML = `<i class="fas fa-user"></i>${songArtist}`;
            miniAlbumArt.src = songCover;
            
            audioPlayer.src = songFile;
            miniPlayer.classList.add('active');
            
            audioPlayer.addEventListener('loadedmetadata', function() {
                audioPlayer.play();
                isPlaying = true;
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }, { once: true });
        }
        
        const artistCards = document.querySelectorAll('.playlist-card');
        artistCards.forEach(card => {
            card.addEventListener('click', showArtistDetail);
        });
        
        document.getElementById('back-button').addEventListener('click', goBack);
        
        const songItems = document.querySelectorAll('.song-item');
        songItems.forEach(item => {
            item.addEventListener('click', showAndPlaySong);
        });
        
        playButton.addEventListener('click', togglePlay);
        
        audioPlayer.addEventListener('timeupdate', updateProgress);
        
        audioPlayer.addEventListener('ended', function() {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
            progressBar.style.width = '0%';
        });
        
        document.querySelector('.progress-container').addEventListener('click', function(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audioPlayer.duration;
            
            audioPlayer.currentTime = (clickX / width) * duration;
        });
        
        prevButton.addEventListener('click', function() {
            audioPlayer.currentTime = 0;
        });
        
        nextButton.addEventListener('click', function() {
            audioPlayer.currentTime = audioPlayer.duration;
        });
