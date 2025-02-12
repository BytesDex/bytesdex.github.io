const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.background = "linear-gradient(-45deg, #1a1a1a, #222831, #30475e, #f05454)";
overlay.style.backgroundSize = "400% 400%";
overlay.style.animation = "gradientBG 6s ease infinite";
overlay.style.color = "white";
overlay.style.textAlign = "center";
overlay.style.overflow = "hidden";
overlay.style.zIndex = "999999"; 
document.body.appendChild(overlay);

document.body.style.overflow = "hidden";

const container = document.createElement("div");
container.style.background = "rgba(26, 26, 26, 0.85)";
container.style.padding = "30px";
container.style.borderRadius = "12px";
container.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.3)";
container.style.textAlign = "center";
container.style.maxWidth = "400px";
container.style.width = "90%";
container.style.animation = "slideIn 0.5s ease-out";
overlay.appendChild(container);

const title = document.createElement("h1");
title.innerText = "Servicio en Mantenimiento";
title.style.marginBottom = "15px";
title.style.fontSize = "1.8rem";
container.appendChild(title);

const message = document.createElement("p");
message.innerText = "Estamos trabajando para mejorar tu experiencia. Volveremos pronto.";
message.style.fontSize = "1rem";
message.style.opacity = "0.9";
container.appendChild(message);

const loader = document.createElement("div");
loader.style.width = "50px";
loader.style.height = "50px";
loader.style.border = "6px solid rgba(255, 255, 255, 0.2)";
loader.style.borderLeftColor = "white";
loader.style.borderRadius = "50%";
loader.style.margin = "15px auto";
loader.style.animation = "spin 1.2s linear infinite";
container.appendChild(loader);

const countdownText = document.createElement("p");
countdownText.innerText = "Recargando en 30 segundos...";
countdownText.style.fontSize = "1rem";
countdownText.style.animation = "pulse 1.5s infinite";
container.appendChild(countdownText);

const style = document.createElement("style");
style.innerHTML = `
    @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes slideIn {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes pulse {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);

let timeLeft = 30;
function updateCountdown() {
    countdownText.innerText = `Recargando en ${timeLeft} segundos...`;
    timeLeft--;

    if (timeLeft < 0) {
        location.reload(); 
    }
}

setInterval(updateCountdown, 1000);
