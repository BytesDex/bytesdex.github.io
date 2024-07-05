document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228871688788377611/eyd_IIxSyxQ1BC5w21N_GbRe-WhPbd-Ai2erNYReNWjYH6wguMr9YyUE-xOz9nYr3KZP";
      const message = "¡Tranquilo, tu novia no le gusta ningún amigo!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
