/**
 * REDE BABILÔNIA RPG - ABAS DA PÁGINA DE DOWNLOADS
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.js-download-tab');
  const panels = document.querySelectorAll('.js-download-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPlatform = tab.getAttribute('data-platform');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetPlatform}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
