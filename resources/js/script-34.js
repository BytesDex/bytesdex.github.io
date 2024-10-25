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
  { username: "Q2hpemFYWFZJSQ", password: "MTIzNDU2Nzg5QWE" },
  { username: "VGVzdA", password: "VGVzdA" },
  { username: "QWxwZWRv", password: "d2FhdGFhMDgwOTA3" },
  { username: "U2FudGlubw", password: "VG90b3JvMTExMTA5" },
  { username: "SmVhbiBQYXRyaWNpbw", password: "TGlmZWxpbmU3MjI" },
  { username: "Vmlubnk", password: "dmlhbmV5bG9w" }
];

let bannedUsers = [""];

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

  userContainer.appendChild(img);
  userContainer.appendChild(span);

  img.onclick = span.onclick = chooseProfilePicture;
}
