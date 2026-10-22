/**
 * REDE BABILÔNIA RPG - PÁGINA DE SERVIDORES ONLINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização do Toast
  if (window.Toast) Toast.init();

  // Cópia de IP
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-copy-server-ip');
    if (!btn) return;

    const ip = btn.getAttribute('data-ip');
    if (ip) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(ip);
      } else {
        const input = document.createElement('textarea');
        input.value = ip;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }

      if (window.Toast) {
        window.Toast.show(`IP copiado para a área de transferência: ${ip}`);
      }
    }
  });

  // Simulação de oscilação leve de jogadores para dar vida à página
  setInterval(() => {
    const slotElements = document.querySelectorAll('.js-live-players');
    slotElements.forEach(el => {
      const current = parseInt(el.textContent, 10);
      if (!isNaN(current)) {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0 ou +1
        const updated = Math.max(10, current + delta);
        el.textContent = updated;
      }
    });
  }, 10000);
});
