class uoQzW {
  constructor() {
    this.dRbTj = {
      'index.html': true,
      'about.html': false,
      'contact.html': false,
    };

    this.PzTeX();
  }

  PzTeX() {
    this.nXyDg();
    const MjNzB = this.AyTtQ();
    if (this.xvXlY(MjNzB)) {
      this.hRfUl();
    } else {
      this.AJtDo();
    }

    window.uoQzW = this;
  }

  nXyDg() {
    try {
      const tLgYe = localStorage.getItem('uQzWSettings');
      this.vEyPi = tLgYe ? JSON.parse(tLgYe) : { ...this.dRbTj };
    } catch (e) {
      console.error('Error al cargar:', e);
      this.vEyPi = { ...this.dRbTj };
    }
  }

  UZTkN() {
    try {
      localStorage.setItem('uQzWSettings', JSON.stringify(this.vEyPi));
    } catch (e) {
      console.error('Error al guardar:', e);
    }
  }

  AyTtQ() {
    const PjKwD = window.location.pathname;
    return PjKwD.split('/').pop() || 'index.html';
  }

  xvXlY(ShKhM) {
    return this.vEyPi[ShKhM] === true;
  }

  hRfUl() {
    const UwXtV = document.createElement('div');
    UwXtV.id = 'uQzW-overlay';
    UwXtV.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      z-index: 99999;
      pointer-events: auto;
    `;
    document.body.appendChild(UwXtV);
    document.body.style.overflow = 'hidden';

    this.qXbGh();
  }

  AJtDo() {
    const UwXtV = document.getElementById('uQzW-overlay');
    if (UwXtV) {
      UwXtV.remove();
    }

    document.body.style.overflow = '';
    this.MkNvD();
  }

  qXbGh() {
    this.originalSetTimeout = window.setTimeout;
    this.originalSetInterval = window.setInterval;
    this.originalFetch = window.fetch;
    this.originalXHR = window.XMLHttpRequest;

    window.setTimeout = function() { return 0; };
    window.setInterval = function() { return 0; };

    window.fetch = function() { return Promise.reject('Acción bloqueada'); };
    window.XMLHttpRequest = function() {
      return {
        open: function() {},
        send: function() {},
        addEventListener: function() {}
      };
    };

    document.addEventListener('click', this.nXyZl, true);
    document.addEventListener('submit', this.nXyZl, true);
    document.addEventListener('input', this.nXyZl, true);
  }

  MkNvD() {
    if (this.originalSetTimeout) window.setTimeout = this.originalSetTimeout;
    if (this.originalSetInterval) window.setInterval = this.originalSetInterval;
    if (this.originalFetch) window.fetch = this.originalFetch;
    if (this.originalXHR) window.XMLHttpRequest = this.originalXHR;

    document.removeEventListener('click', this.nXyZl, true);
    document.removeEventListener('submit', this.nXyZl, true);
    document.removeEventListener('input', this.nXyZl, true);
  }

  nXyZl(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }

  vDyRj(PjKwD, SdWyM) {
    this.vEyPi[PjKwD] = SdWyM === true;
    this.UZTkN();

    if (PjKwD === this.AyTtQ()) {
      if (SdWyM) {
        this.hRfUl();
      } else {
        this.AJtDo();
      }
    }

    return this.vEyPi;
  }

  getSettings() {
    return { ...this.vEyPi };
  }

  resetSettings() {
    this.vEyPi = { ...this.dRbTj };
    this.UZTkN();

    const MjNzB = this.AyTtQ();
    if (this.xvXlY(MjNzB)) {
      this.hRfUl();
    } else {
      this.AJtDo();
    }

    return this.vEyPi;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const uxOptimizer = new uoQzW();
});
