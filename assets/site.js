/* ---------- Lucide icon paths ---------- */
const ICONS = {
  'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'menu':'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'x':'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'book-open':'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'folder-open':'<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
  'receipt':'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'file-text':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'building-2':'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'chart-column':'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  'scale':'<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  'award':'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  'heart-handshake':'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/>',
  'shield-check':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'message-square':'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'target':'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'clock':'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'trending-up':'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'map-pin':'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'mail':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'send':'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>',
  'user':'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
};

function renderIcons(root){
  (root || document).querySelectorAll('i[data-ic]').forEach(function (el) {
    const name = el.getAttribute('data-ic');
    const sw = el.getAttribute('data-sw') || '2';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', sw);
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', el.className);
    svg.innerHTML = ICONS[name] || '';
    el.replaceWith(svg);
  });
}

/* ---------- Shared data ---------- */
const PHONE_HREF = 'tel:+31624977250';
const PHONE_TEXT = '+31 6 24977250';
const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'diensten.html', label: 'Diensten' },
  { href: 'over-ons.html', label: 'Over ons' },
  { href: 'index.html#contact', label: 'Contact' }
];

/* ---------- Header ---------- */
function headerHTML() {
  const links = NAV.map(function (n) {
    return '<a class="nav-link text-sm font-medium text-primary/70 hover:text-primary transition-colors duration-300" href="' + n.href + '">' + n.label + '</a>';
  }).join('');

  const mobileLinks = NAV.map(function (n) {
    return '<a class="block py-3 text-base font-medium text-primary/80 hover:text-primary transition-colors" href="' + n.href + '">' + n.label + '</a>';
  }).join('');

  return '' +
    '<header id="site-header" class="fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-transparent">' +
      '<nav class="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between" aria-label="Hoofdnavigatie">' +
        '<a class="flex items-center gap-3" href="index.html">' +
          '<img src="assets/logo.png" alt="Jpa Belastingen &amp; Administraties logo" class="h-9 w-[88px] object-contain">' +
          '<span class="hidden sm:block font-heading font-bold text-sm tracking-wide text-primary leading-tight">Belastingen &amp; Administraties</span>' +
        '</a>' +
        '<div class="hidden md:flex items-center gap-8">' + links +
          '<a href="' + PHONE_HREF + '" class="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">' +
            '<i data-ic="phone" class="w-4 h-4 text-accent"></i>Bel direct</a>' +
        '</div>' +
        '<button id="menu-btn" class="md:hidden p-2 text-primary" aria-label="Menu openen" aria-expanded="false">' +
          '<i data-ic="menu" class="w-6 h-6"></i></button>' +
      '</nav>' +
      '<div id="mobile-menu" class="md:hidden hidden glass-nav border-t border-border px-6 pb-6">' + mobileLinks +
        '<a href="' + PHONE_HREF + '" class="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-3">' +
          '<i data-ic="phone" class="w-4 h-4 text-accent"></i>Bel direct</a>' +
      '</div>' +
    '</header>';
}

