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
    lastSnbList && lastSnbList.classList.add('active');
  }
};

/*
 work > 각 프로젝트 클릭시 modal open & close
*/

// 모달 내  프로젝트 상세정보
const popList = [
  {
    id: 'pop1',
    title: '프로젝트명',
    subTitle: '반응형 / 2024.06',
    desc: '프로젝트 설명',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: './',
    hideText: '닫기',
  },
  {
    id: 'pop2',
    title: '프로젝트명',
    subTitle: '반응형 / 2024.06',
    desc: '프로젝트 설명',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: './',
    hideText: '닫기',
  },
];

popList.forEach((el, index) => {
  const popCont = document.querySelector('.pop-wrap').insertAdjacentHTML(
    'beforeend',
    `<div class="pop" id="${popList[index].id}">
      <div class="pop-cont">
        <div class="txt-wrap">
          <h2 class="title">${popList[index].title}</h2>
          <p class="sub-title">${popList[index].subTitle}</p>
          <p class="desc">${popList[index].desc}</p>
          <div class="btn-wrap">
            <a href="${popList[index].viewPCLink}" class="btn-view-pc">PC화면 보러가기</a>
            <a href="${popList[index].viewMOLink}" target="_blank" class="btn-view-mo">모바일화면 보러가기</a>
          </div>
        </div>
        <div class="img-wrap">
          <img src="${popList[index].imgCont}" alt="img-cont">
        </div>
        <button type="button" class="btn-close"><span class="hide">닫기</span></button>
      </div>
    </div>`
  );
});

const itemProject = document.querySelectorAll('.works .work-list .item');
const pop = document.querySelectorAll('.pop');
const btnClose = document.querySelectorAll('.pop .btn-close');
const bodyWorks = document.querySelector('#portfolio01.works');

console.log(bodyWorks);

// popup open
itemProject.forEach((el, index) => {
  el.addEventListener('click', () => {
    pop.forEach((el) => {
      el.classList.remove('open');
    });
    pop[index].classList.add('open');
    bodyWorks.classList.add('pop-open');
  });
});

// popup close
btnClose.forEach((el, index) => {
  el.addEventListener('click', () => {
    pop.forEach((el) => {
      el.classList.remove('open');
    });
    bodyWorks.classList.remove('pop-open');
  });
});
