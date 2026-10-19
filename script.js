/* Progressive enhancement: all résumé content and links also work without JS. */
(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const menuLabel = document.querySelector('.menu-label');

  function setMenu(open) {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    if (menuLabel) menuLabel.textContent = open ? 'Close' : 'Menu';
  }

  if (menuButton && navigation) {
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const filterCount = document.querySelector('#filter-count');
  const toolbar = document.querySelector('.project-toolbar');

  if (filters.length && projects.length) {
    if (toolbar) toolbar.hidden = false;
    filters.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        let visible = 0;
        filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
        projects.forEach(project => {
          const shown = category === 'all' || project.dataset.category === category;
          project.hidden = !shown;
          if (shown) visible += 1;
        });
        if (filterCount) {
          filterCount.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
        }
      });
    });
  }

  const copyButton = document.querySelector('.copy-email');
  const emailLink = document.querySelector('.email-link');
  const copyStatus = document.querySelector('#copy-status');
  let feedbackTimer;

  if (copyButton && emailLink) {
    copyButton.hidden = false;
    const label = copyButton.querySelector('span');
    copyButton.addEventListener('click', async () => {
      const email = emailLink.textContent.trim();
      let copied = false;
      copyButton.disabled = true;

      // HTTPS clipboard when available; selection-based fallback for local files.
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(email);
          copied = true;
        }
      } catch (_) {
        // A browser may deny clipboard permission. Try the local-file fallback.
      }

      if (!copied) {
        const field = document.createElement('textarea');
        field.value = email;
        field.setAttribute('readonly', '');
        field.setAttribute('aria-label', 'Email address to copy');
        field.style.cssText = 'position:fixed;left:-9999px;top:0;';
        document.body.appendChild(field);
        field.select();
        try {
          copied = typeof document.execCommand === 'function' && document.execCommand('copy');
        } catch (_) {
          copied = false;
        } finally {
          field.remove();
          copyButton.focus();
        }
      }

      copyButton.disabled = false;
      if (label) label.textContent = copied ? 'Copied!' : 'Select email to copy';
      if (copyStatus) {
        copyStatus.textContent = copied
          ? 'Email address copied to clipboard.'
          : `Clipboard unavailable. Select and copy ${email}, or use the email link.`;
      }
      clearTimeout(feedbackTimer);
      feedbackTimer = setTimeout(() => {
        if (label) label.textContent = 'Copy email';
      }, 3500);
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
