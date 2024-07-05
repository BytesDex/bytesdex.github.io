function actualizarResultados(query) {
    var resultContainer = document.getElementById("resultContainer");
    var enlaces = document.getElementsByTagName("a");

    if (query.trim() === "") {
        resultContainer.innerHTML = "";
        return;
    }

    Array.from(resultContainer.children).forEach(function(item) {
        item.style.display = "none";
    });

    for (var i = 0; i < enlaces.length; i++) {
        var enlace = enlaces[i];
        var nombreEnlace = enlace.getAttribute("data-name");
        
        if (nombreEnlace && nombreEnlace.toLowerCase().includes(query.toLowerCase())) {
            var resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.textContent = nombreEnlace;
            resultItem.addEventListener("click", function() {
                window.location.href = enlace.href; 
            });
            resultContainer.appendChild(resultItem);
            resultItem.style.display = "block"; 
            break; 
        }
    }
}

var searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    var query = this.value;
    actualizarResultados(query);
});
