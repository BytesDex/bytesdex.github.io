document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1197334310659821668/iGHTHFJPNJFFkxFLVPOKK38GVFurKOfmntj32XcO2PReMyLapfgrXWgMJ_hZBzf9TNQE";
      const message = "¡Te han dado una valoración de una estrella!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
