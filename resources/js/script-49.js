document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228873010228760626/ldwLcnxp0aUODL7DBptPKUbF9DCP7ExMXPSVm_6n1HolVmg2rTuY4RmJOkrU-abzcjhP";
      const message = "¡Lo siento mucho, pero tu novia le gusta algun amigo!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
