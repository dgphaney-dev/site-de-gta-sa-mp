/**
 * REDE BABILÔNIA RPG - BUSCA INSTANTÂNEA DE REGRAS
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-rules');
  const ruleCards = document.querySelectorAll('.js-rule-card');

  if (!searchInput || !ruleCards.length) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();

    ruleCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(term)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
