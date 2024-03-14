/*
  side-menubar open & fold
*/
document.querySelector('#header .btn-menubar').addEventListener('click', () => {
  document.querySelector('#nav').classList.add('open');
});

document.querySelector('#nav .btn-menubar').addEventListener('click', () => {
  if (window.innerWidth > 1299.98) {
    document.querySelector('#layout').classList.toggle('fold');
  } else {
    document.querySelector('#nav').classList.toggle('open');
  }
});

document.querySelector('#nav .btn-close').addEventListener('click', () => {
  document.querySelector('#nav').classList.remove('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1299.98) {
    document.querySelector('#layout').classList.remove('fold');
  }
});
