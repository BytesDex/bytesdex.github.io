document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1197375263101685871/2Dw94J6Qsiz8w6UjyVcYkNuV9GL-dmkqMcq3TOfm4-1L5vsdyabqbeCU_wyU_eNV02XI";
      const message = "¡Te han dado una valoración de cinco estrellas!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
