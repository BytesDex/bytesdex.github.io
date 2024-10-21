document.addEventListener('DOMContentLoaded', function () {
  const savedProfilePic = localStorage.getItem('profilePic') || 
    'https://cdm-bytesdex.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';

  displayUserData(localStorage.getItem('currentUser') || "Usuario", savedProfilePic);
});

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
