function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && i > 0) {
            lines.push(line);
            line = words[i] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], x, y + (i * lineHeight));
    }
}

function updateCanvas() {
    const text = document.getElementById('text-input').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const selectedColor = document.getElementById('color-select').value;
    const fontSize = document.getElementById('font-size-select').value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.style.backgroundColor = selectedColor;
    ctx.fillStyle = "#000";
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    const x = 10;
    const y = 10;
    const maxWidth = canvas.width - 20;
    const lineHeight = parseInt(fontSize) + 20;

    wrapText(ctx, text, x, y, maxWidth, lineHeight);
}

function checkCharLimit() {
    const textInput = document.getElementById('text-input');
    const charCountDisplay = document.getElementById('char-count');
    const currentLength = textInput.value.length;

    charCountDisplay.textContent = `Caracteres: ${currentLength}/250`;

    if (currentLength >= 250) {
        alert("Has alcanzado el límite de 250 caracteres.");
    }
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const text = document.getElementById('text-input').value;

    if (!text) {
        alert("No hay texto en el tablero. Por favor, escribe algo antes de descargar.");
        return;
    }

    let downloadCount = localStorage.getItem('downloadCount') ? parseInt(localStorage.getItem('downloadCount')) : 0;

    if (downloadCount >= 1000) {
        alert("Has alcanzado el límite máximo de descargas (1,000 imágenes). Reiniciando contador.");
        localStorage.removeItem('downloadCount'); 
        downloadCount = 0;
    }

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');

    const selectedColor = document.getElementById('color-select').value;
    tempCtx.fillStyle = selectedColor;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);

    const link = document.createElement('a');
    link.download = `brat_image_${downloadCount + 1}.jpg`;
    link.href = tempCanvas.toDataURL('image/jpeg');
    link.click();

    downloadCount++;
    localStorage.setItem('downloadCount', downloadCount);
}
