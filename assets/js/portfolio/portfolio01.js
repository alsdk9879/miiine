/*
 lnb open & fold 
*/

const lnb = document.querySelector('.lnb');
const btnLnbFold = document.querySelector('.lnb .btn-lnb-fold');

btnLnbFold &&
  btnLnbFold.addEventListener('click', () => {
    lnb.classList.toggle('fold');
  });

window.addEventListener('resize', () => {
  if (window.innerWidth <= 991.98) {
    lnb && lnb.classList.remove('fold');
  }
});

/*
 mobile :: nav open & close
*/

const btnNavOpen = document.querySelector('.nav .btn-nav-open');

btnNavOpen &&
  btnNavOpen.addEventListener('click', () => {
    lnb.classList.toggle('open');
  });

/*
 accordion
*/

const accordionHeader = document.querySelectorAll('.accordion .accordion-header');

function onToggleAccordion(e) {
  const accordionList = e.currentTarget.parentElement;
  const accordionBody = e.currentTarget.nextElementSibling;

  if (!accordionList.classList.contains('open')) {
    accordionList.classList.add('open');
    accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
  } else {
    accordionBody.style.maxHeight = 0;
    accordionList.classList.remove('open');
  }
}

accordionHeader && accordionHeader.forEach((el) => el.addEventListener('click', onToggleAccordion));

/*
 modal
*/

/*
 about > 스크롤시 해당 섹션에 따라 우측 snb active
*/

document.querySelectorAll('.snb .snb-list').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function scrollProgress() {
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

  document.querySelectorAll('.section').forEach((el, index) => {
    const snbListIndex = document.querySelector('.snb .snb-list:nth-child(' + (index + 1) + ')');

    if (scrollTop >= el.offsetTop - 100) {
      document.querySelectorAll('.snb .snb-list').forEach((el) => {
        el.classList.remove('active');
      });
      snbListIndex && snbListIndex.classList.add('active');
    }
  });
}
window.addEventListener('scroll', scrollProgress);

window.onscroll = function () {
  const lastSnbList = document.querySelector('.snb .snb-list:last-child');

  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    document.querySelectorAll('.snb .snb-list').forEach((el) => {
      el.classList.remove('active');
    });
    lastSnbList.classList.add('active');
  }
};
