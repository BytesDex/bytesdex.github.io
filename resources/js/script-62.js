document.addEventListener("DOMContentLoaded", function() {
    const contentUrls = {
        "imagen1": "aHR0cHM6Ly9jZG4tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9iYWJ5IHBsYXllciAtIGJ5dGVzZGV4LnBuZw",
        "imagen2": "aHR0cHM6Ly9jZG4tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi90ZXh0dXJhLnBuZw",
        "imagen3": "aHR0cHM6Ly9jZG4tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9ieXRlc2RleC1tYXJrZXRwbGFjZS5wbmc",
        "imagen4": "aHR0cDovL2Nkbi1ieXRlc2RleC5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2ZhbGxvLWRlLXNpc3RlbWEucG5n"
    };

    for (const [id, url] of Object.entries(contentUrls)) {
        const decodedUrl = atob(url);
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = decodedUrl;
        }
    }

    const faviconUrl = "aHR0cHM6Ly9jZG4tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlbi9ieXRlc2RleC1sb2dvLnBuZw";
    const decodedFaviconUrl = atob(faviconUrl);
    const linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.href = decodedFaviconUrl;
    document.head.appendChild(linkElement);
});
