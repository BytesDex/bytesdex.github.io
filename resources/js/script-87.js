let mediaUrls = [];
let selectedMediaUrl = '';
let mediaType = '';
let fileName = '';

function generarNombreArchivo(tipo) {
    const randomNum = Math.floor(Math.random() * 1000000);
    const fecha = Date.now();
    const prefijo = tipo === 'video' ? 'bytesdex_video_' : 'bytesdex_imagen_';
    return `${prefijo}${randomNum}_${fecha}${tipo === 'video' ? '.mp4' : '.jpg'}`;
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

function selectImage(index) {
    const allImages = document.querySelectorAll('.image-option');
    allImages.forEach(img => img.classList.remove('selected'));

    const selectedImage = document.querySelector(`.image-option[data-index="${index}"]`);  
    selectedImage.classList.add('selected');  
      
    selectedMediaUrl = mediaUrls[index];  
      
    const previewImage = document.getElementById('previewImage');  
    previewImage.src = selectedMediaUrl;  
    previewImage.style.display = 'block';  
      
    document.getElementById('previewSection').style.display = 'block';  
      
    fileName = generarNombreArchivo('image');
}

async function procesarEnlace() {
    const url = document.getElementById("tiktokUrl").value.trim();
    const loaderContainer = document.getElementById("loaderContainer");
    const previewSection = document.getElementById("previewSection");
    const imageGallerySection = document.getElementById("imageGallerySection");
    const previewImage = document.getElementById("previewImage");
    const previewVideo = document.getElementById("previewVideo");
    const mediaContainer = document.getElementById("mediaContainer");

    if (!url) {    
        showToast("Por favor, ingresa un enlace válido", "error");    
        return;    
    }    

    loaderContainer.style.display = "flex";    
    previewSection.style.display = "none";    
    imageGallerySection.style.display = "none";  

    let apiURL = '';    
      
    if (url.includes("tiktok.com")) {    
        apiURL = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;    
    } else {    
        showToast("Por favor, ingresa un enlace válido", "error");    
        loaderContainer.style.display = "none";    
        return;    
    }    

    try {    
        let response = await fetch(apiURL);    
        let data = await response.json();    
        if (!data || data.code !== 0 || !data.data) {    

            let mensajeError = "No se pudo procesar el enlace";
            
            if (data && data.msg) {
                if (data.msg.includes("Invalid") || data.msg.includes("not found")) {
                    mensajeError = "Enlace de TikTok inválido";
                } else if (data.msg.includes("Service") || data.msg.includes("server")) {
                    mensajeError = "Error en el servicio";
                }
            }
            
            showToast(mensajeError, "error");
            loaderContainer.style.display = "none";
            return;
        }    

        previewImage.style.display = "none";    
        previewVideo.style.display = "none";    

        if (data.data.images && data.data.images.length > 1) {  
            mediaUrls = data.data.images;  
            mediaType = 'image';  
              
            const imageGallery = document.getElementById('imageGallery');  
            imageGallery.innerHTML = '';  
              
            mediaUrls.forEach((imageUrl, index) => {  
                const imageDiv = document.createElement('div');  
                imageDiv.className = 'image-option';  
                imageDiv.setAttribute('data-index', index);  
                imageDiv.onclick = () => selectImage(index);  
                  
                const img = document.createElement('img');  
                img.src = imageUrl;  
                img.alt = `Imagen ${index + 1}`;  
                  
                const overlay = document.createElement('div');  
                overlay.className = 'select-overlay';  
                overlay.innerHTML = '<i class="fas fa-check"></i>';  
                  
                imageDiv.appendChild(img);  
                imageDiv.appendChild(overlay);  
                imageGallery.appendChild(imageDiv);  
            });  
              
            imageGallerySection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
              
        } else if (data.data.images && data.data.images.length > 0) {    
            previewImage.src = data.data.images[0];    
            previewImage.style.display = "block";    
            selectedMediaUrl = data.data.images[0];    
            mediaType = 'image';    
            fileName = generarNombreArchivo('image');  
            previewSection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
        } else if (data.data.play) {    
            previewVideo.src = data.data.play;    
            previewVideo.style.display = "block";    
            selectedMediaUrl = data.data.play;    
            mediaType = 'video';    
            fileName = generarNombreArchivo('video');  
            previewSection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
        } else {

            showToast("No se encontró contenido en el enlace", "error");
            return;
        }    
            
        document.getElementById("downloadButton").style.animation = "pulse 2s infinite";    
        mediaContainer.style.animation = "fadeUp 0.5s forwards";    
    } catch (error) {    
        showToast("Error al obtener el contenido", "error");    
        console.error(error);    
    } finally {    
        loaderContainer.style.display = "none";    
    }
}

function iniciarDescarga() {
    if (!selectedMediaUrl) {
        showToast("No hay contenido para descargar", "error");
        return;
    }

    showToast("¡Descarga iniciada!", "success");    
      
    fetch(selectedMediaUrl)    
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
            showToast("Error al descargar:", "error");
            intentarDescargaAlternativa();    
        });
}

function intentarDescargaAlternativa() {
    const downloadFrame = document.getElementById('downloadFrame');
    downloadFrame.src = selectedMediaUrl;
    window.location.href = selectedMediaUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, 100 * index);
    });
});
