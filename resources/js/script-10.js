        document.addEventListener("DOMContentLoaded", function () {
            loadImages();
        });

        function openFileUploader() {
            document.getElementById("fileInput").click();
        }

        function addArtwork(event) {
            const gallery = document.getElementById("artGallery");
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const savedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
                    
                    const title = prompt("Ingresa un título para tu imagen:") || "Sin título";
                    const description = prompt("Agrega una descripción:") || "Sin descripción";

                    const artworkData = {
                        src: e.target.result,
                        title: title,
                        description: description,
                        selected: false
                    };

                    savedArtworks.push(artworkData);
                    localStorage.setItem("artworks", JSON.stringify(savedArtworks));

                    loadImages();
                };

                reader.readAsDataURL(file);
            }
        }

        function loadImages() {
            const gallery = document.getElementById("artGallery");
            gallery.innerHTML = "";

            const savedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];

            savedArtworks.forEach((artworkData, index) => {
                const artwork = createArtworkElement(artworkData, index);
                gallery.appendChild(artwork);
            });
        }

        function createArtworkElement(artworkData, index) {
            const artwork = document.createElement("div");
            artwork.classList.add("artwork");

            const image = document.createElement("img");
            image.src = artworkData.src;
            artwork.appendChild(image);

            const info = document.createElement("div");
            info.classList.add("artworkInfo");

            info.innerHTML = `<strong>${artworkData.title}</strong><br>${artworkData.description}`;
            artwork.appendChild(info);

            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("buttonsContainer");

            const closeIcon = document.createElement("iconify-icon");
            closeIcon.classList.add("closeIcon");
            closeIcon.setAttribute("icon", "zondicons:close-solid");
            closeIcon.setAttribute("onclick", `confirmDeleteArtwork(${index})`);
            closeIcon.classList.add("deleteButton"); 
            buttonsContainer.appendChild(closeIcon);

            const editIcon = document.createElement("iconify-icon");
            editIcon.classList.add("editIcon");
            editIcon.setAttribute("icon", "mdi:image-edit");
            editIcon.setAttribute("onclick", `editArtwork(${index})`);
            buttonsContainer.appendChild(editIcon);

            artwork.appendChild(buttonsContainer);

            if (artworkData.selected) {
                closeIcon.style.color = "#bfd5ff";
            }

            return artwork;
        }

        function confirmDeleteArtwork(index) {
            const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta imagen?");
            if (confirmDelete) {
                deleteArtwork(index);
            }
        }

        function deleteArtwork(index) {
            const savedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
            savedArtworks.splice(index, 1);
            localStorage.setItem("artworks", JSON.stringify(savedArtworks));
            loadImages();
        }

        function editArtwork(index) {
            const savedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
            const artworkData = savedArtworks[index];

            const newTitle = prompt("Edita el título:", artworkData.title) || "Sin título";
            const newDescription = prompt("Edita la descripción:", artworkData.description) || "Sin descripción";

            artworkData.title = newTitle;
            artworkData.description = newDescription;

            localStorage.setItem("artworks", JSON.stringify(savedArtworks));

            loadImages();
        }
