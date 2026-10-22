/**
 * REDE BABILÔNIA RPG - SISTEMA DE SCROLL REVEAL BIDIRECIONAL (ESTILO CIDADE ALTA)
 * Anima os elementos suavemente ao rolar a página tanto para baixo quanto para cima.
 */

const ScrollReveal = {
  observer: null,

  init() {
    // Configuração do IntersectionObserver bidirecional
    const options = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.08
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Quando entra na viewport (seja rolando pra baixo ou pra cima)
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Remove a classe quando sai da tela para que ao rolar de volta ela anime novamente
          const rect = entry.boundingClientRect;
          // Se saiu por baixo ou por cima
          if (rect.top > window.innerHeight || rect.bottom < 0) {
            entry.target.classList.remove('in-view');
          }
        }
      });
    }, options);

    this.observeElements();

    // Reobserva elementos criados dinamicamente via JS
    window.addEventListener('serversRendered', () => {
      this.observeElements();
    });
  },

  observeElements() {
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => this.observer.observe(el));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal.init();
});

window.ScrollReveal = ScrollReveal;
