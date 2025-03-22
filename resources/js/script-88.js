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

let isRepeatEnabled = false;

const repeatButton = document.createElement('button');
repeatButton.id = 'mini-repeat-button';
repeatButton.className = 'mini-control-button';
repeatButton.innerHTML = '<i class="fas fa-sync"></i>';

document.addEventListener('DOMContentLoaded', function() {
    const playerControls = document.querySelector('.mini-player-controls');
    if (playerControls) {
        playerControls.appendChild(repeatButton);
    } else {

        nextButton.parentNode.insertBefore(repeatButton, nextButton.nextSibling);
    }
});

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

function toggleRepeat() {
    isRepeatEnabled = !isRepeatEnabled;
    
    if (isRepeatEnabled) {

        repeatButton.classList.add('active');
    } else {

        repeatButton.classList.remove('active');
    }
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

repeatButton.addEventListener('click', toggleRepeat);

audioPlayer.addEventListener('timeupdate', updateProgress);

audioPlayer.addEventListener('ended', function() {
    if (isRepeatEnabled) {

        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {

        currentSongIndex++;

        if (currentSongIndex >= songItems.length) {
            currentSongIndex = 0;
        }

        const nextSongItem = songItems[currentSongIndex];

        const nextSongFile = nextSongItem.getAttribute('data-song');
        const nextSongTitle = nextSongItem.getAttribute('data-title');
        const nextSongArtist = nextSongItem.getAttribute('data-artist');
        const nextSongCover = nextSongItem.getAttribute('data-cover');

        miniSongTitle.textContent = nextSongTitle;
        miniSongArtist.innerHTML = `<i class="fas fa-user"></i>${nextSongArtist}`;
        miniAlbumArt.src = nextSongCover;

        audioPlayer.src = nextSongFile;

        audioPlayer.play();
        isPlaying = true;
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        miniPlayer.classList.add('active');
    }
});

document.querySelector('.progress-container').addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
});

prevButton.addEventListener('click', function() {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songItems.length - 1; 
    }

    const prevSongItem = songItems[currentSongIndex];

    const prevSongFile = prevSongItem.getAttribute('data-song');
    const prevSongTitle = prevSongItem.getAttribute('data-title');
    const prevSongArtist = prevSongItem.getAttribute('data-artist');
    const prevSongCover = prevSongItem.getAttribute('data-cover');

    miniSongTitle.textContent = prevSongTitle;
    miniSongArtist.innerHTML = `<i class="fas fa-user"></i>${prevSongArtist}`;
    miniAlbumArt.src = prevSongCover;

    audioPlayer.src = prevSongFile;

    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    miniPlayer.classList.add('active');
});

nextButton.addEventListener('click', function() {
    currentSongIndex++;

    if (currentSongIndex >= songItems.length) {
        currentSongIndex = 0; 
    }

    const nextSongItem = songItems[currentSongIndex];

    const nextSongFile = nextSongItem.getAttribute('data-song');
    const nextSongTitle = nextSongItem.getAttribute('data-title');
    const nextSongArtist = nextSongItem.getAttribute('data-artist');
    const nextSongCover = nextSongItem.getAttribute('data-cover');

    miniSongTitle.textContent = nextSongTitle;
    miniSongArtist.innerHTML = `<i class="fas fa-user"></i>${nextSongArtist}`;
    miniAlbumArt.src = nextSongCover;

    audioPlayer.src = nextSongFile;

    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    miniPlayer.classList.add('active');
});

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
