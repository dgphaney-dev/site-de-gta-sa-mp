/**
 * REDE BABILÔNIA RPG - FAQ ACORDEÃO
 */

const FaqAccordion = {
  init() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Fecha todos os outros
          faqItems.forEach(other => other.classList.remove('active'));

          // Alterna o atual
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }
};

window.FaqAccordion = FaqAccordion;
