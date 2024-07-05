function mostrarModal1() {
    document.getElementById('fondoModal').style.display = 'block';
    document.getElementById('miModal').style.display = 'block';

    document.getElementById('miModal').innerHTML = `
      <h3>¡Advertencia!</h3>
      <p style="font-size: 18px;">Este enlace, mediante el cual podías reclamar una promoción del emote de Clash Royale, ya está expirado.</p>
      <p style="font-size: 18px;">Por favor, ten en cuenta que estas promociones tienen fechas limitadas.</p>
      <button onclick="cerrarModal()">Aceptar</button>
    `;
  }

  function mostrarModal2() {
    document.getElementById('fondoModal').style.display = 'block';
    document.getElementById('miModal').style.display = 'block';
    
    document.getElementById('miModal').innerHTML = `
      <h3>¡En mantenimiento!</h3>
      <p style="font-size: 18px;">Estoy en proceso de agregar una nueva función a mi página web. Mientras trabajo en esta mejora, también estoy dedicando tiempo a la optimización y corrección de bugs para garantizar un rendimiento óptimo.</p>
      <p style="font-size: 18px;">Actualmente, estoy en la fase de implementación de una nueva función en mi sitio web. Al mismo tiempo, me encuentro depurando el código para eliminar posibles errores y mejorar la estabilidad general.</p>
      <button onclick="cerrarModal()">Aceptar</button>
    `;
  }

  function cerrarModal() {
    document.getElementById('fondoModal').style.display = 'none';
    document.getElementById('miModal').style.display = 'none';
  }
