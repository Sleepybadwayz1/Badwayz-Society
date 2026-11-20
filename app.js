(function () {
  'use strict';

  var $ = function (s) { return document.querySelector(s); };
  var fmt = function (n) { return '$' + Number(n).toFixed(2); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* ---------- Sale banner (auto-hides outside its dates) ---------- */
  (function sale() {
    var s = SITE_CONFIG.sale;
    if (!s || !s.enabled) return;
    var today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Denver' }); // YYYY-MM-DD
    if (today < s.startDate || today > s.endDate) return;
    $('#saleMessage').textContent = s.message;
    $('#saleDetail').textContent = s.detail || '';
    $('#saleBanner').hidden = false;
  })();

  /* ---------- Links ---------- */
  var L = SITE_CONFIG.links;
  $('#lnkApple').href = L.appleMusic;
  $('#lnkSongstats').href = L.songstats;
  $('#lnkLinktree').href = L.linktree;
  $('#lnkInsta').href = L.instagram;
  $('#lnkEmail').href = 'mailto:' + L.email;
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Optional audio (off until approved) ---------- */
  if (SITE_CONFIG.audio && SITE_CONFIG.audio.enabled) {
    $('#audioSlot').innerHTML =
      '<p class="audio__label">' + esc(SITE_CONFIG.audio.label) + '</p>' +
      '<audio controls preload="none" src="' + esc(SITE_CONFIG.audio.src) + '"></audio>';
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menuBtn'), nav = $('#nav');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', false); }
  });

  /* ---------- Shop ---------- */
  var visible = PRODUCTS.filter(function (p) { return p.show && p.img; });
  var tabs = [{ key: 'featured', name: 'Featured' }].concat(CAPSULES).concat([{ key: 'all', name: 'All' }]);
  var active = 'featured';

  function renderTabs() {
    $('#capsuleTabs').innerHTML = tabs.map(function (t) {
      var count = t.key === 'all' ? visible.length
        : t.key === 'featured' ? visible.filter(function (p) { return p.featured; }).length
        : visible.filter(function (p) { return p.capsule === t.key; }).length;
      if (!count) return '';
      return '<button role="tab" class="tab' + (t.key === active ? ' is-active' : '') +
        '" aria-selected="' + (t.key === active) + '" data-key="' + t.key + '">' +
        esc(t.name) + ' <small>' + count + '</small></button>';
    }).join('');
  }

  function renderGrid() {
    var list = visible.filter(function (p) {
      return active === 'all' || (active === 'featured' ? p.featured : p.capsule === active);
    });
    $('#productGrid').innerHTML = list.map(function (p) {
      var url = PRINTIFY_STORE + '/product/' + p.id;
      return '<article class="card">' +
        '<a href="' + url + '" target="_blank" rel="noopener" class="card__img" aria-label="' + esc(p.name) + ' on Printify">' +
          '<img src="' + MOCKUP + p.img + '" alt="' + esc(p.name) + '" loading="lazy" width="800" height="800">' +
        '</a>' +
        '<div class="card__body">' +
          '<h3 class="card__name">' + esc(p.name) + '</h3>' +
          '<p class="card__price">' + fmt(p.price) + '</p>' +
          '<a href="' + url + '" target="_blank" rel="noopener" class="btn btn--red btn--block">Buy on Printify ↗</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function setTab(key) { active = key; renderTabs(); renderGrid(); }

  $('#capsuleTabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (b) setTab(b.dataset.key);
  });
  document.addEventListener('click', function (e) {
    var j = e.target.closest('[data-jump]');
    if (!j) return;
    setTab(j.dataset.jump);
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  });

  // If a Printify mockup ever fails to load, show the brand crest instead of a broken image
  $('#productGrid').addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('is-fallback')) { e.target.src = 'skull-crest.webp'; e.target.classList.add('is-fallback'); }
  }, true);

  setTab(active);
})();
