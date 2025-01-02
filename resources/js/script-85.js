document.addEventListener("DOMContentLoaded", function () {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    updateGreeting(currentUser);
  }
});

function updateGreeting(username) {
  const greeting = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  let greetingText = '';

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = `Buenos días, ${username}`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = `Buenas tardes, ${username}`;
  } else {
    greetingText = `Buenas noches, ${username}`;
  }

  greeting.textContent = greetingText;
}
