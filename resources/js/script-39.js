document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228836698494992566/_IWv3F0nhBsBjclH0J3Bfwxu6p-l7G3veK6ahmsjpysn_4s_-U8XyDBHqg6FX-vCkuid";
      const message = "¡Tranquilo, tu novia no te es infiel!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
