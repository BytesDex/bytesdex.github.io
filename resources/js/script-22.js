    const contraseñaCorrecta = '4CAF50';

    const videos = [
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203417537229099008/twittervid.com_ec971e.mp4?ex=65d104eb&is=65be8feb&hm=1171561dfd6323540f738b762f8ef2cd5f3ffcffcc9df4c14ca7b65b2b6de9c9&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203418855259512952/twittervid.com_b6811d.mp4?ex=65d10625&is=65be9125&hm=a0eb979f5f22aa7e6cbe09cb76e4686b76c81ce5405a722daa289d49b7d076a6&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203418855909892136/twittervid.com_65cb4a.mp4?ex=65d10625&is=65be9125&hm=000d0ce24cd75c64f0c0ad5089e5394b2147d1a88bd2ed50da5d4c3a38f9d35d&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203419708750168104/twittervid.com_55f31d.mp4?ex=65d106f1&is=65be91f1&hm=5780ee9e189939703373a3bc74317ebee3447c46fe9243a28b6b35cc3265bd5b&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203419709471727626/twittervid.com_d42bcf.mp4?ex=65d106f1&is=65be91f1&hm=67730a67a0ab4ec63fb025a0090c1a166cb8595cd3da25849d3827b5ad5d6683&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203421194884481074/twittervid.com_fd2b14.mp4?ex=65d10853&is=65be9353&hm=cf5d1392238e799609b32de973dd9d960e35152c688a57da8321b54694406a36&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203421196130058240/twittervid.com_4a2339.mp4?ex=65d10853&is=65be9353&hm=c252b1b37f267fa55bc5514006a6935c81efc0da997b622051b6db51ecdea732&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203422627675504700/twittervid.com_6c3686.mp4?ex=65d109a8&is=65be94a8&hm=d11d3f2cf56983f55b480bd4f239fae2041811ce2626e1ecc552353b81248893&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1206116442181992560/twittervid.com_995840.mp4?ex=65dad678&is=65c86178&hm=e2cf31558cfa6d6d29dce795dadd51f810bd06971fd84103cf80928da4f0f41b&' },
    { title: 'Werensita', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1206116442970267688/twittervid.com_41764d.mp4?ex=65dad678&is=65c86178&hm=7d498ac1baab0d5849de864a2b3d5244aeb71f9ec30894aabc25aaea33197486&' },
    { title: 'Hannapunzell', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203417538629730344/twittervid.com_fe27af.mp4?ex=65d104eb&is=65be8feb&hm=9dd3e01108dfb10dd9109c7c2808e4f81a66f9b81dc9b911912e7e7d12872541&' },
    { title: 'Hannapunzell', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1203422627255947274/twittervid.com_d0ee84.mp4?ex=65d109a8&is=65be94a8&hm=39a49c64dc1e482a5f1bbe0fd46b15fbffe169dd660554d3d2ad0682aee14653&' },  
    { title: 'Supuesta Domelipa', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1207168671651471390/ssstwitter.com_1706026235433.mp4?ex=65deaa6f&is=65cc356f&hm=d48e0de4945602d6b83e035752c6a72a47f8aac13eb4136d9916c9467e23569b&' },
    { title: 'Chingu Amiga Descuido', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1207168672481939516/chingu-amiga.mp4?ex=65deaa6f&is=65cc356f&hm=f09b8b450030fc535e0c0cebb6629de0796565bb2e8f281db06656cd00d91287&' },
    { title: 'Aura Cristina Geithner', src: 'https://cdn.discordapp.com/attachments/1130375877490909184/1207168672074833940/ssstik.io_1705865878951.mp4?ex=65deaa6f&is=65cc356f&hm=4ee70636aa225e6aee20675b0f1826e9df3ee1c238f96c21ad35e5f483306c40&' },
    ];

    function verificarContraseña() {
      const contraseñaIngresada = document.getElementById('password').value;

      if (contraseñaIngresada === contraseñaCorrecta) {
        mostrarBiblioteca();
        
        localStorage.setItem('videoLibraryPassword', contraseñaCorrecta);
      } else {
        alert('Contraseña incorrecta. Intenta de nuevo.');
      }
    }

    function mostrarBiblioteca() {
      const passwordModal = document.getElementById('passwordModal');
      const videoContainer = document.getElementById('videoContainer');

      passwordModal.style.display = 'none';
      videoContainer.style.display = 'flex';

      agregarVideos();
    }

    window.onload = function () {
      const storedPassword = localStorage.getItem('videoLibraryPassword');

      if (storedPassword === contraseñaCorrecta) {
        mostrarBiblioteca();
      } else {
        const passwordModal = document.getElementById('passwordModal');
        passwordModal.style.display = 'block';
      }
    };

    function agregarVideos() {
      const videoContainer = document.getElementById('videoContainer');

      videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', true);
        videoElement.setAttribute('controlsList', 'nodownload'); 
        videoElement.setAttribute('src', video.src);

        const titleElement = document.createElement('p');
        titleElement.textContent = video.title;

        videoCard.appendChild(videoElement);
        videoCard.appendChild(titleElement);

        videoContainer.appendChild(videoCard);
      });
    }
