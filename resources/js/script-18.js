document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1197372571528745031/rpczrHYSuKHeyuC8EUyoa7_088fuFhPoIsYK4Mg5eiwAsWkqyUXWaQuQrI7u49K1iR1_";
      const message = "¡Te han dado una valoración de tres estrellas!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
