document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228857141218115666/_5MWkbTCIO48eYjdk3fV4lMQyQNq74gqrEF5LSsy6jF6BPYdHwCZl7O9yrKtzzYo6isB";
      const message = "¡Lo siento mucho, tu novia no te prefiere a ti!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
