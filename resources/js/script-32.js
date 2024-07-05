    const image = document.querySelector('img');
    const textOverlay = document.querySelector('.text-overlay');

    function toggleImage() {
      image.classList.toggle('enlarge'); 
      textOverlay.classList.toggle('show');
    }

    image.addEventListener('click', toggleImage);

    textOverlay.classList.add('show');
