document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228876008422375515/GHpHUlgvk8An67rFEUWiDYKZJ1l6DvBajASL7DvC9NFoRjHDLVVIKfw2ygurlXNZs30i";
      const message = "¡Tranquilo, tu novia no le habla al ex y tampoco no tiene ningúna conexión con el!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
