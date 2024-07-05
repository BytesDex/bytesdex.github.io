  const formulario = document.getElementById("formulario");
  const respuestas = formulario.querySelectorAll("input[type='radio']");

  respuestas.forEach(respuesta => {
    respuesta.addEventListener("change", () => {
      const valor = respuesta.value;

      let nextPage = "";
      switch(valor) {
        case "si":
          nextPage = "./respuesta-5";
          break;
        case "no":
          nextPage = "./respuesta-6";
          break;
      
      }
      
      window.location.href = nextPage;
    });
  });