/* ---------- Footer ---------- */
function footerHTML() {
  return '' +
    '<footer class="bg-primary text-primary-foreground">' +
      '<div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">' +
        '<div class="mb-14">' +
          '<p class="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Direct contact</p>' +
          '<a href="' + PHONE_HREF + '" class="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight hover:text-accent transition-colors duration-300">' + PHONE_TEXT + '</a>' +
        '</div>' +
        '<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-primary-foreground/15 pt-12">' +
          '<div>' +
            '<div class="bg-white rounded-xl p-3 w-fit mb-4"><img src="assets/logo.png" alt="Jpa Belastingen &amp; Administraties logo" class="h-8 w-[78px] object-contain"></div>' +
            '<p class="text-sm text-primary-foreground/60 leading-relaxed">Belastingen &amp; Administraties.<br>Uw vaste adviseur sinds 1992.</p>' +
          '</div>' +
          '<div><h3 class="font-heading font-bold text-sm tracking-widest uppercase text-accent mb-4">Adres</h3>' +
            '<p class="text-sm text-primary-foreground/70 leading-relaxed">Verederustlaan 297<br>2543 TB Den Haag<br>Nederland</p></div>' +
          '<div><h3 class="font-heading font-bold text-sm tracking-widest uppercase text-accent mb-4">Contact</h3>' +
            '<p class="text-sm text-primary-foreground/70 leading-relaxed">' +
              '<a href="' + PHONE_HREF + '" class="hover:text-accent transition-colors">' + PHONE_TEXT + '</a><br>' +
              '<a href="mailto:jpvdwal@tiscali.nl" class="hover:text-accent transition-colors">jpvdwal@tiscali.nl</a></p></div>' +
          '<div><h3 class="font-heading font-bold text-sm tracking-widest uppercase text-accent mb-4">Gegevens</h3>' +
            '<p class="text-sm text-primary-foreground/70 leading-relaxed">KVK: 27147382<br>BTW-nummer: NL002018416B04</p></div>' +
        '</div>' +
        '<div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-foreground/15 mt-12 pt-8">' +
          '<p class="text-sm text-primary-foreground/50">&copy; ' + new Date().getFullYear() + ' Jpa Belastingen &amp; Administraties. Alle rechten voorbehouden.</p>' +
          '<a class="text-sm text-primary-foreground/50 hover:text-accent transition-colors" href="privacy.html">Privacyverklaring</a>' +
        '</div>' +
      '</div>' +
    '</footer>';
}

/* ---------- Shared contact section ---------- */
const FIELD_CLS = 'w-full rounded-xl border border-input bg-card px-4 py-3.5 text-base text-primary placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent transition-shadow';

function contactCard(icon, label, value, href, external) {
  return '<div data-reveal><a href="' + href + '"' + (external ? ' target="_blank"' : '') + ' rel="noopener noreferrer" class="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-accent/40">' +
      '<div class="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center shrink-0"><i data-ic="' + icon + '" data-sw="1.5" class="w-5 h-5 text-accent"></i></div>' +
      '<div><p class="text-sm font-medium text-muted-foreground">' + label + '</p><p class="font-semibold text-primary mt-0.5">' + value + '</p></div>' +
    '</a></div>';
}

function contactHTML() {
  return '' +
    '<section id="contact" class="py-24 lg:py-32 bg-secondary"><div class="max-w-7xl mx-auto px-6 lg:px-10">' +
      '<div class="max-w-2xl mb-16" data-reveal>' +
        '<p class="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Contact</p>' +
        '<h2 class="font-heading font-bold text-4xl lg:text-5xl text-primary tracking-tight">Laten we kennismaken.</h2>' +
        '<p class="mt-5 text-lg text-muted-foreground leading-relaxed">Een eerste gesprek is altijd vrijblijvend. Vertel waar u tegenaan loopt &mdash; ik denk direct met u mee.</p>' +
      '</div>' +
      '<div class="grid lg:grid-cols-12 gap-10">' +
        '<div class="lg:col-span-7" data-reveal>' +
          '<div class="rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-sm">' +
            '<form id="contact-form" class="space-y-5">' +
              '<div class="grid sm:grid-cols-2 gap-5">' +
                '<div><label for="c-name" class="block text-sm font-medium text-primary mb-2">Naam *</label>' +
                  '<input id="c-name" name="naam" required placeholder="Uw naam" class="' + FIELD_CLS + '"></div>' +
                '<div><label for="c-email" class="block text-sm font-medium text-primary mb-2">E-mail *</label>' +
                  '<input id="c-email" name="email" type="email" required placeholder="uw@email.nl" class="' + FIELD_CLS + '"></div>' +
              '</div>' +
              '<div><label for="c-phone" class="block text-sm font-medium text-primary mb-2">Telefoon</label>' +
                '<input id="c-phone" name="telefoon" type="tel" placeholder="06 12345678" class="' + FIELD_CLS + '"></div>' +
              '<div><label for="c-message" class="block text-sm font-medium text-primary mb-2">Uw vraag *</label>' +
                '<textarea id="c-message" name="bericht" required rows="5" placeholder="Waar kan ik u mee helpen?" class="' + FIELD_CLS + '"></textarea></div>' +
              '<button type="submit" class="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-60">' +
                '<i data-ic="send" class="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5"></i>Verstuur bericht</button>' +
              '<p id="form-status" class="text-sm text-muted-foreground hidden"></p>' +
            '</form>' +
          '</div>' +
        '</div>' +
        '<div class="lg:col-span-5 space-y-6">' +
          contactCard('map-pin', 'Adres', 'Verederustlaan 297, 2543 TB Den Haag', 'https://maps.google.com/?q=Verederustlaan+297,+2543+TB+Den+Haag', true) +
          contactCard('phone', 'Telefoon', PHONE_TEXT, PHONE_HREF, false) +
          contactCard('mail', 'E-mail', 'jpvdwal@tiscali.nl', 'mailto:jpvdwal@tiscali.nl', false) +
          '<div data-reveal><div class="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3]">' +
            '<iframe title="Kaart: Verederustlaan 297, Den Haag" src="https://www.google.com/maps?q=Verederustlaan+297,+2543+TB+Den+Haag&amp;output=embed" class="w-full h-full border-0" loading="lazy" allowfullscreen></iframe>' +
          '</div></div>' +
        '</div>' +
      '</div>' +
    '</div></section>';
}

