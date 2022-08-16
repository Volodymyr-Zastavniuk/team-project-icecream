(() => {
  const cardBtn = document.querySelector('[data-hero-text-btn');
  const card = document.querySelector('[data-hero-text]');

  const toggleMenu = () => {
    card.classList.toggle('hero-text-is-open');
  };
  cardBtn.addEventListener('click', toggleMenu);
})();
