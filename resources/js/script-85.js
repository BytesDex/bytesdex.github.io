document.addEventListener("DOMContentLoaded", function () {
  const currentUser = localStorage.getItem("currentUser");
  updateGreeting(currentUser);
});

function updateGreeting(username) {
  const greeting = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  let greetingText = '';

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = 'Buenos días';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = 'Buenas tardes';
  } else {
    greetingText = 'Buenas noches';
  }

  if (username) {
    greetingText += `, ${username}`;
  }

  greeting.textContent = greetingText;
}
