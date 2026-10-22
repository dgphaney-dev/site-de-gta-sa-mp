/**
 * REDE BABILÔNIA RPG - CARROSSEL INTERATIVO DE SISTEMAS COM AUTOPLAY
 */

const SystemsTabs = {
  currentIndex: 0,
  duration: 5000, // 5 segundos por slide
  intervalId: null,
  progressIntervalId: null,
  progressStartTime: 0,
  isPaused: false,

  init() {
    this.tabButtons = document.querySelectorAll('.js-system-tab');
    this.slides = document.querySelectorAll('.js-system-slide');
    this.progressBar = document.getElementById('tab-progress-bar');

    if (!this.tabButtons.length || !this.slides.length) return;

    this.bindEvents();
    this.goToSlide(0);
  },

  bindEvents() {
    this.tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.goToSlide(index);
      });
    });

    const container = document.getElementById('systems-container');
    if (container) {
      container.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      container.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    }
  },

  goToSlide(index) {
    this.currentIndex = index;

    // Atualiza botões
    this.tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    // Atualiza slides
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Reinicia o timer e a barra de progresso
    this.startProgress();
  },

  startProgress() {
    if (this.progressIntervalId) {
      clearInterval(this.progressIntervalId);
    }

    if (this.progressBar) {
      this.progressBar.style.width = '0%';
    }

    let elapsed = 0;
    const stepTime = 50;

    this.progressIntervalId = setInterval(() => {
      if (!this.isPaused) {
        elapsed += stepTime;
        const progressPercent = Math.min(100, (elapsed / this.duration) * 100);

        if (this.progressBar) {
          this.progressBar.style.width = `${progressPercent}%`;
        }

        if (elapsed >= this.duration) {
          clearInterval(this.progressIntervalId);
          const nextIndex = (this.currentIndex + 1) % this.slides.length;
          this.goToSlide(nextIndex);
        }
      }
    }, stepTime);
  }
};

window.SystemsTabs = SystemsTabs;
