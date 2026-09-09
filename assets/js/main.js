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
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  const html = document.documentElement;
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    toggleBtn.innerHTML = `<span class="material-symbols-outlined">${newTheme === 'dark' ? 'light_mode' : 'dark_mode'}</span>`;
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
