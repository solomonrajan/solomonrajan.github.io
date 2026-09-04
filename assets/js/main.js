/**
 * Solomon Rajan Portfolio - Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Highlight Active Nav Item & Initialize Fluent Indicator Glider
  highlightActiveNav();
  initNavGlider();

  // 2. Mobile Drawer Controls
  initMobileDrawer();

  // 3. Resume Download Handler
  initResumeDownload();

  // 4. Portfolio Filter Chips
  initPortfolioFilters();

  // 5. Blog Search and Filter
  initBlogFilters();

  // 6. Contact Form Validation and Submission
  initContactForm();

  // 7. Modal Dialogs
  initModals();

  // 8. Live Indian Standard Time (IST) Clock
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
  const links = document.querySelectorAll('.md-nav-link, .mobile-drawer-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;
    const targetPage = normalizePageName(href);
    if (targetPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

function initNavGlider() {
  const navList = document.querySelector('.md-nav-list');
  if (!navList) return;

  let indicator = navList.querySelector('.md-nav-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'md-nav-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    navList.prepend(indicator);
  }

  function setIndicatorPosition(targetLink) {
    if (!targetLink) {
      indicator.style.opacity = '0';
      return;
    }
    const navListRect = navList.getBoundingClientRect();
    const targetRect = targetLink.getBoundingClientRect();
    const leftOffset = Math.round(targetRect.left - navListRect.left);
    const width = Math.round(targetRect.width);

    indicator.style.width = `${width}px`;
    indicator.style.transform = `translate3d(${leftOffset}px, 0, 0)`;
    indicator.style.opacity = '1';
  }

  function updateActiveGlider() {
    const currentActive = navList.querySelector('.md-nav-link.active');
    if (currentActive) {
      setIndicatorPosition(currentActive);
    }
  }

  // Instant layout on load without animation to eliminate initial shutter
  updateActiveGlider();

  // Re-sync after web fonts finish loading to ensure pixel-perfect bounding box
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      requestAnimationFrame(updateActiveGlider);
    });
  }

  // Enable smooth animation for user interactions after initial render
  requestAnimationFrame(() => {
    updateActiveGlider();
    requestAnimationFrame(() => {
      navList.classList.add('is-animated');
    });
  });

  const navLinks = navList.querySelectorAll('.md-nav-link');
  
  // Selection indicator updates only when clicked (does not follow cursor on hover)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      setIndicatorPosition(link);
    });
  });

  // ResizeObserver for zero-jitter responsive alignment
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateActiveGlider);
    });
    ro.observe(navList);
  } else {
    window.addEventListener('resize', () => {
      requestAnimationFrame(updateActiveGlider);
    });
  }
}

function initMobileDrawer() {
  const openBtn = document.querySelector('.mobile-menu-btn');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!openBtn || !backdrop) return;

  function openDrawer() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeDrawer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initResumeDownload() {
  const downloadBtns = document.querySelectorAll('.js-download-resume');

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (window.showSnackbar) {
        window.showSnackbar('Downloading Solomon Rajan\'s Resume (PDF)...');
      }

      const link = document.createElement('a');
      link.href = 'assets/resume.pdf';
      link.download = 'Solomon_Rajan_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

function initPortfolioFilters() {
  const filterChips = document.querySelectorAll('.portfolio-filter-chip');
  const projectCards = document.querySelectorAll('.portfolio-item');

  if (!filterChips.length || !projectCards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active', 'md-chip--selected'));
      chip.classList.add('active', 'md-chip--selected');

      const selectedCategory = chip.getAttribute('data-category');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const matches = selectedCategory === 'all' || (cardCategory && cardCategory.includes(selectedCategory));
        
        if (matches) {
          card.classList.remove('is-filtering-out');
          card.style.display = 'flex';
        } else {
          card.classList.add('is-filtering-out');
          setTimeout(() => {
            if (card.classList.contains('is-filtering-out')) {
              card.style.display = 'none';
            }
          }, 240);
        }
      });
    });
  });
}

function initBlogFilters() {
  const searchInput = document.getElementById('blog-search-input');
  const blogCards = document.querySelectorAll('.blog-card-wrapper');
  const tagChips = document.querySelectorAll('.blog-tag-chip');

  if (!blogCards.length) return;

  let debounceTimer = null;

  function filterPosts() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const activeChip = document.querySelector('.blog-tag-chip.active');
    const selectedTag = activeChip ? activeChip.getAttribute('data-tag') : 'all';

    blogCards.forEach(card => {
      const title = card.querySelector('.blog-card__title')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('.blog-card__excerpt')?.textContent.toLowerCase() || '';
      const tags = card.getAttribute('data-tags')?.toLowerCase() || '';

      const matchesQuery = !query || title.includes(query) || excerpt.includes(query);
      const matchesTag = selectedTag === 'all' || tags.includes(selectedTag.toLowerCase());

      if (matchesQuery && matchesTag) {
        card.classList.remove('is-filtering-out');
        card.style.display = 'flex';
      } else {
        card.classList.add('is-filtering-out');
        setTimeout(() => {
          if (card.classList.contains('is-filtering-out')) {
            card.style.display = 'none';
          }
        }, 240);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(filterPosts, 80);
    });
  }

  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      tagChips.forEach(c => c.classList.remove('active', 'md-chip--selected'));
      chip.classList.add('active', 'md-chip--selected');
      filterPosts();
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  let isSubmitting = false;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const name = (form.querySelector('#sender-name')?.value || '').trim();
    const email = (form.querySelector('#sender-email')?.value || '').trim();
    const subject = (form.querySelector('#sender-subject')?.value || '').trim();
    const message = (form.querySelector('#sender-message')?.value || '').trim();

    if (!name || !email || !message) {
      if (window.showSnackbar) {
        window.showSnackbar('Please complete all required fields.');
      }
      return;
    }

    if (name.length < 2 || name.length > 100) {
      if (window.showSnackbar) {
        window.showSnackbar('Please enter a valid name (2-100 characters).');
      }
      return;
    }

    if (subject.length > 150) {
      if (window.showSnackbar) {
        window.showSnackbar('Subject must not exceed 150 characters.');
      }
      return;
    }

    if (message.length < 5 || message.length > 3000) {
      if (window.showSnackbar) {
        window.showSnackbar('Message must be between 5 and 3000 characters.');
      }
      return;
    }

    // RFC 5322 compliant email validation regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email) || email.length > 120) {
      if (window.showSnackbar) {
        window.showSnackbar('Please enter a valid email address.');
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending...`;
    }

    fetch("https://formsubmit.co/ajax/77dss3dv@duck.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: subject,
        message: message
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('FormSubmit responded with status ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      if (data.success === "true" || data.success === true) {
        form.reset();
        if (window.showSnackbar) {
          window.showSnackbar('Message sent successfully! I will get back to you soon.');
        }
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    })
    .catch(error => {
      console.error("FormSubmit Error:", error);
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      if (window.showSnackbar) {
        window.showSnackbar('An error occurred. Please ensure the form is activated and try again.');
      }
    });
  });
}

function initModals() {
  const backdrop = document.getElementById('dialog-backdrop');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogContent = document.getElementById('dialog-content');
  if (!backdrop || !dialogTitle || !dialogContent) return;

  const contentCache = {};
  // Whitelist relative paths to internal assets to prevent SSRF or directory traversal
  const SAFE_SRC_PATTERN = /^assets\/[a-zA-Z0-9_\-]+\.html$/;

  // Background pre-fetch changelog to ensure in-memory cache is automatically updated after edits
  (async () => {
    try {
      const res = await fetch(`assets/changelog.html?_t=${Date.now()}`, { cache: 'no-cache' });
      if (res.ok) {
        const html = await res.text();
        if (html && html.trim()) {
          contentCache['assets/changelog.html'] = html;
          window.CHANGELOG_CONTENT = html;
        }
      }
    } catch (_) {
      // Graceful offline fallback
    }
  })();

  function openDialog(title, content) {
    dialogTitle.textContent = title || 'Details';
    
    if (content instanceof Node) {
      dialogContent.innerHTML = '';
      dialogContent.appendChild(content);
    } else {
      dialogContent.innerHTML = typeof content === 'string' ? content : '';
    }
    
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDialog() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.closest('[data-dialog-close]')) {
      closeDialog();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeDialog();
    }
  });

  document.querySelectorAll('[data-dialog-trigger]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const title = btn.getAttribute('data-dialog-title') || 'Details';
      const templateId = btn.getAttribute('data-dialog-target');
      const dialogSrc = btn.getAttribute('data-dialog-src') || (templateId === 'modal-changelog' ? 'assets/changelog.html' : null);
      const template = templateId ? document.getElementById(templateId) : null;

      if (template) {
        if (template instanceof HTMLTemplateElement && template.content) {
          openDialog(title, template.content.cloneNode(true));
        } else {
          openDialog(title, template.innerHTML);
        }
      } else if (dialogSrc) {
        // Enforce strict URL source validation
        if (!SAFE_SRC_PATTERN.test(dialogSrc) && templateId !== 'modal-changelog') {
          console.error('Blocked potentially unsafe modal source URL:', dialogSrc);
          return;
        }

        const isChangelog = dialogSrc.includes('changelog') || templateId === 'modal-changelog';

        // 1. Optimistic instant display using cached or preloaded content
        if (contentCache[dialogSrc]) {
          openDialog(title, contentCache[dialogSrc]);
        } else if (isChangelog && window.CHANGELOG_CONTENT) {
          openDialog(title, window.CHANGELOG_CONTENT);
        } else {
          openDialog(title, '<div style="padding: 2.5rem; text-align: center; color: var(--md-sys-color-outline);"><p>Loading...</p></div>');
        }

        // 2. Fetch fresh content with cache-busting to ensure live updates
        try {
          if (isChangelog) {
            // For local file:// testing, dynamically inject script to bypass CORS and caching
            await new Promise((resolve, reject) => {
              const script = document.createElement('script');
              script.src = `assets/js/changelog.js?_t=${Date.now()}`;
              script.onload = resolve;
              script.onerror = reject;
              document.body.appendChild(script);
            });
            if (window.CHANGELOG_CONTENT) {
              dialogContent.innerHTML = window.CHANGELOG_CONTENT;
            } else {
              throw new Error("Changelog content not found in JS.");
            }
          } else {
            const fetchUrl = `${dialogSrc}?_t=${Date.now()}`;
            const res = await fetch(fetchUrl, { cache: 'no-cache' });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const html = await res.text();
            if (html && html.trim()) {
              contentCache[dialogSrc] = html;
              dialogContent.innerHTML = html;
            }
          }
        } catch (err) {
          if (!contentCache[dialogSrc]) {
            dialogContent.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--md-sys-color-error);"><p>Unable to load content at this moment.</p></div>';
          }
        }
      }
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

  let lastTimeText = '';
  function updateClock() {
    try {
      const now = new Date();
      const formatted = `${istFormatter.format(now)} IST • Kottayam`;
      if (formatted !== lastTimeText) {
        lastTimeText = formatted;
        clockEl.textContent = formatted;
      }
    } catch (e) {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      const fallback = `${istTime.toLocaleTimeString('en-US', { hour12: true })} IST • Kottayam`;
      if (fallback !== lastTimeText) {
        lastTimeText = fallback;
        clockEl.textContent = fallback;
      }
    }
  }

  function getWeatherMetadata(code, isDay, temp) {
    if (temp >= 35 && (code === 0 || code === 1)) {
      return { icon: 'sunny', colorClass: 'hero-badge__weather-icon--sunny', desc: 'Hot' };
    }
    switch (code) {
      case 0:
        return {
          icon: isDay ? 'sunny' : 'bedtime',
          colorClass: isDay ? 'hero-badge__weather-icon--sunny' : '',
          desc: isDay ? 'Clear' : 'Clear Night'
        };
      case 1:
      case 2:
        return {
          icon: isDay ? 'partly_cloudy_day' : 'partly_cloudy_night',
          colorClass: isDay ? 'hero-badge__weather-icon--sunny' : '',
          desc: 'Partly Cloudy'
        };
      case 3:
        return {
          icon: 'cloud',
          colorClass: 'hero-badge__weather-icon--cloudy',
          desc: 'Cloudy'
        };
      case 45:
      case 48:
        return {
          icon: 'foggy',
          colorClass: 'hero-badge__weather-icon--cloudy',
          desc: 'Foggy'
        };
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return {
          icon: 'rainy',
          colorClass: 'hero-badge__weather-icon--rainy',
          desc: 'Drizzle'
        };
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        return {
          icon: 'rainy',
          colorClass: 'hero-badge__weather-icon--rainy',
          desc: 'Rainy'
        };
      case 71:
      case 73:
      case 75:
      case 77:
        return {
          icon: 'ac_unit',
          colorClass: 'hero-badge__weather-icon--rainy',
          desc: 'Snow'
        };
      case 95:
      case 96:
      case 99:
        return {
          icon: 'thunderstorm',
          colorClass: 'hero-badge__weather-icon--storm',
          desc: 'Thunderstorm'
        };
      default:
        return {
          icon: isDay ? 'sunny' : 'cloud',
          colorClass: isDay ? 'hero-badge__weather-icon--sunny' : 'hero-badge__weather-icon--cloudy',
          desc: 'Clear'
        };
    }
  }

  let lastWeatherKey = '';
  async function fetchKottayamWeather() {
    if (!weatherEl) return;
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=9.5916&longitude=76.5222&current=temperature_2m,is_day,weather_code&timezone=Asia%2FKolkata');
      if (!response.ok) throw new Error(`Weather fetch failed: ${response.status}`);
      const data = await response.json();
      if (data && data.current && typeof data.current.temperature_2m === 'number' && Number.isFinite(data.current.temperature_2m)) {
        const rawTemp = data.current.temperature_2m;
        // Sanity bounds check on temperature range
        if (rawTemp < -50 || rawTemp > 60) return;
        const temp = Math.round(rawTemp);
        const code = Number.isInteger(data.current.weather_code) ? data.current.weather_code : 0;
        const isDay = data.current.is_day === 1;
        const meta = getWeatherMetadata(code, isDay, temp);

        const weatherKey = `${temp}_${code}_${isDay}`;
        if (weatherKey === lastWeatherKey) return; // Prevent unnecessary DOM re-rendering jitter
        lastWeatherKey = weatherKey;

        weatherEl.innerHTML = `<span class="hero-badge__divider">•</span><span class="material-symbols-outlined hero-badge__weather-icon ${meta.colorClass}" title="${meta.desc} (${temp}°C)">${meta.icon}</span><span class="hero-badge__temp">${temp}°C</span>`;
        weatherEl.setAttribute('aria-label', `Current weather in Kottayam: ${meta.desc}, ${temp}°C`);
      }
    } catch (err) {
      console.warn('Unable to load live Kottayam weather:', err);
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
  fetchKottayamWeather();
  setInterval(fetchKottayamWeather, 30000);
}

