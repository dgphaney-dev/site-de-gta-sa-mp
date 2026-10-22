/**
 * REDE BABILÔNIA RPG - PÁGINA DE SUPORTE & TICKETS
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.Toast) Toast.init();

  const ticketForm = document.getElementById('form-ticket');
  if (!ticketForm) return;

  ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nick = document.getElementById('ticket-nick').value.trim();
    const category = document.getElementById('ticket-category').value;
    const message = document.getElementById('ticket-message').value.trim();

    if (!nick || !category || !message) {
      if (window.Toast) Toast.show('Preencha todos os campos do chamado!');
      return;
    }

    const ticketId = Math.floor(100000 + Math.random() * 900000);
    if (window.Toast) {
      window.Toast.show(`Ticket #${ticketId} aberto com sucesso! Nossa equipe responderá em breve.`);
    }

    ticketForm.reset();
  });
});
