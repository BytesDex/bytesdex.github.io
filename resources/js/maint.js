const existingOverlay = document.getElementById('maintenance-overlay');
if (existingOverlay) {
  existingOverlay.remove();
}

const overlay = document.createElement("div");
overlay.id = "maintenance-overlay";
overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.fontFamily = "'Inter', system-ui, sans-serif";
overlay.style.zIndex = "9999999";
overlay.style.overflow = "hidden";
document.body.appendChild(overlay);

document.body.style.overflow = "hidden";

const bgCanvas = document.createElement("canvas");
bgCanvas.style.position = "absolute";
bgCanvas.style.top = "0";
bgCanvas.style.left = "0";
bgCanvas.style.width = "100%";
bgCanvas.style.height = "100%";
bgCanvas.style.zIndex = "-1";
overlay.appendChild(bgCanvas);

const ctx = bgCanvas.getContext("2d");
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

const contentWrapper = document.createElement("div");
contentWrapper.style.maxWidth = "500px";
contentWrapper.style.width = "90%";
contentWrapper.style.position = "relative";
contentWrapper.style.zIndex = "10";
overlay.appendChild(contentWrapper);

const accentLight = document.createElement("div");
accentLight.style.position = "absolute";
accentLight.style.top = "-150px";
accentLight.style.left = "50%";
accentLight.style.transform = "translateX(-50%)";
accentLight.style.width = "300px";
accentLight.style.height = "300px";
accentLight.style.background = "radial-gradient(circle, rgba(111, 78, 255, 0.5) 0%, rgba(111, 78, 255, 0) 70%)";
accentLight.style.borderRadius = "50%";
accentLight.style.filter = "blur(20px)";
accentLight.style.zIndex = "-1";
contentWrapper.appendChild(accentLight);

const iconContainer = document.createElement("div");
iconContainer.style.width = "100px";
iconContainer.style.height = "100px";
iconContainer.style.margin = "0 auto 30px";
iconContainer.style.position = "relative";
iconContainer.style.display = "flex";
iconContainer.style.justifyContent = "center";
iconContainer.style.alignItems = "center";
contentWrapper.appendChild(iconContainer);

const rotatingCircle = document.createElement("div");
rotatingCircle.style.position = "absolute";
rotatingCircle.style.width = "100%";
rotatingCircle.style.height = "100%";
rotatingCircle.style.border = "3px dashed rgba(255, 255, 255, 0.2)";
rotatingCircle.style.borderRadius = "50%";
rotatingCircle.style.animation = "rotate 20s linear infinite";
iconContainer.appendChild(rotatingCircle);

const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
iconSvg.setAttribute("viewBox", "0 0 24 24");
iconSvg.setAttribute("fill", "none");
iconSvg.setAttribute("stroke", "currentColor");
iconSvg.setAttribute("stroke-width", "1.5");
iconSvg.setAttribute("stroke-linecap", "round");
iconSvg.setAttribute("stroke-linejoin", "round");
iconSvg.style.width = "50px";
iconSvg.style.height = "50px";
iconSvg.style.color = "white";
iconSvg.style.animation = "pulse 2s ease-in-out infinite";
iconContainer.appendChild(iconSvg);

const gearPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
gearPath1.setAttribute("d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z");
iconSvg.appendChild(gearPath1);

const gearCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
gearCircle.setAttribute("cx", "12");
gearCircle.setAttribute("cy", "12");
gearCircle.setAttribute("r", "3");
iconSvg.appendChild(gearCircle);

const card = document.createElement("div");
card.style.background = "rgba(17, 17, 25, 0.8)";
card.style.backdropFilter = "blur(20px)";
card.style.borderRadius = "24px";
card.style.padding = "40px";
card.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)";
card.style.color = "white";
card.style.textAlign = "center";
card.style.opacity = "0";
card.style.transform = "translateY(30px)";
card.style.animation = "fadeIn 1s cubic-bezier(0.21, 1.02, 0.73, 1) forwards";
contentWrapper.appendChild(card);

const title = document.createElement("h1");
title.innerText = "Servicio en Mantenimiento";
title.style.fontSize = "28px";
title.style.fontWeight = "700";
title.style.margin = "0 0 16px";
title.style.background = "linear-gradient(135deg, #ffffff 0%, #c8d9ff 100%)";
title.style.backgroundClip = "text";
title.style.webkitBackgroundClip = "text";
title.style.webkitTextFillColor = "transparent";
title.style.opacity = "0";
title.style.transform = "translateY(20px)";
title.style.animation = "fadeIn 0.8s cubic-bezier(0.21, 1.02, 0.73, 1) 0.2s forwards";
card.appendChild(title);

