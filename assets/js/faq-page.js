/**
 * REDE BABILÔNIA RPG - PÁGINA DE FAQ & CATEGORIAS
 */

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.js-faq-item');
  const catBtns = document.querySelectorAll('.js-faq-cat');

  // Acordeão
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-card-header');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Filtro por Categoria
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');
      faqItems.forEach(item => {
        const itemCat = item.getAttribute('data-cat');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
