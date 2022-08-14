(() => {
  const mapBtnOpen = document.querySelector('[data-modal-open-fr');
  const mapBtnClose = document.querySelector('[data-modal-close-fr]');
  const map = document.querySelector('[data-modal-fr]');
  const htmlmaplock = document.querySelector('body');

  const toggleMenu = () => {
    map.classList.toggle('fr-is-hidden');
    htmlmaplock.classList.toggle('overflow-hidden');
  };
  mapBtnOpen.addEventListener('click', toggleMenu);
  mapBtnClose.addEventListener('click', toggleMenu);
})();

(() => {
  const cardBtn = document.querySelector('[data-gr-btn');
  const card = document.querySelector('[data-gr]');

  const toggleMenu = () => {
    card.classList.toggle('gr-is-hidden');
  };
  cardBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    card.classList.add('gr-is-hidden');
  });
})();
