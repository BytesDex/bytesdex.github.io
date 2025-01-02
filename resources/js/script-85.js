document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById('greeting');
  const currentHour = new Date().getHours();

  greeting.style.display = "inline-block";
  greeting.style.width = "120px";

  const currentUser = localStorage.getItem("currentUser");

  greeting.textContent = getGreeting(currentHour, currentUser);
});

const getGreeting = (hour, username) => {
  let greetingText = '';
  if (hour >= 6 && hour < 12) greetingText = 'Buenos días';
  else if (hour >= 12 && hour < 18) greetingText = 'Buenas tardes';
  else greetingText = 'Buenas noches';

  if (username) {
    greetingText += `, ${username}`;
  }

  return greetingText;
};
