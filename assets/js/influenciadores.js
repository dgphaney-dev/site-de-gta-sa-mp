/**
 * REDE BABILÔNIA RPG - FORMULÁRIO DE INFLUENCIADORES & PARCERIAS
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.Toast) Toast.init();

  const form = document.getElementById('form-parceria');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nick = document.getElementById('partner-nick').value.trim();
    const channel = document.getElementById('partner-channel').value.trim();

    if (!nick || !channel) {
      if (window.Toast) Toast.show('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Sucesso simulado
    if (window.Toast) {
      window.Toast.show('Inscrição enviada com sucesso! Analisaremos seu canal em breve.');
    }
    form.reset();
  });
});
