function copyHTML(index) {
  var htmlCode = document.getElementsByTagName('textarea')[index].value;
  navigator.clipboard.writeText(htmlCode)
    .then(() => alert("Código copiado al portapapeles"))
    .catch(err => console.error('Error al copiar el código: ', err));
}
