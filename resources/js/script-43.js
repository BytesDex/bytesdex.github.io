document.addEventListener("DOMContentLoaded", function() {
      const webhookUrl = "https://discord.com/api/webhooks/1228854747956641812/OB8KUE9Bk6MIfU7eetsycfb5JFPEyHdw-O0W2LLj5vuxZypL2IO9uKMiU5MNqewSQtsc";
      const message = "¡Felicidades, tu novia te prefiere a ti!";

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    });
