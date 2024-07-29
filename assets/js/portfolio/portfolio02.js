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
 shape size calculate
*/

const shapeHalfmoon = document.querySelector('.shape.halfmoon');
const shapeCircleTextLine = document.querySelector('.shape.circle-text-line');

function calcShapeStyle() {
  const shapeHeight = shapeHalfmoon.clientWidth / 2;

  shapeHalfmoon.style.height = shapeHeight + 'px';
  shapeHalfmoon.style.borderRadius = `0 0 ${shapeHeight}px ${shapeHeight}px`;
  shapeHalfmoon.style.bottom = -(shapeHeight / 15.666) + '%';

  shapeCircleTextLine.style.width = (window.innerWidth - 228) / 2.68 + 'px';
  shapeCircleTextLine.style.height = (window.innerWidth - 228) / 2.68 + 'px';

  console.log(window.innerWidth);
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

  if (lastScrollY < scrollY) {
    shapeHalfmoon.style.transform = 'rotate(12deg)';
  }
  lastScrollY = scrollY;

  let translateX = scrollY * 0.7;
  let translateY = translateX / 4;

  shapeBall.style.transform = 'translateY(' + translateY + 'px) translateX(' + translateX + 'px) rotate(' + translateY + 'deg';

  if (scrollY < 100) {
    shapeHalfmoon.style.transform = 'rotate(0deg)';
  }

  if (scrollY > 500) {
    document.querySelectorAll('.underline').forEach((el) => {
      el.classList.add('draw');
    });
  }
});
