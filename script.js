class UXOptimizer {
  constructor() {
    this.defaultSettings = {
      'index.html': true,
      'about.html': false,
      'contact.html': false,
    };

    this.init();
  }

  init() {
    this.loadSettings();
    const currentPage = this.detectPage();
    if (this.shouldOptimize(currentPage)) {
      this.applyEnhancements();
    } else {
      this.restoreDefaults();
    }

    window.UXOptimizer = this;
  }

  loadSettings() {
    try {
      const storedSettings = localStorage.getItem('UXOptimizerSettings');
      this.settings = storedSettings ? JSON.parse(storedSettings) : { ...this.defaultSettings };
    } catch (error) {
      console.error('Error al cargar configuraciones:', error);
      this.settings = { ...this.defaultSettings };
    }
  }

  saveSettings() {
    try {
      localStorage.setItem('UXOptimizerSettings', JSON.stringify(this.settings));
    } catch (error) {
      console.error('Error al guardar configuraciones:', error);
    }
  }

  detectPage() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
  }

  shouldOptimize(page) {
    return this.settings[page] === true;
  }

  applyEnhancements() {
    const layer = document.createElement('div');
    layer.id = 'ux-enhancer-overlay';
    layer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      z-index: 99999;
      pointer-events: auto;
    `;

    document.body.appendChild(layer);
    document.body.style.overflow = 'hidden';

    this.limitInteractions();
  }

  restoreDefaults() {
    const layer = document.getElementById('ux-enhancer-overlay');
    if (layer) {
      layer.remove();
    }

    document.body.style.overflow = '';
    this.restoreInteractions();
  }

  limitInteractions() {
    this.originalTimeout = window.setTimeout;
    this.originalInterval = window.setInterval;
    this.originalFetch = window.fetch;
    this.originalXHR = window.XMLHttpRequest;

    window.setTimeout = function() { return 0; };
    window.setInterval = function() { return 0; };

    window.fetch = function() { return Promise.reject('Acción restringida'); };
    window.XMLHttpRequest = function() {
      return {
        open: function() {},
        send: function() {},
        addEventListener: function() {}
      };
    };

    document.addEventListener('click', this.interceptEvent, true);
    document.addEventListener('submit', this.interceptEvent, true);
    document.addEventListener('input', this.interceptEvent, true);
  }

  restoreInteractions() {
    if (this.originalTimeout) window.setTimeout = this.originalTimeout;
    if (this.originalInterval) window.setInterval = this.originalInterval;
    if (this.originalFetch) window.fetch = this.originalFetch;
    if (this.originalXHR) window.XMLHttpRequest = this.originalXHR;

    document.removeEventListener('click', this.interceptEvent, true);
    document.removeEventListener('submit', this.interceptEvent, true);
    document.removeEventListener('input', this.interceptEvent, true);
  }

  interceptEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }

  updatePageStatus(page, status) {
    this.settings[page] = status === true;
    this.saveSettings();

    if (page === this.detectPage()) {
      if (status) {
        this.applyEnhancements();
      } else {
        this.restoreDefaults();
      }
    }

    return this.settings;
  }

  getSettings() {
    return { ...this.settings };
  }

  resetSettings() {
    this.settings = { ...this.defaultSettings };
    this.saveSettings();

    const currentPage = this.detectPage();
    if (this.shouldOptimize(currentPage)) {
      this.applyEnhancements();
    } else {
      this.restoreDefaults();
    }

    return this.settings;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const uxOptimizer = new UXOptimizer();
});
