/*
 mo-nav open & close
*/

const btnMoNavOpen = document.querySelector('.btn-mo-nav-open');
const moNav = document.querySelector('.mo-nav');

btnMoNavOpen.addEventListener('click', () => {
  btnMoNavOpen.classList.toggle('active');
  moNav.classList.toggle('open');
});

/*
 main > shape halfmoon height
*/

const shape = document.querySelector('.shape.halfmoon');
const shapeHeight = shape.clientWidth / 2;

shape.style.height = shapeHeight + 'px';
shape.style.borderRadius = `0 0 ${shapeHeight}px ${shapeHeight}px`;

/*
 스크롤에 따라 요소 애니메이션
*/

const imgMainBall = document.querySelector('.sec-main .shape-ball');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  console.log(scrollY);

  if (lastScrollY < scrollY) {
    shape.style.transform = 'rotate(15deg)';
  } else {
    shape.style.transform = 'rotate(0)';
  }
  lastScrollY = scrollY;

  let translateY = (scrollY - 150) * 0.7;
  let translateX = (scrollY - 150) * 0.7;

  imgMainBall.style.transform = 'translateY(' + translateY + 'px) translateX(' + translateX + 'px) rotate(' + translateY + 'deg';

  if (scrollY == 0) {
    imgMainBall.style.transform = 'translate(-50%, -12%)';
  }
});
