function displayUserData(username, profilePic) {
  const userContainer = document.getElementById('userContainer');
  userContainer.innerHTML = ''; 

  const userInfoContainer = document.createElement('div');
  userInfoContainer.id = 'userInfoContainer';
  userInfoContainer.style.display = 'flex';
  userInfoContainer.style.alignItems = 'center';

  const img = document.createElement('img');
  img.src = profilePic;
  img.alt = 'Foto de perfil';
  img.style.borderRadius = '50%';
  img.style.width = '50px';
  img.style.height = '50px';
  img.style.marginRight = '10px';
  img.style.cursor = 'pointer';
  img.style.boxShadow = '0 0 8px 2px rgba(0, 0, 0, 0.4)';
  img.onclick = function() {
  window.location.href = './perfil';
  };

  const span = document.createElement('span');
  span.textContent = username;
  span.style.cursor = 'pointer'; 
  span.style.display = 'flex';
  span.style.alignItems = 'center';
  span.onclick = function() {
    window.location.href = './perfil'; 
  };

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
  }