/* ---------- Behaviour ---------- */
function initHeaderScroll() {
  const h = document.getElementById('site-header');
  if (!h) return;
  const onScroll = function () {
    if (window.scrollY > 24) {
      h.classList.add('glass-nav', 'shadow-sm');
      h.classList.remove('bg-transparent');
    } else {
      h.classList.remove('glass-nav', 'shadow-sm');
      h.classList.add('bg-transparent');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    const open = !menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    btn.innerHTML = '<i data-ic="' + (open ? 'x' : 'menu') + '" class="w-6 h-6"></i>';
    renderIcons(btn);
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.add('hidden'); });
  });
}

function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('is-in'); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      const el = en.target;
      const d = Number(el.getAttribute('data-delay') || 0);
      setTimeout(function () { el.classList.add('is-in'); }, d);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  els.forEach(function (e) { io.observe(e); });
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const run = function (el) {
    const target = Number(el.getAttribute('data-count'));
    const dur = 1600;
    const start = performance.now();
    const step = function (now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.4 });
  els.forEach(function (e) { io.observe(e); });
}

function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const d = new FormData(form);
    const body =
      'Naam: ' + (d.get('naam') || '') + '\n' +
      'E-mail: ' + (d.get('email') || '') + '\n' +
      'Telefoon: ' + (d.get('telefoon') || '') + '\n\n' +
      (d.get('bericht') || '');
    window.location.href = 'mailto:jpvdwal@tiscali.nl' +
      '?subject=' + encodeURIComponent('Contactaanvraag via website - ' + (d.get('naam') || '')) +
      '&body=' + encodeURIComponent(body);
    if (status) {
      status.textContent = 'Uw e-mailprogramma wordt geopend met het bericht. Lukt dat niet? Mail dan direct naar jpvdwal@tiscali.nl.';
      status.classList.remove('hidden');
    }
  });
}

function markActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-header a.nav-link').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.classList.remove('text-primary/70');
      a.classList.add('text-primary');
      a.setAttribute('aria-current', 'page');
    }
  });
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const hSlot = document.getElementById('slot-header');
  if (hSlot) hSlot.outerHTML = headerHTML();
  const cSlot = document.getElementById('slot-contact');
  if (cSlot) cSlot.outerHTML = contactHTML();
  const fSlot = document.getElementById('slot-footer');
  if (fSlot) fSlot.outerHTML = footerHTML();

  renderIcons();
  initHeaderScroll();
  initMobileMenu();
  initReveal();
  initCounters();
  initForm();
  markActiveNav();
});
