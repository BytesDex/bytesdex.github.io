        var imagenes = [];
        var indiceImagenActual = 0;

        function mostrarImagen() {
            var contenedorImagen = document.getElementById('contenedorImagen');
            var contenedorCarga = document.getElementById('contenedorCarga');
            var imagenNoEncontrada = document.getElementById('imagenNoEncontrada');
            var botonesNavegacion = document.querySelector('.botonesNavegacion');
            var nombreImagen = document.getElementById('nombreImagen').value.trim();

            contenedorCarga.style.display = 'block';

            contenedorImagen.innerHTML = '';
            imagenNoEncontrada.style.display = 'none';
            botonesNavegacion.style.display = 'none';

            setTimeout(function () {
                
                contenedorCarga.style.display = 'none';

                if (nombreImagen.toLowerCase() === 'werensita') {
                    imagenes = [
                        '/resources/multimedia/imagen1.jpg',
                        '/resources/multimedia/imagen2.jpg', 
                        '/resources/multimedia/imagen3.jpg', 
                        '/resources/multimedia/imagen4.jpg', 
                        '/resources/multimedia/imagen5.jpg', 
                        '/resources/multimedia/imagen6.jpg', 
                        '/resources/multimedia/imagen7.jpg', 
                        '/resources/multimedia/imagen8.jpg',
                        '/resources/multimedia/imagen9.jpg',
                        '/resources/multimedia/imagen10.jpg', 
                        '/resources/multimedia/imagen11.jpg'
                    ];
                } else if (nombreImagen.toLowerCase() === 'akane') {
                    imagenes = [
                        '/resources/multimedia/imagen12.jpg',
                        '/resources/multimedia/imagen13.jpg',
                        '/resources/multimedia/imagen14.jpg',
                        '/resources/multimedia/imagen15.jpg', 
                        '/resources/multimedia/imagen16.jpg', 
                        '/resources/multimedia/imagen17.jpg', 
                        '/resources/multimedia/imagen18.jpg', 
                        '/resources/multimedia/imagen19.jpg'                                               
                    ];
                } else if (nombreImagen.toLowerCase() === 'hanapunzell') {
                    imagenes = [
                        '/resources/multimedia/imagen20.jpg',
                        '/resources/multimedia/imagen21.jpg', 
                        '/resources/multimedia/imagen22.jpg', 
                        '/resources/multimedia/imagen23.jpg', 
                        '/resources/multimedia/imagen24.jpg'
                                              
                    ];                                                                                                       
                } else {
                
                    imagenNoEncontrada.style.display = 'block';
                    return;
                }

                mostrarImagenActual();
                botonesNavegacion.style.display = 'flex';
            }, 2000);
        }

        function mostrarImagenActual() {
            var contenedorImagen = document.getElementById('contenedorImagen');
            contenedorImagen.innerHTML = '';

            if (imagenes.length > 0 && indiceImagenActual < imagenes.length) {
                var imagen = imagenes[indiceImagenActual];
                var imgElement = document.createElement('img');
                imgElement.src = imagen;
                imgElement.alt = 'Imagen ' + (indiceImagenActual + 1);
                contenedorImagen.appendChild(imgElement);
            }
        }

        function imagenSiguiente() {
            if (indiceImagenActual < imagenes.length - 1) {
                indiceImagenActual++;
            } else {
                indiceImagenActual = 0;
            }

            mostrarImagenActual();
        }

        function imagenAnterior() {
            if (indiceImagenActual > 0) {
                indiceImagenActual--;
            } else {
                indiceImagenActual = imagenes.length - 1;
            }

            mostrarImagenActual();
        }
