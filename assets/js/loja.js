/**
 * REDE BABILÔNIA RPG - CHECKOUT & PRODUTOS DA LOJA
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.Toast) Toast.init();

  const modal = document.getElementById('modal-pix');
  const btnClose = document.getElementById('btn-close-pix');
  const pixItemName = document.getElementById('pix-item-name');
  const pixItemPrice = document.getElementById('pix-item-price');
  const btnCopyPix = document.getElementById('btn-copy-pix');
  const pixCodeInput = document.getElementById('pix-copia-cola');

  // Abrir Modal Pix
  document.addEventListener('click', (e) => {
    const buyBtn = e.target.closest('.js-btn-comprar');
    if (!buyBtn) return;

    const item = buyBtn.getAttribute('data-item');
    const price = buyBtn.getAttribute('data-price');

    if (pixItemName) pixItemName.textContent = item;
    if (pixItemPrice) pixItemPrice.textContent = price;
    if (pixCodeInput) {
      // Simulação de hash Pix real padrão Banco Central
      pixCodeInput.value = `00020126580014br.gov.bcb.pix0136babilonia-rpg-${Date.now()}5204000053039865802BR5920REDE BABILONIA RPG6009SAO PAULO62070503***6304`;
    }

    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });

  // Fechar Modal Pix
  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Copiar Pix Copia e Cola
  if (btnCopyPix && pixCodeInput) {
    btnCopyPix.addEventListener('click', () => {
      pixCodeInput.select();
      document.execCommand('copy');
      if (window.Toast) {
        window.Toast.show('Código Pix copiado! Cole no app do seu banco.');
      }
    });
  }
});
