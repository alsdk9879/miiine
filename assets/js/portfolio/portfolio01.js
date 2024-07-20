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
 lnb-list setAttribute target
*/

const lnbList = document.querySelectorAll('.lnb .lnb-list');
const arrLnbList = Array.from(lnbList);

const lnbListAbout = arrLnbList[arrLnbList.length - 2].lastElementChild;
const lnbListGithub = arrLnbList[arrLnbList.length - 1].lastElementChild;

function setAttributeTarget() {
  lnbListAbout.setAttribute('target', '_blank');
  lnbListGithub.setAttribute('target', '_blank');
}

function removeAttributeTarget() {
  lnbListAbout.removeAttribute('target');
  lnbListGithub.removeAttribute('target');
}

if (window.innerWidth <= 991.98) {
  removeAttributeTarget();
} else {
  setAttributeTarget();
}

/*
 lnb-mark move
*/

const lnbMark = document.querySelector('.lnb .lnb-mark');

function moveLnbMark() {
  lnbList.forEach((list) => {
    list.addEventListener('mouseenter', () => {
      list.classList.add('mouseover');

      const siblings = Array.from(list.parentElement.children).filter((el) => {
        return el !== list;
      });
      siblings.forEach((sibling) => {
        sibling.classList.remove('mouseover');
      });

      const lnbListRect = list.getBoundingClientRect();
      lnbMark.style.top = lnbListRect.top + 'px';
      lnbMark.style.transition = 'top 0.4s ease-in-out';

      if (window.innerWidth <= 991.98) {
        lnbMark.style.top = lnbListRect.top - 72 + 'px';
      }
    });
  });
}
moveLnbMark();

function moveLnbMarklnbOpen() {
  const lnbOpenObserver = new MutationObserver(function (el) {
    el.forEach(function (viewing) {
      if (viewing.target.classList.contains('open')) {
        const found = arrLnbList.find((el) => el.classList.contains('active'));

        lnbMark.style.top = found.offsetTop + 'px';
      }
    });
  });

  const config = {
    attributes: true,
  };

  lnbOpenObserver.observe(lnb, config);
}
moveLnbMarklnbOpen();

window.addEventListener('resize', () => {
  if (window.innerWidth <= 991.98) {
    moveLnbMarklnbOpen();
    removeAttributeTarget();
  } else {
    setAttributeTarget();
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
