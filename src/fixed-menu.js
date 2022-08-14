let navbar = document.getElementById('header').classList;
let active_class = 'header__scrolled';

window.addEventListener('scroll', e => {
  if (scrollY > 350) navbar.add(active_class);
  else navbar.remove(active_class);
});