const message = document.createElement("p");
message.innerText = "Estamos trabajando para mejorar tu experiencia. Volveremos pronto.";
message.style.fontSize = "16px";
message.style.lineHeight = "1.6";
message.style.color = "rgba(255, 255, 255, 0.8)";
message.style.margin = "0 0 30px";
message.style.opacity = "0";
message.style.transform = "translateY(20px)";
message.style.animation = "fadeIn 0.8s cubic-bezier(0.21, 1.02, 0.73, 1) 0.3s forwards";
card.appendChild(message);

const progressContainer = document.createElement("div");
progressContainer.style.margin = "30px 0";
progressContainer.style.position = "relative";
progressContainer.style.opacity = "0";
progressContainer.style.transform = "translateY(20px)";
progressContainer.style.animation = "fadeIn 0.8s cubic-bezier(0.21, 1.02, 0.73, 1) 0.4s forwards";
card.appendChild(progressContainer);

const progressBar = document.createElement("div");
progressBar.style.height = "10px";
progressBar.style.background = "rgba(255, 255, 255, 0.1)";
progressBar.style.borderRadius = "10px";
progressBar.style.overflow = "hidden";
progressContainer.appendChild(progressBar);

const progressFill = document.createElement("div");
progressFill.style.width = "0%";
progressFill.style.height = "100%";
progressFill.style.borderRadius = "10px";
progressFill.style.background = "linear-gradient(90deg, #6f4eff, #b265ff)";
progressFill.style.transition = "width 0.5s cubic-bezier(0.44, 0.21, 0, 1.01)";
progressFill.style.position = "relative";
progressFill.style.overflow = "hidden";
progressBar.appendChild(progressFill);

const liquidEffect = document.createElement("div");
liquidEffect.style.position = "absolute";
liquidEffect.style.top = "0";
liquidEffect.style.left = "0";
liquidEffect.style.width = "200%";
liquidEffect.style.height = "100%";
liquidEffect.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)";
liquidEffect.style.animation = "liquidMove 2s linear infinite";
progressFill.appendChild(liquidEffect);

const countdownText = document.createElement("p");
countdownText.style.fontSize = "14px";
countdownText.style.color = "rgba(255, 255, 255, 0.6)";
countdownText.style.marginTop = "12px";
countdownText.style.fontWeight = "500";
countdownText.innerText = "Recargando en 30 segundos...";
countdownText.style.opacity = "0";
countdownText.style.transform = "translateY(20px)";
countdownText.style.animation = "fadeIn 0.8s cubic-bezier(0.21, 1.02, 0.73, 1) 0.5s forwards";
progressContainer.appendChild(countdownText);

const style = document.createElement("style");
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes liquidMove {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
    }
    
    @keyframes pulse2 {
        0% { opacity: 0.5; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0.5; transform: scale(0.8); }
    }
    
    * {
        box-sizing: border-box;
    }
`;
document.head.appendChild(style);

const particles = [];
const particleCount = 50;
const particleBaseSize = Math.min(window.innerWidth, window.innerHeight) / 100;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * bgCanvas.height,
        size: Math.random() * particleBaseSize + particleBaseSize * 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(${Math.floor(Math.random() * 100 + 90)}, ${Math.floor(Math.random() * 80 + 140)}, ${Math.floor(Math.random() * 50 + 205)}, ${Math.random() * 0.5 + 0.1})`
    });
}

function animate() {

    ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    const gradient = ctx.createLinearGradient(0, 0, bgCanvas.width, bgCanvas.height);
    gradient.addColorStop(0, '#0f0f1e');
    gradient.addColorStop(1, '#270f2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    particles.forEach(particle => {

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0) particle.x = bgCanvas.width;
        if (particle.x > bgCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = bgCanvas.height;
        if (particle.y > bgCanvas.height) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.beginPath();
        const glow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
        );
        glow.addColorStop(0, particle.color);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

animate();

let timeLeft = 30;
function updateCountdown() {
    const percentage = ((30 - timeLeft) / 30) * 100;
    progressFill.style.width = `${percentage}%`;
    countdownText.innerText = `Recargando en ${timeLeft} segundos...`;
    
    if (timeLeft <= 0) {
        location.reload();
    }
    timeLeft--;
}

setInterval(updateCountdown, 1000);

window.addEventListener('resize', () => {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
});
