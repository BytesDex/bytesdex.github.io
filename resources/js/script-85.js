document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  
  greeting.textContent = getGreeting(currentHour);
});

const getGreeting = (hour) => {
  if (hour >= 6 && hour < 12) return 'Buenos días';
  if (hour >= 12 && hour < 18) return 'Buenas tardes';
  return 'Buenas noches';
};
