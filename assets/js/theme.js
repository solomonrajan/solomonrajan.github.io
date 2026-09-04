/**
 * Material Design 3 Theme System
 */

(function () {
  'use strict';

  // Strip .html and /index from browser address bar
  (function cleanBrowserUrl() {
    if (typeof window === 'undefined' || !window.location || window.location.protocol === 'file:') return;
    try {
      let path = window.location.pathname;
      let clean = path;

      if (clean.endsWith('/index.html')) {
        clean = clean.slice(0, -11) || '/';
      } else if (clean.endsWith('/index')) {
        clean = clean.slice(0, -6) || '/';
      } else if (clean === '/index.html' || clean === 'index.html') {
        clean = '/';
      } else if (clean.endsWith('.html')) {
        clean = clean.slice(0, -5);
      }

      if (clean !== path) {
        const newUrl = clean + window.location.search + window.location.hash;
        window.history.replaceState(null, '', newUrl);
      }
    } catch (e) {}
  })();

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let themeTransitionTimer = null;
  function applyTheme(theme) {
    document.documentElement.classList.add('theme-transitioning');
    document.documentElement.setAttribute('data-theme', theme);

    if (themeTransitionTimer) clearTimeout(themeTransitionTimer);
    themeTransitionTimer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 380);
  }

  // Apply immediately before DOM render to prevent flash
  applyTheme(getSystemTheme());

  document.addEventListener('DOMContentLoaded', () => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
      });
    }
  });

  // Global Snackbar Utility
  window.showSnackbar = function (message, duration = 3500) {
    let snackbar = document.getElementById('md-snackbar');
    if (!snackbar) {
      snackbar = document.createElement('div');
      snackbar.id = 'md-snackbar';
      snackbar.className = 'md-snackbar';
      snackbar.innerHTML = `
        <span class="md-snackbar__text"></span>
        <button type="button" class="md-snackbar__action" aria-label="Close snackbar">DISMISS</button>
      `;
      document.body.appendChild(snackbar);

      snackbar.querySelector('.md-snackbar__action').addEventListener('click', () => {
        snackbar.classList.remove('show');
      });
    }

    snackbar.querySelector('.md-snackbar__text').textContent = message;
    snackbar.classList.add('show');

    if (window.snackbarTimer) {
      clearTimeout(window.snackbarTimer);
    }

    window.snackbarTimer = setTimeout(() => {
      snackbar.classList.remove('show');
    }, duration);
  };
})();
