    document.addEventListener('DOMContentLoaded', function() {
    const mainPage = document.getElementById('main-page');
    const artistDetail = document.getElementById('artist-detail');
    const backButton = document.getElementById('back-button');
    const artistCover = document.getElementById('artist-cover');
    const artistProfile = document.getElementById('artist-profile');
    const artistName = document.getElementById('artist-name');
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
    let isRepeatEnabled = false;
    let activePlaylist = [];

    const repeatButton = document.createElement('button');
    repeatButton.id = 'mini-repeat-button';
    repeatButton.className = 'mini-control-button';
    repeatButton.innerHTML = '<i class="fas fa-sync"></i>';

    const playerControls = document.querySelector('.mini-player-controls');
    if (playerControls) {
        playerControls.appendChild(repeatButton);
    } else {
        nextButton.parentNode.insertBefore(repeatButton, nextButton.nextSibling);
    }

    const artistCards = document.querySelectorAll('.playlist-card');
    artistCards.forEach(card => {
        card.addEventListener('click', function() {
            const artistId = this.getAttribute('data-artist');

            document.querySelectorAll('.song-list').forEach(list => {
                list.style.display = 'none';
            });

            if (artistId === 'peso-pluma') {
                document.getElementById('peso-pluma-songs').style.display = 'block';
                artistCover.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Portada - Peso Pluma.jpg';
                artistProfile.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Peso Pluma.jpeg';
                artistName.textContent = 'Peso Pluma';
            } else if (artistId === 'oscar-maydon') {
                document.getElementById('oscar-maydon-songs').style.display = 'block';
                artistCover.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Portada - Oscar Maydon.jpg';
                artistProfile.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Oscar Maydon.jpeg';
                artistName.textContent = 'Oscar Maydon';
            } else if (artistId === 'ivan-cornejo') {
                document.getElementById('ivan-cornejo-songs').style.display = 'block';
                artistCover.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Portada - Ivan Cornejo.jpg';
                artistProfile.src = 'https://cdn-bytesdex.github.io/resources/multimedia/imagen/Ivan Cornejo.jpg';
                artistName.textContent = 'Ivan Cornejo';
            }

            mainPage.style.display = 'none';
            artistDetail.style.display = 'block';
        });
    });

    backButton.addEventListener('click', function() {
        artistDetail.style.display = 'none';
        mainPage.style.display = 'block';
    });

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

    function toggleRepeat() {
        isRepeatEnabled = !isRepeatEnabled;
        repeatButton.classList.toggle('active', isRepeatEnabled);
    }

    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    function setPlaylist(playlist, startIndex) {
        activePlaylist = Array.from(playlist);
        currentSongIndex = startIndex;
        playSong(activePlaylist[currentSongIndex]);
    }

    function playSong(songItem) {
        if (!songItem) return;

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

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: songTitle,
                    artist: songArtist,
                    album: 'Album Name', 
                    artwork: [
                        { src: songCover, sizes: '96x96', type: 'image/jpeg' },
                        { src: songCover, sizes: '128x128', type: 'image/jpeg' },
                        { src: songCover, sizes: '192x192', type: 'image/jpeg' }
                    ]
                });

                navigator.mediaSession.setActionHandler('play', () => audioPlayer.play());
                navigator.mediaSession.setActionHandler('pause', () => audioPlayer.pause());
                navigator.mediaSession.setActionHandler('nexttrack', nextSong); 
                navigator.mediaSession.setActionHandler('previoustrack', previousSong); 
            }
        }, { once: true });
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % activePlaylist.length;
        playSong(activePlaylist[currentSongIndex]);
    }

    function previousSong() {
        currentSongIndex = (currentSongIndex - 1 + activePlaylist.length) % activePlaylist.length;
        playSong(activePlaylist[currentSongIndex]);
    }

    document.querySelectorAll('.song-list').forEach(list => {
        list.addEventListener('click', function(event) {
            const clickedSong = event.target.closest('.song-item');
            if (!clickedSong) return;

            const playlist = this.querySelectorAll('.song-item');
            setPlaylist(playlist, Array.from(playlist).indexOf(clickedSong));
        });
    });

    playButton.addEventListener('click', togglePlay);
    repeatButton.addEventListener('click', toggleRepeat);
    audioPlayer.addEventListener('timeupdate', updateProgress);

    audioPlayer.addEventListener('ended', function() {
        if (isRepeatEnabled) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            currentSongIndex = (currentSongIndex + 1) % activePlaylist.length;
            playSong(activePlaylist[currentSongIndex]);
        }
    });

    document.querySelector('.progress-container').addEventListener('click', function(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    });

    prevButton.addEventListener('click', previousSong);  
    nextButton.addEventListener('click', nextSong);  

    const style = document.createElement('style');
    style.textContent = `
        #mini-repeat-button.active {
            color: #1DB954;
        }
        #mini-repeat-button.active:hover {
            background-color: rgba(29, 185, 84, 0.2);
        }
    `;
    document.head.appendChild(style);
});
