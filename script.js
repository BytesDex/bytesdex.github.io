class PageBlocker {
  constructor() {
    this.defaultConfig = {
      'index.html': false,
      'about.html': false,
      'contact.html': false,
    };
    this.init();
  }

  init() {
    this.loadConfig();
    const currentPage = this.getCurrentPage();
    if (this.isPageBlocked(currentPage)) {
      this.blockPage();
    } else {
      this.unblockPage();
    }
    window.PageBlocker = this;
  }

  loadConfig() {
    try {
      const savedConfig = localStorage.getItem('pageBlockerConfig');
      this.config = savedConfig ? JSON.parse(savedConfig) : { ...this.defaultConfig };
    } catch {
      this.config = { ...this.defaultConfig };
    }
  }

  saveConfig() {
    try {
      localStorage.setItem('pageBlockerConfig', JSON.stringify(this.config));
    } catch {}
  }

  getCurrentPage() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
  }

  isPageBlocked(page) {
    return this.config[page] === true;
  }

  blockPage() {
    const overlay = document.createElement('div');
    overlay.id = 'page-blocker-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Arial, sans-serif;
    `;
    const message = document.createElement('h1');
    message.textContent = 'Esta página ha sido bloqueada';
    message.style.color = 'red';
    overlay.appendChild(message);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    this.disableJavaScript();
  }

  unblockPage() {
    const overlay = document.getElementById('page-blocker-overlay');
    if (overlay) overlay.remove();
    document.body.style.overflow = '';
    this.enableJavaScript();
  }

  disableJavaScript() {
    this.originalSetTimeout = window.setTimeout;
    this.originalSetInterval = window.setInterval;
    this.originalFetch = window.fetch;
    this.originalXHR = window.XMLHttpRequest;
    window.setTimeout = () => 0;
    window.setInterval = () => 0;
    window.fetch = () => Promise.reject('Página bloqueada');
    window.XMLHttpRequest = function() {
      return { open: () => {}, send: () => {}, addEventListener: () => {} };
    };
    document.addEventListener('click', this.stopEvent, true);
    document.addEventListener('submit', this.stopEvent, true);
    document.addEventListener('input', this.stopEvent, true);
  }

  enableJavaScript() {
    if (this.originalSetTimeout) window.setTimeout = this.originalSetTimeout;
    if (this.originalSetInterval) window.setInterval = this.originalSetInterval;
    if (this.originalFetch) window.fetch = this.originalFetch;
    if (this.originalXHR) window.XMLHttpRequest = this.originalXHR;
    document.removeEventListener('click', this.stopEvent, true);
    document.removeEventListener('submit', this.stopEvent, true);
    document.removeEventListener('input', this.stopEvent, true);
  }

  stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }

  setPageStatus(page, status) {
    this.config[page] = status === true;
    this.saveConfig();
    if (page === this.getCurrentPage()) {
      status ? this.blockPage() : this.unblockPage();
    }
    return this.config;
  }

  getConfig() {
    return { ...this.config };
  }

  resetConfig() {
    this.config = { ...this.defaultConfig };
    this.saveConfig();
    const currentPage = this.getCurrentPage();
    this.isPageBlocked(currentPage) ? this.blockPage() : this.unblockPage();
    return this.config;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PageBlocker();
});
