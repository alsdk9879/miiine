/*
 nav fold & open
*/

const nav = document.querySelector('.nav');
const btnNavFold = document.querySelector('.nav .btn-nav-fold');

btnNavFold.addEventListener('click', () => {
  nav.classList.toggle('fold');
});
