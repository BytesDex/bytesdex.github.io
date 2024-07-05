document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1197374915884621864/wDgnopK3keodFkCNFIjax3yBYNxCWUYO3AbXA_MBJfsbl7HgwwFa3wc6GJsUd1jXpQNH";
      const message = "¡Te han dado una valoración de cuatro estrellas!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
