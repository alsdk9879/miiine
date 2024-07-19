/*
 mo-nav open & close
*/

const btnMoNavOpen = document.querySelector('.btn-mo-nav-open');
const moNav = document.querySelector('.mo-nav');

btnMoNavOpen.addEventListener('click', () => {
  btnMoNavOpen.classList.toggle('active');
  moNav.classList.toggle('open');
});
