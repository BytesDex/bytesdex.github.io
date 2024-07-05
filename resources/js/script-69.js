  const searchInput = document.getElementById('search');
  const cards = document.querySelectorAll('.user-card');
  const filterAllButton = document.getElementById('filter-all');
  const filterVerifiedButton = document.getElementById('filter-verified');
  const filterPendingButton = document.getElementById('filter-pending');
  const filterUnverifiedButton = document.getElementById('filter-unverified');
  const alertContainer = document.getElementById('alert-container');

  searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    let found = false;

    cards.forEach(card => {
      const userName = card.querySelector('.user-info h2').textContent.toLowerCase();
      if (userName.includes(searchTerm)) {
        card.style.display = 'flex';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (!found) {
      showNoResultsAlert('Usuario no encontrado.');
    } else {
      hideNoResultsAlert();
    }
  });

  function showNoResultsAlert(message) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert');
    alertElement.textContent = message;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertElement);
  }

  function hideNoResultsAlert() {
    alertContainer.innerHTML = ''; 
  }

  filterAllButton.addEventListener('click', function() {
    cards.forEach(card => {
      card.style.display = 'flex';
    });
    hideNoResultsAlert();
  });

  filterVerifiedButton.addEventListener('click', function() {
    const filteredCards = Array.from(cards).filter(card => {
      return card.querySelector('.verified-badge');
    });

    if (filteredCards.length === 0) {
      showNoResultsAlert('No hay usuarios verificados.');
    } else {
      hideNoResultsAlert();
    }

    cards.forEach(card => {
      card.style.display = 'none';
    });

    filteredCards.forEach(card => {
      card.style.display = 'flex';
    });
  });

  filterPendingButton.addEventListener('click', function() {
    const filteredCards = Array.from(cards).filter(card => {
      return card.querySelector('.pending-badge');
    });

    if (filteredCards.length === 0) {
      showNoResultsAlert('No hay usuarios pendientes.');
    } else {
      hideNoResultsAlert();
    }

    cards.forEach(card => {
      card.style.display = 'none';
    });

    filteredCards.forEach(card => {
      card.style.display = 'flex';
    });
  });

  filterUnverifiedButton.addEventListener('click', function() {
    const filteredCards = Array.from(cards).filter(card => {
      return card.querySelector('.unverified-badge');
    });

    if (filteredCards.length === 0) {
      showNoResultsAlert('No hay usuarios no verificados.');
    } else {
      hideNoResultsAlert();
    }

    cards.forEach(card => {
      card.style.display = 'none';
    });

    filteredCards.forEach(card => {
      card.style.display = 'flex';
    });
  });

  function showNoResultsAlert(message) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert');
    alertElement.textContent = message;
    alertContainer.innerHTML = ''; 
    alertContainer.appendChild(alertElement);
  }

  function hideNoResultsAlert() {
    alertContainer.innerHTML = '';
  }
