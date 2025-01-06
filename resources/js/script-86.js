function jK7f9n(xZ3qV5) {
    return btoa(xZ3qV5);
}

function lF2g1r(kY4mP8) {
    return atob(kY4mP8); 
}

let hR6w2b = jK7f9n("Q9J4B2X7M1");  

const iM9zR4 = {
    tY7vP3: [
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20241221_150608.jpg') },
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20241223_211817.jpg') },
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20241230_000249.jpg') },
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20241231_145952.jpg') },
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20250101_000815.jpg') },
        { vA1wX: 'image', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/imagen/20250105_003628.jpg') },
    ],
    pX9oB6: [
        { vA1wX: 'video', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/video/6xaOH3nB_720p.mp4') },
        { vA1wX: 'video', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/video/d4FJ7qcy_720p.mp4') },
        { vA1wX: 'video', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/video/kySt2SGw_720p.mp4') },
        { vA1wX: 'video', jH2nZ: jK7f9n('https://cdm-bytesdex.github.io/resources/multimedia/video/VTDqqWWg_720p.mp4') },
    ]
};

function uT6wB3() {
    const eN7p9X = document.getElementById("password").value;
    const wJ4tY2 = document.getElementById("errorMsg");

    if (eN7p9X === "") {
        wJ4tY2.style.display = "none";  
    } else if (eN7p9X === lF2g1r(hR6w2b)) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("gallerySection").style.display = "block";
        wJ4tY2.style.display = "none";  
        switchTab('todo');
    } else {
        wJ4tY2.style.display = "block";  
    }
}

function switchTab(mP2zG1) {
    const iX4uR6 = document.getElementById("sectionTitle");
    const sZ7fJ3 = document.getElementById("mediaGrid");

    let bY8hK2 = [];

    if (mP2zG1 === 'fotos') {
        iX4uR6.textContent = "Contenido Protegido";
        iX4uR6.style.color = "#A9A9A9"; 
        bY8hK2 = iM9zR4.tY7vP3;
    } else if (mP2zG1 === 'videos') {
        iX4uR6.textContent = "Contenido Protegido";
        iX4uR6.style.color = "#A9A9A9"; 
        bY8hK2 = iM9zR4.pX9oB6;
    } else {
        iX4uR6.textContent = "Contenido Protegido";
        iX4uR6.style.color = "#A9A9A9";  
        bY8hK2 = [...iM9zR4.tY7vP3, ...iM9zR4.pX9oB6];
    }

    sZ7fJ3.innerHTML = "";

    bY8hK2.forEach(item => {
        const kN1yD8 = document.createElement('div');
        kN1yD8.classList.add('media-item');

        const pF3mX6 = lF2g1r(item.jH2nZ);

        if (item.vA1wX === 'image') {
            const tR5bN2 = document.createElement('img');
            tR5bN2.src = pF3mX6;
            tR5bN2.alt = 'Media';
            tR5bN2.onclick = () => openModal(pF3mX6);
            tR5bN2.setAttribute('draggable', 'false');
            tR5bN2.classList.add('zoomable');
            kN1yD8.appendChild(tR5bN2);
        } else if (item.vA1wX === 'video') {
            const vM2gQ9 = document.createElement('video');
            vM2gQ9.src = pF3mX6;
            vM2gQ9.controls = true;
            vM2gQ9.innerHTML = `<source src="${pF3mX6}" type="video/mp4">`;

            vM2gQ9.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });

            vM2gQ9.controlsList = "nodownload";
            kN1yD8.appendChild(vM2gQ9);
        }

        sZ7fJ3.appendChild(kN1yD8);
    });

    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tabElement => tabElement.classList.remove('active'));
    document.querySelector(`.nav-tab[onclick="switchTab('${mP2zG1}')"]`).classList.add('active');
}

function openModal(wT8rD2) {
    const dB5yX8 = document.getElementById('imageModal');
    const uC9wF4 = document.getElementById('modalImage');
    const pZ7nK2 = document.getElementById('caption');

    uC9wF4.style.border = "none";
    uC9wF4.style.outline = "none";
    uC9wF4.style.WebkitTapHighlightColor = "rgba(0, 0, 0, 0)"; 

    uC9wF4.style.borderRadius = "8px"; 

    dB5yX8.style.display = "flex";
    uC9wF4.src = wT8rD2;
}

function closeModal() {
    const dB5yX8 = document.getElementById('imageModal');
    dB5yX8.style.display = "none";
}

function logout() {
    localStorage.removeItem('loggedIn');
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("gallerySection").style.display = "none";
}

window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("gallerySection").style.display = "block";
        switchTab('todo');
    } else {
        document.getElementById("loginSection").style.display = "block";
        document.getElementById("gallerySection").style.display = "none";
    }
};

function sM7tD9(iY5bG1) {
    hR6w2b = jK7f9n(iY5bG1);  
    localStorage.removeItem('loggedIn');
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("gallerySection").style.display = "none";
}

sM7tD9("H8XJ3K2A1Q");
