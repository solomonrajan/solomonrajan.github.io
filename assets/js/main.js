/**
 * Solomon Rajan Portfolio - Google Dashboard Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Highlight Active Nav Item
  highlightActiveNav();

  // 2. Sidebar Toggle (Mobile)
  initSidebarToggle();

  // 3. Theme Toggle (Dark/Light Mode)
  initThemeToggle();

  // 4. Live Indian Standard Time (IST) Clock & Weather
  initLiveISTClock();

  // 5. Apps Dropdown Toggle
  if (typeof initAppsDropdown === 'function') {
    initAppsDropdown();
  }

  // 6. Profile Picture Modal
  initProfileModal();

  // 7. Force Uninstall PWA (Crucial for users with cached PWA)
  uninstallPWA();

});

function normalizePageName(url) {
  if (!url) return 'index';
  let path = url.split(/[?#]/)[0].split('/').filter(Boolean).pop() || 'index';
  path = path.replace(/\.html$/i, '');
  return (path === '' || path === 'index') ? 'index' : path.toLowerCase();
}

function highlightActiveNav() {
  const currentPage = normalizePageName(window.location.pathname);
  const links = document.querySelectorAll('.google-nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;
    const targetPage = normalizePageName(href);
    
    if (targetPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('google-sidebar');
  
  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

function initThemeToggle() {
  const themeGroup = document.getElementById('theme-toggle-group');
  if (!themeGroup) return;
  
  const buttons = themeGroup.querySelectorAll('.theme-btn');
  const html = document.documentElement;
  
  function updateActiveButton(preference) {
    let activeIndex = 0;
    buttons.forEach((btn, index) => {
      if (btn.getAttribute('data-theme-value') === preference) {
        btn.classList.add('active');
        activeIndex = index;
      } else {
        btn.classList.remove('active');
      }
    });
    themeGroup.style.setProperty('--active-index', activeIndex);
  }

  const savedPreference = localStorage.getItem('solomon-theme-preference') || 'system';
  updateActiveButton(savedPreference);
  
  // Apply initial theme based on preference
  let initialTheme = savedPreference;
  if (savedPreference === 'system') {
    initialTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  html.setAttribute('data-theme', initialTheme);
  html.setAttribute('data-theme-preference', savedPreference);

  // Listen for system theme changes if set to system
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', e => {
      const currentPref = localStorage.getItem('solomon-theme-preference') || 'system';
      if (currentPref === 'system') {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  }
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const value = btn.getAttribute('data-theme-value');
      localStorage.setItem('solomon-theme-preference', value);
      
      let themeToApply = value;
      if (value === 'system') {
        themeToApply = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      html.classList.add('theme-transitioning');
      html.setAttribute('data-theme', themeToApply);
      html.setAttribute('data-theme-preference', value);
      updateActiveButton(value);

      setTimeout(() => html.classList.remove('theme-transitioning'), 380);
    });
  });
}

function initLiveISTClock() {
  const clockEl = document.getElementById('ist-live-clock');
  const weatherEl = document.getElementById('kottayam-weather');
  if (!clockEl) return;

  const istFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  function updateClock() {
    try {
      const now = new Date();
      clockEl.textContent = `${istFormatter.format(now)}`;
    } catch (e) {
      // Fallback
      clockEl.textContent = new Date().toLocaleTimeString();
    }
  }

  function getWeatherMetadata(code, isDay) {
    switch (code) {
      case 0: return { icon: isDay ? 'sunny' : 'bedtime', desc: isDay ? 'Clear' : 'Clear Night' };
      case 1:
      case 2: return { icon: isDay ? 'partly_cloudy_day' : 'partly_cloudy_night', desc: 'Partly Cloudy' };
      case 3: return { icon: 'cloud', desc: 'Cloudy' };
      case 45:
      case 48: return { icon: 'foggy', desc: 'Foggy' };
      case 51: case 53: case 55: case 56: case 57: return { icon: 'rainy', desc: 'Drizzle' };
      case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82: return { icon: 'rainy', desc: 'Rainy' };
      case 71: case 73: case 75: case 77: return { icon: 'ac_unit', desc: 'Snow' };
      case 95: case 96: case 99: return { icon: 'thunderstorm', desc: 'Thunderstorm' };
      default: return { icon: isDay ? 'sunny' : 'cloud', desc: 'Clear' };
    }
  }

  async function fetchKottayamWeather() {
    if (!weatherEl) return;
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=9.5916&longitude=76.5222&current=temperature_2m,is_day,weather_code&timezone=Asia%2FKolkata');
      if (!response.ok) throw new Error(`Weather fetch failed`);
      const data = await response.json();
      if (data && data.current) {
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code || 0;
        const isDay = data.current.is_day === 1;
        const meta = getWeatherMetadata(code, isDay);
        
        weatherEl.innerHTML = `<span style="display:flex; align-items:center; gap:8px;">${meta.desc}, ${temp}°C <span class="material-symbols-outlined" style="font-size: 18px;">${meta.icon}</span></span>`;
      }
    } catch (err) {
      console.warn('Unable to load live Kottayam weather:', err);
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
  fetchKottayamWeather();
  setInterval(fetchKottayamWeather, 300000); // 5 mins
}

function initAppsDropdown() {
  const toggleBtn = document.getElementById('google-apps-toggle');
  const dropdown = document.getElementById('google-apps-dropdown');
  if (!toggleBtn || !dropdown) return;
  toggleBtn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('active'); });
  document.addEventListener('click', (e) => { if (dropdown.classList.contains('active') && !dropdown.contains(e.target) && !toggleBtn.contains(e.target)) { dropdown.classList.remove('active'); } });
}

function initProfileModal() {
  const avatarRing = document.querySelector('.google-avatar-ring');
  if (!avatarRing) return;

  const avatarImg = avatarRing.querySelector('img');
  if (!avatarImg) return;

  const modalHTML = `
    <div class="google-profile-modal-overlay" id="profile-modal" style="display: none;">
      <div class="google-profile-modal">
        <div class="google-profile-modal-header">
          <h2 style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            Solomon Rajan
            <span class="material-symbols-outlined" style="color: #0f9d58; font-size: 24px;">verified</span>
          </h2>
        </div>
        <div class="google-profile-modal-body" style="display: flex; flex-direction: column; align-items: center;">
          <img src="${avatarImg.src}" alt="Profile" class="google-profile-modal-img">
          <p style="margin-top: 12px; color: var(--google-text-secondary); font-size: 14px; text-align: center; font-weight: 500;">Certified Labour Welfare Officer</p>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('profile-modal');

  avatarRing.style.cursor = 'pointer';
  avatarRing.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'flex';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function uninstallPWA() {
  // Unregister all service workers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister().then(function(boolean) {
          console.log('Service worker unregistered:', boolean);
        });
      }
    });
  }

  // Clear all caches
  if ('caches' in window) {
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        return caches.delete(key).then(function(boolean) {
          console.log('Cache deleted:', key, boolean);
        });
      }));
    });
  }
}

