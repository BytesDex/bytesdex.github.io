document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228867131551125546/aJLtp-hjXdTNOnHWukdA6cYbrNeWMcHbGa4tOc9RuzSVyb4QZhUxHOMI6dzgMeeGz_Va";
      const message = "¡Lo siento mucho, pero tu novia tiene pretendientes!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
