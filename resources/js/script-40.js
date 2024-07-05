document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228839408371761163/5c8KOMofEt9bOQh3JJaXQOi7YjO4TWWGsS68B0jvFlI2uIYpi1kECQ7B0MOQLAChvurF";
      const message = "¡Lo siento mucho, pero tu novia es infiel!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
