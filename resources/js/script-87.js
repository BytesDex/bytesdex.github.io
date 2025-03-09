let mediaUrl = '';
let mediaType = '';
let fileName = '';

function generarNombreArchivo(tipo) {
    const randomNum = Math.floor(Math.random() * 1000000);
    const fecha = Date.now();
    const prefijo = tipo === 'video' ? 'bytesdex_video_' : 'bytesdex_imagen_';
    return `${prefijo}${randomNum}_${fecha}.mp4`;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toast.className = 'toast ' + type;
    toastMessage.textContent = message;
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

async function procesarEnlace() {
    let url = document.getElementById("tiktokUrl").value.trim();
    let loaderContainer = document.getElementById("loaderContainer");
    let previewSection = document.getElementById("previewSection");
    let previewImage = document.getElementById("previewImage");
    let previewVideo = document.getElementById("previewVideo");
    let mediaContainer = document.getElementById("mediaContainer");

    if (!url) {
        showToast("Por favor, ingresa un enlace válido de TikTok.", "error");
        return;
    }

    loaderContainer.style.display = "flex";
    previewSection.style.display = "none";
    
    try {
        let response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
        let data = await response.json();

        if (!data.data) {
            throw new Error("No se pudo procesar el enlace");
        }

        previewImage.style.display = "none";
        previewVideo.style.display = "none";

        if (data.data.images) {
            previewImage.src = data.data.images[0];
            previewImage.style.display = "block";
            mediaUrl = data.data.images[0];
            mediaType = 'image';
            fileName = generarNombreArchivo('image');
        } else if (data.data.play) {
            previewVideo.src = data.data.play;
            previewVideo.style.display = "block";
            mediaUrl = data.data.play;
            mediaType = 'video';
            fileName = generarNombreArchivo('video');
        }
        
        previewSection.style.display = "block";
        showToast("¡Contenido listo para descargar!", "success");

        document.getElementById("downloadButton").style.animation = "pulse 2s infinite";
        mediaContainer.style.animation = "fadeUp 0.5s forwards";
    } catch (error) {
        showToast("Error al obtener el contenido. Verifica el enlace e intenta de nuevo.", "error");
        console.error(error);
    } finally {
        loaderContainer.style.display = "none";
    }
}

function iniciarDescarga() {
    if (!mediaUrl) {
        showToast("No hay contenido para descargar.", "error");
        return;
    }

    showToast("¡Descarga iniciada!", "success");
    
    fetch(mediaUrl)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error("Error al descargar:", error);
            intentarDescargaAlternativa();
        });
}

function intentarDescargaAlternativa() {
    const downloadFrame = document.getElementById('downloadFrame');
    downloadFrame.src = mediaUrl;
    window.location.href = mediaUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, 100 * index);
    });
});
