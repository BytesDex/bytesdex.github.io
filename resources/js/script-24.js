var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "htmlmixed",
    autoCloseTags: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    theme: "dracula"
});

document.getElementById("saveButton").addEventListener("click", function() {
    var code = editor.getValue();
    var confirmSave = confirm("¿Estás seguro de que quieres guardar este código?");
    if (confirmSave) {
        localStorage.setItem("editorContent", code);
    }
});

document.getElementById("loadButton").addEventListener("click", function() {
    var code = localStorage.getItem("editorContent");
    if (code) {
        var confirmLoad = confirm("¿Estás seguro de que quieres cargar tu código guardado?");
        if (confirmLoad) {
            editor.setValue(code);
        }
    } else {
        alert("No hay ningún código guardado.");
    }
});

document.getElementById("runButton").addEventListener("click", function() {
    var code = editor.getValue();
    var iframe = document.getElementById("resultFrame");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write("<!DOCTYPE html><html><head><title>Resultado</title></head><body>");
    iframeDocument.write("<div style='color: white;'>");
    iframeDocument.write(code);
    iframeDocument.write("</div></body></html>");
    iframeDocument.close();

    iframe.style.display = "block";
    document.querySelector(".editor-container").style.display = "none";
    document.getElementById("backToEditorButton").style.display = "block";
});

document.getElementById("openAngleBracketButton").addEventListener("click", function() {
    editor.replaceSelection("<");
});

document.getElementById("closeAngleBracketButton").addEventListener("click", function() {
    editor.replaceSelection(">");
});

document.getElementById("openCloseTagButton").addEventListener("click", function() {
    editor.replaceSelection("</");
});

document.getElementById("backToEditorButton").addEventListener("click", function() {
    document.getElementById("resultFrame").style.display = "none";
    document.querySelector(".editor-container").style.display = "flex";
    document.getElementById("backToEditorButton").style.display = "none";
});
