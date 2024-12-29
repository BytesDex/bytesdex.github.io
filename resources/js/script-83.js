document.addEventListener("DOMContentLoaded", function () {
    const currentUser = localStorage.getItem("currentUser") || "Usuario"; 
    const savedProfilePic = localStorage.getItem('profilePic') || 
        'https://cdn-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg'; 

    if (localStorage.getItem("loggedIn") === "true") {
        if (bannedUsers.includes(currentUser)) {
            alert('Tu cuenta ha sido baneada.');
            logout();
        } else {
            displayUserData(currentUser, savedProfilePic);
        }
    } else {
        displayUserData("Usuario", savedProfilePic);
    }
});

const bannedUsers = [""];

function displayUserData(username, profilePic) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';  

    const img = document.createElement('img');
    img.src = profilePic;
    img.alt = 'Foto de perfil';
    img.style.borderRadius = '50%';
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.marginBottom = '10px';
    img.style.cursor = 'pointer';
    img.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8)'; 
    
    const span = document.createElement('span');
    span.textContent = username;
    span.style.fontSize = '18px';
    span.style.fontWeight = 'bold';
    span.style.display = 'block';
    span.style.textAlign = 'center';

    const verifiedUsers = ["Bytes", "Test"];
    if (verifiedUsers.includes(username)) {
        const verifiedIcon = document.createElement('span');
        verifiedIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
          <g fill="none" stroke-linejoin="round" stroke-width="4">
          <path fill="#2f88ff" stroke="#rgba(0, 0, 0, 0.5)" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" />
          <path stroke="#fff" stroke-linecap="round" d="M16 24L22 30L34 18" />
        </g>
        </svg>`;
        verifiedIcon.style.marginLeft = '5px';
        verifiedIcon.style.verticalAlign = 'middle';  
        verifiedIcon.style.display = 'inline-block';  
        verifiedIcon.style.marginTop = '2px';   
        span.appendChild(verifiedIcon);
    }

    userContainer.appendChild(img);
    userContainer.appendChild(span);

    img.onclick = zoomProfilePic;
}

function chooseProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profilePic = e.target.result;
                localStorage.setItem('profilePic', profilePic);
                displayUserData(localStorage.getItem('currentUser') || "Usuario", profilePic);
            };
            reader.readAsDataURL(file); 
        }
    });

    input.click();  
}

function zoomProfilePic() {
    const imgSrc = localStorage.getItem('profilePic') || 
        'https://cdn-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
    const zoomedContainer = document.getElementById("zoomedImgContainer");
    document.getElementById("zoomedImg").src = imgSrc;
    zoomedContainer.style.display = "flex";
}
    
function closeZoom() {
    document.getElementById("zoomedImgContainer").style.display = "none";
}
    
function login(username) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", username);
    displayUserData(username, localStorage.getItem('profilePic') || 
        'https://cdn-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg');
}
    
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("profilePic");
    displayUserData("Usuario", 
        'https://cdn-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg');
}  
