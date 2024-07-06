const urls = {
  'url1': 'aHR0cHM6Ly9jZG0tYnl0ZXNkZXguZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyYS9CYWJ5IFBsYXllci5tY3BhY2s',
};

function Download(event, urlKey) {
  event.preventDefault(); 
  
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
  
  setTimeout(function() {

    const contentUrl = urls[urlKey];
    
    const decodedUrl = atob(contentUrl);
    window.location.href = decodedUrl;
    
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 1000);
  }, 2000);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').style.display = 'none';
});
