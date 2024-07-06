document.addEventListener("DOMContentLoaded", function() {
    const contentUrls = {
        "imagen1": "aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9sb2dvLnBuZw",
        "imagen2": "aHR0cHM6Ly9jZG0uYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9iYWJ5IHBsYXllciAtIHdlYmNvZGVtLnBuZw",
        "imagen3": "aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi90ZXh0dXJhLnBuZw",
        "imagen4": "aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9ieXRlc2RleC1tYXJrZXRwbGFjZS5wbmc"
    };

    for (const [id, url] of Object.entries(contentUrls)) {
        const decodedUrl = atob(url);
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = decodedUrl;
        }
    }

    const faviconUrl = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n";
    const decodedFaviconUrl = atob(faviconUrl);
    const linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.href = decodedFaviconUrl;
    document.head.appendChild(linkElement);
});
