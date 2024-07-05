document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1197337377467797544/73XFUZYn4jGYbMTS48kXu3L_7ayWLKNzUMomEa2AfnsMj9iLaIbcCvg6oxf5nP5FEtBk";
      const message = "¡Te han dado una valoración de dos estrellas!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
