// The lightest of all preload scripts
const ipcRenderer = require('electron').ipcRenderer;

window.winssb = {
  app: {
    didFinishLoading() {
      ipcRenderer.send('did-finish-loading');
    }
  },

  teams: {
    didSignIn(...args) {
      ipcRenderer.send('did-sign-in', ...args);
    }
  }
};

window.desktop = window.winssb;
