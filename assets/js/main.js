/**
 * REDE BABILÔNIA RPG - INICIALIZADOR PRINCIPAL
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Módulos
  if (window.Toast) Toast.init();
  if (window.ServersManager) ServersManager.init();
  if (window.SystemsTabs) SystemsTabs.init();
  if (window.FaqAccordion) FaqAccordion.init();

  // 2. Drawer Lateral (Menu Mobile)
  const drawer = document.getElementById('app-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const btnOpenDrawer = document.querySelectorAll('.js-open-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');

  function openDrawer() {
    if (drawer && drawerBackdrop) {
      drawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && drawerBackdrop) {
      drawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  btnOpenDrawer.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 3. Banner de Cookies LGPD
  const cookieBanner = document.getElementById('cookie-banner');
  const btnAcceptCookies = document.getElementById('btn-accept-cookies');
  const btnRejectCookies = document.getElementById('btn-reject-cookies');

  const cookiesChoice = localStorage.getItem('babilonia_cookies_accepted');
  if (!cookiesChoice && cookieBanner) {
    cookieBanner.classList.remove('hidden');
  }

  if (btnAcceptCookies && cookieBanner) {
    btnAcceptCookies.addEventListener('click', () => {
      localStorage.setItem('babilonia_cookies_accepted', 'true');
      cookieBanner.classList.add('hidden');
      if (window.Toast) Toast.show('Preferências de cookies salvas!');
    });
  }

  if (btnRejectCookies && cookieBanner) {
    btnRejectCookies.addEventListener('click', () => {
      localStorage.setItem('babilonia_cookies_accepted', 'false');
      cookieBanner.classList.add('hidden');
    });
  }

  // 4. Modal de Requisitos Mínimos (Segmentado Android vs PC)
  const modalReq = document.getElementById('modal-requisitos');
  const btnOpenReq = document.querySelectorAll('.js-open-requisitos');
  const btnCloseReq = document.querySelectorAll('.js-close-requisitos');
  const reqTitle = document.getElementById('requisitos-modal-title');
  const reqAndroid = document.getElementById('requisitos-android');
  const reqPc = document.getElementById('requisitos-pc');
  const reqDivider = document.getElementById('requisitos-divider');

  btnOpenReq.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!modalReq) return;

      const target = btn.dataset.targetReq || 'all';

      if (target === 'android') {
        if (reqTitle) reqTitle.textContent = 'REQUISITOS - ANDROID';
        if (reqAndroid) reqAndroid.style.display = 'block';
        if (reqPc) reqPc.style.display = 'none';
        if (reqDivider) reqDivider.style.display = 'none';
      } else if (target === 'pc') {
        if (reqTitle) reqTitle.textContent = 'REQUISITOS - COMPUTADOR';
        if (reqAndroid) reqAndroid.style.display = 'none';
        if (reqPc) reqPc.style.display = 'block';
        if (reqDivider) reqDivider.style.display = 'none';
      } else {
        if (reqTitle) reqTitle.textContent = 'REQUISITOS DE SISTEMA';
        if (reqAndroid) reqAndroid.style.display = 'block';
        if (reqPc) reqPc.style.display = 'block';
        if (reqDivider) reqDivider.style.display = 'block';
      }

      modalReq.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  btnCloseReq.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalReq) {
        modalReq.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });

  if (modalReq) {
    modalReq.addEventListener('click', (e) => {
      if (e.target === modalReq) {
        modalReq.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Header Desktop Nav (ScrollSpy & Smooth Scroll)
  const desktopNavLinks = document.querySelectorAll('.header-nav .nav-link');
  const servidoresSec = document.getElementById('servidores');
  const sistemasSec = document.getElementById('sistemas');
  const downloadsSec = document.getElementById('downloads');

  if (desktopNavLinks.length > 0) {
    // A. Clique com rolagem suave precisa compensando o header fixo
    desktopNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';

        if (servidoresSec && (href === '#' || href === 'index.html' || href === '../index.html' || href === '' || href.endsWith('/'))) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          desktopNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          if (window.history.pushState) window.history.pushState(null, null, ' ');
          return;
        }

        if (href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            const headerHeight = document.querySelector('.site-header')?.offsetHeight || 94;
            const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight + 6;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (window.history.pushState) window.history.pushState(null, null, href);
          }
        }
      });
    });

    // B. ScrollSpy Inteligente: atualiza o rabisco amarelo conforme rola para cima ou para baixo
    if (servidoresSec && sistemasSec && downloadsSec) {
      function updateActiveDesktopNav() {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 94;
        const threshold = headerHeight + 80;
        const scrollY = window.scrollY;

        let current = 'home';

        if (scrollY < 180) {
          current = 'home';
        } else {
          const downloadsTop = downloadsSec.getBoundingClientRect().top;
          const sistemasTop = sistemasSec.getBoundingClientRect().top;
          const servidoresTop = servidoresSec.getBoundingClientRect().top;

          if (downloadsTop <= threshold) {
            current = 'downloads';
          } else if (sistemasTop <= threshold) {
            current = 'sistemas';
          } else if (servidoresTop <= threshold) {
            current = 'servidores';
          } else {
            current = 'home';
          }
        }

        desktopNavLinks.forEach(l => {
          if (l.dataset.nav === current) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }

      window.addEventListener('scroll', updateActiveDesktopNav, { passive: true });
      window.addEventListener('resize', updateActiveDesktopNav, { passive: true });
      // Executa imediatamente para garantir o item correto ativo no carregamento
      updateActiveDesktopNav();
    }
  }
});

