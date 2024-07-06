    const urls = {
        'url1': 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyYS9CYWJ5IFBsYXllci5tY3BhY2s',
    };

    function decodeAndRedirect(event, urlKey) {
        event.preventDefault();
        const contentUrl = urls[urlKey];
        const decodedUrl = atob(contentUrl); 
        window.location.href = decodedUrl;
    }
