(() => {
  const menuBtnOpen = document.querySelector('[data-menu-button-open]');
  const menuBtnClose = document.querySelector('[data-menu-button-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const htmlLock = document.querySelector('html');
  const mobileMenuLink = document.querySelector('[data-menu-link]');

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    menuBtnOpen.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    htmlLock.classList.toggle('overflow-hidden');
  };
  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);
  mobileMenuLink.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuBtnOpen.setAttribute('aria-expanded', false);
    htmlLock.classList.remove('overflow-hidden');
  });
})();

//
// menuBtnOpen.addEventListener('click', () => {
//   const expanded =
//     menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;

//   menuBtnOpen.classList.toggle('is-open');
//   menuBtnOpen.setAttribute('aria-expanded', !expanded);

//   mobileMenu.classList.toggle('is-open');
//   htmlLock.classList.toggle('overflow-hidden');
// });

// // Close the mobile menu if close button is pushed
// menuBtnRefClose.addEventListener('click', () => {
//   mobileMenu.classList.remove('is-open');
//   menuBtnOpen.classList.remove('is-open');
//   menuBtnOpen.setAttribute('aria-expanded', false);
//   htmlLock.classList.remove('overflow-hidden');
// });

// // Close the mobile menu if link is pushed
// mobileMenuLink.addEventListener('click', () => {
//   mobileMenu.classList.remove('is-open');
//   menuBtnOpen.classList.remove('is-open');
//   menuBtnOpen.setAttribute('aria-expanded', false);
//   htmlLock.classList.remove('overflow-hidden');
// });

// Для двух кнопок переделать

//   () => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');

//     const toggleMenu = () => {
//       const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');

//       const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };

//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
//   };
// })();
