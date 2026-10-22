/**
 * REDE BABILÔNIA RPG - SISTEMA DE TOAST NOTIFICATIONS
 */

const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast';
      this.container.id = 'app-toast';
      this.container.innerHTML = `
        <span class="toast-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="toast-msg">Mensagem</span>
      `;
      document.body.appendChild(this.container);
    }
  },

  show(message, duration = 3000) {
    this.init();
    const msgElement = this.container.querySelector('.toast-msg');
    if (msgElement) {
      msgElement.textContent = message;
    }

    this.container.classList.add('show');

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.container.classList.remove('show');
    }, duration);
  }
};

window.Toast = Toast;
