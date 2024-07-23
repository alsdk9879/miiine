/*
 AOS
*/
AOS.init({
  duration: 1200,
  offset: 10,
});

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
 shape halfmoon height
*/

const shape = document.querySelector('.shape.halfmoon');

function calcShapeStyle() {
  const shapeHeight = shape.clientWidth / 2;
  shape.style.height = shapeHeight + 'px';
  shape.style.borderRadius = `0 0 ${shapeHeight}px ${shapeHeight}px`;
}
calcShapeStyle();

window.addEventListener('resize', () => {
  calcShapeStyle();
});

/*
 스크롤에 따라 요소 애니메이션
*/

const shapeBall = document.querySelector('.sec-main .shape-ball img');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  // console.log(scrollY);

  if (lastScrollY < scrollY) {
    shape.style.transform = 'rotate(15deg)';
  }
  lastScrollY = scrollY;

  let translateX = scrollY * 0.7;
  let translateY = translateX / 4;

  shapeBall.style.transform = 'translateY(' + translateY + 'px) translateX(' + translateX + 'px) rotate(' + translateY + 'deg';

  if (scrollY < 100) {
    shape.style.transform = 'rotate(0deg)';
  }
});
