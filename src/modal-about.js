(() => {
  const mapBtnOpen = document.querySelector('[data-modal-open-about');
  const mapBtnClose = document.querySelector('[data-modal-close-about]');
  const map = document.querySelector('[data-modal-about]');
  const htmlmaplock = document.querySelector('body');

  const toggleMenu = () => {
    map.classList.toggle('about-is-hidden');
    htmlmaplock.classList.toggle('overflow-hidden');
  };
  mapBtnOpen.addEventListener('click', toggleMenu);
  mapBtnClose.addEventListener('click', toggleMenu);
})();
