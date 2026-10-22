/**
 * REDE BABILÔNIA RPG - GESTÃO & MONITORAMENTO DE SERVIDORES
 */

const ServersManager = {
  servers: [
    {
      id: 1,
      name: "Babilônia RPG #1",
      tag: "#NOVO #DESBANALL",
      ip: "jogar.babiloriarpg.com.br:7777",
      ipDisplay: "JOGAR.BABILONIARPG.COM.BR:7777",
      online: 184,
      maxSlots: 800,
      forumUrl: "#forum"
    },
    {
      id: 2,
      name: "Babilônia RPG #2",
      tag: "#NOVO #DESBANALL",
      ip: "jogar2.babiloriarpg.com.br:7777",
      ipDisplay: "JOGAR2.BABILONIARPG.COM.BR:7777",
      online: 92,
      maxSlots: 800,
      forumUrl: "#forum"
    }
  ],

  init() {
    this.renderServers();
    this.updateGlobalCounter();
    this.setupCopyButtons();
  },

  updateGlobalCounter() {
    const totalOnline = this.servers.reduce((sum, s) => sum + s.online, 0);
    const counterElements = document.querySelectorAll('.js-total-online');
    counterElements.forEach(el => {
      el.textContent = `${totalOnline} ONLINE`;
    });
  },

  renderServers() {
    const grid = document.getElementById('servers-grid');
    if (!grid) return;

    grid.innerHTML = this.servers.map((server, index) => {
      const percentage = Math.min(100, Math.round((server.online / server.maxSlots) * 100));
      return `
        <div class="server-card" data-reveal="up" data-delay="${(index + 1) * 150}">
          <div class="server-card-top">
            <div>
              <h3 class="server-name">${server.name}</h3>
              <div class="server-tags">
                <span class="badge-tag">${server.tag}</span>
              </div>
            </div>
            <div class="badge-status">
              <span class="status-dot online"></span>
              <span>${server.online}/${server.maxSlots}</span>
            </div>
          </div>

          <div class="server-ip-box">
            <span class="server-ip-text">${server.ipDisplay}</span>
            <button class="btn btn-outline btn-sm js-copy-ip" data-ip="${server.ip}" title="Copiar IP">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copiar</span>
            </button>
          </div>

          <div class="server-slots-bar">
            <div class="server-slots-fill" style="width: ${percentage}%;"></div>
          </div>
        </div>
      `;
    }).join('');

    window.dispatchEvent(new Event('serversRendered'));
  },

  setupCopyButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.js-copy-ip');
      if (!btn) return;

      const ip = btn.getAttribute('data-ip');
      if (ip) {
        this.copyToClipboard(ip);
      }
    });
  },

  async copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      if (window.Toast) {
        window.Toast.show(`IP copiado: ${text}`);
      }
    } catch (err) {
      console.error("Falha ao copiar:", err);
      if (window.Toast) {
        window.Toast.show(`IP: ${text}`);
      }
    }
  }
};

window.ServersManager = ServersManager;
