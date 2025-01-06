function jK7f9n(xZ3qV5) {
    return btoa(xZ3qV5);
}

function lF2g1r(kY4mP8) {
    return atob(kY4mP8); 
}

let hR6w2b = "UTlKNEIyWDdNMQ";

const iM9zR4 = {
    tY7vP3: [
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI0MTIyMV8xNTA2MDguanBn' },
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI0MTIyM18yMTE4MTcuanBn' },
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI0MTIzMF8wMDAyNDkuanBn' },
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI0MTIzMV8xNDU5NTIuanBn' },
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI1MDEwMV8wMDA4MTUuanBn' },
        { vA1wX: 'X2ltYWdlX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi8yMDI1MDEwNV8wMDM2MjguanBn' },
    ],
    pX9oB6: [
        { vA1wX: 'X3ZpZGVvX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL3ZpZGVvLzZ4YU9IM25CXzcyMHAubXA0' },
        { vA1wX: 'X3ZpZGVvX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL3ZpZGVvL2Q0Rko3cWN5XzcyMHAubXA0' },
        { vA1wX: 'X3ZpZGVvX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL3ZpZGVvL2t5U3QyU0d3XzcyMHAubXA0' },
        { vA1wX: 'X3ZpZGVvX2NvbnRlbnQ=', jH2nZ: 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL3ZpZGVvL1ZURHFxV1dnXzcyMHAubXA0' },
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

        if (lF2g1r(item.vA1wX) === '_image_content') { 
            const tR5bN2 = document.createElement('img');
            tR5bN2.src = pF3mX6;
            tR5bN2.alt = 'Media';
            tR5bN2.onclick = () => openModal(pF3mX6);
            tR5bN2.setAttribute('draggable', 'false');
            tR5bN2.classList.add('zoomable');
            kN1yD8.appendChild(tR5bN2);
        } else if (lF2g1r(item.vA1wX) === '_video_content') { 
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

    uC9wF4.src = wT8rD2;

    uC9wF4.onload = function() {
        uC9wF4.style.borderRadius = "8px"; 
    };

    dB5yX8.style.display = "flex";

    dB5yX8.onclick = function () {
        dB5yX8.style.display = "none";
    };
}
