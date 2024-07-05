document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228877735506608149/mTchgry2ZJ44qJ2dPCQscaDZ7uZ-kGXFjBm6U_e-c_A2t5ckqJVQBfzTd9KbRB5s2ra3";
      const message = "¡Lo siento mucho, pero tu novia sigue hablando con su ex y también tiene conexión todavía con el!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
