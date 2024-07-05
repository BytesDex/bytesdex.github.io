document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228866240299270245/Gn6xl0DMn4aMzh8N_gKcNVYZZl2onhwuL0DM0aYtDclwbdLV2Vcfh2ewE0NBdS-2r9OO";
      const message = "¡Tranquilo, tu novia no tiene pretendientes!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
