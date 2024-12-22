document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loggedIn") === "true") {
    const currentUser = localStorage.getItem("currentUser");
    if (bannedUsers.includes(currentUser)) {
      alert('Tu cuenta ha sido baneada.');
      logout();
    } else {
      document.querySelector(".overlay").style.display = "none";
      displayUserData(currentUser, localStorage.getItem("profilePic"));
    }
  } else {
    document.querySelector(".overlay").style.display = "flex";
    displayUserData("Usuario", localStorage.getItem("profilePic") || 
      'https://cdm-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg');
  }
});

const users = [
  { username: "Qnl0ZXM", password: "MTIxMTk4MjA4" },
  { username: "QXNyaW5jb24", password: "YXNpbGVnbmEyMDAy" },
  { username: "eWV5aXRv", password: "c2VzZQ" },
  { username: "eHlvcg", password: "ZWxtYXN0ZXIxNQ" },
  { username: "cm91c3NodWFw", password: "bGFub2NoZQ" },
  { username: "VmVsYXpxdWV6", password: "MTIvMDMvMjAxMg" },
  { username: "SWFudXd1", password: "MTIvMDMvMjAxMg" },
  { username: "QWxlamFuZHJvIE1lbmRvemE", password: "YWxlamFuZHJvMjAwMg" },
  { username: "U2h1bGxr", password: "SmhkdGEwMUA" },
  { username: "Q2hpemFYWFZJSQ", password: "MTIzNDU2Nzg5QWE" },
  { username: "VGVzdA", password: "VGVzdA" },
  { username: "QWxwZWRv", password: "d2FhdGFhMDgwOTA3" },
  { username: "U2FudGlubw", password: "VG90b3JvMTExMTA5" },
  { username: "SmVhbiBQYXRyaWNpbw", password: "TGlmZWxpbmU3MjI" },
  { username: "Vmlubnk", password: "dmlhbmV5bG9w" }
];

let bannedUsers = ["Test"];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => atob(u.username) === username && atob(u.password) === password);

  if (user) {
    const decodedUsername = atob(user.username);
    
    if (bannedUsers.includes(decodedUsername)) {
      alert('Este usuario está baneado.');
    } else {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", decodedUsername);
      closePopup();
      const profilePic = localStorage.getItem("profilePic") || 
        'https://cdm-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
      displayUserData(decodedUsername, profilePic);
    }
  } else {
    alert('Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.');
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  document.querySelector(".overlay").style.display = "flex";
  displayUserData("Usuario", localStorage.getItem("profilePic") || 
    'https://cdm-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg');
}

function closePopup() {
  document.querySelector('.overlay').style.display = 'none';
}

function displayUserData(username, profilePic) {
  const userContainer = document.getElementById('userContainer');
  userContainer.innerHTML = '';

  const userInfoContainer = document.createElement('div');
  userInfoContainer.style.display = 'flex';
  userInfoContainer.style.alignItems = 'center';

  const img = document.createElement('img');
  img.src = profilePic;
  img.alt = 'Foto de perfil';
  img.style.borderRadius = '50%';
  img.style.width = '50px';
  img.style.height = '50px';
  img.style.marginRight = '10px';
  img.style.border = '1.5px solid #CCCCCC';

  const span = document.createElement('span');
  span.textContent = username;
  span.style.display = 'flex';
  span.style.alignItems = 'center'; 
  
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
    verifiedIcon.style.marginTop = '6px'; 
    verifiedIcon.style.marginBottom = '0'; 
    span.appendChild(verifiedIcon);
  }

  userInfoContainer.appendChild(img);
  userInfoContainer.appendChild(span);

  userContainer.appendChild(userInfoContainer);

  img.onclick = span.onclick = chooseProfilePicture;
  }
