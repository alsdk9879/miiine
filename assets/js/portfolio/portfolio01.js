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
 lnb-mark move
*/

const lnbList = document.querySelectorAll('.lnb .lnb-list');

console.log(lnbList);

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
    title: '통일플러스센터',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '통일부와 지역사회가 함께하는 통일 참여 소통 종합 플렛폼인 통일플러스센터 웹 사이트를 유지 보수하고 있습니다.<br>기존 소스를 기준으로 일부 수정 및 추가 기능에 대하여 퍼블리싱을 전면 담당하고 있습니다.',
    period: '2024.05 ~ ',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'https://www.unipluscenter.go.kr/web/main',
    viewMOLink: 'https://www.unipluscenter.go.kr/web/main',
    imgCont: '../../images/portfolio/project/img_project1.png',
    hideText: '닫기',
  },
  {
    id: 'pop2',
    title: 'LH 마이홈',
    part: '퍼블리싱',
    contribution: '기여도 : 50%',
    desc: '허브 화면, 메인 화면의 일부 영역, 로그인 화면, 각 상세 화면, 메일링 화면 등을 맡아 퍼블리싱 하였습니다.<br>기한이 예상보다 촉박하여 빠르고 효율적인 진행이 필요했는데, 이전의 컴포넌트화하여 작업하였던 경험으로 좀 더 수월하게 진행되어 뿌듯하였습니다.',
    period: '2023.08 ~ 2024.02',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'https://www.myhome.go.kr/hws/portal/main/getMgtMainHubPage.do',
    viewMOLink: 'https://m.myhome.go.kr/hws/portal/main/getMgtMainHubPage.do',
    imgCont: '../../images/portfolio/project/img_project2.png',
    hideText: '닫기',
  },
  {
    id: 'pop3',
    title: '서울시 지능형 가로등 점·소등 시스템',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '난이도 있는 SVG 동작 방식 이해를 통해 클라이언트가 원하는 서울시 지도 내 효과 적용을 성공시켰고, Slack을 통해 개발자들과 빠른 소통 경험이 있습니다.',
    period: '2023.09 ~ 2024.01',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'javascript:void(0);',
    viewMOLink: 'javascript:void(0);',
    imgCont: '../../images/portfolio/project/img_project3.png',
    hideText: '닫기',
  },
  {
    id: 'pop4',
    title: '제주 ITS 통합플랫폼',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '대시보드 각 탭에 해당하는 메인화면을 작업하였고, Chart.js 라이브러리를 사용하여 차트 내 효과 및 스타일 반영 가능한 스크립트 적용을 성공시켰습니다.',
    period: '2023.08 ~ 2023.09',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'javascript:void(0);',
    viewMOLink: 'javascript:void(0);',
    imgCont: '../../images/portfolio/project/img_project4.png',
    hideText: '닫기',
  },
  {
    id: 'pop5',
    title: 'Shop GPT ai',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '사내 자사 서비스로 런칭한 ai를 활용하여 인터넷 쇼핑을 할 수 있는 반응형 웹 사이트를 전면 담당하여 퍼블리싱 하였습니다.<br>사수가 개입되지 않은 상황에서 사용자 화면을 퍼블리싱 하며 내부 개발자와 원활하게 소통하였고, 개발 도중 생긴 이슈를 전달받아 개발자와 같이 해결한 경험이 있습니다.',
    period: '2023.07 ~ 2023.10',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'javascript:void(0);',
    viewMOLink: 'javascript:void(0);',
    imgCont: '../../images/portfolio/project/img_project5.png',
    hideText: '닫기',
  },
  {
    id: 'pop6',
    title: '사내 홈페이지 리뉴얼',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: 'GSAP, fullpage.js, AOS, locomotive scroll 라이브러리를 사용하여 모션적인 반응형 사이트를 제작하였고, 회사 길찾기 영역에서 카카오 맵 API를 활용하여 디자이너가 원하는 스타일대로 수정한 경험이 있습니다. 디자인, 퍼블리싱, 개발 각 포지션마다 사수가 개입되지 않고 담당 실무자끼리 협업하여 사이트를 오픈한 첫 번째 프로젝트입니다.',
    period: '2023.05',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'https://infinitum.co.kr/',
    viewMOLink: 'https://infinitum.co.kr/',
    imgCont: '../../images/portfolio/project/img_project6.png',
    hideText: '닫기',
  },
  {
    id: 'pop7',
    title: '현대경제연구원',
    part: '퍼블리싱',
    contribution: '기여도 : 50%',
    desc: '처음으로 진행하게 된 구축 작업인지라 스타일 가이드를 토대로 가장 효과적으로 컴포넌트화하는 것도 쉽지 않았지만, 계속 배우고 경험하며 이를 토대로 사내 퍼블리싱 가이드를 새로 제작하여 이후 프로젝트 시 활용하게 되면서 빠른 작업 진행에 기여하였습니다. Draggable.js 라이브러리 사용하여 클라이언트가 원하는 효과를 만족시켰다고 전달받은 바 있습니다.',
    period: '2023.01 ~ 2023.03',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'javascript:void(0);',
    viewMOLink: 'javascript:void(0);',
    imgCont: '../../images/portfolio/project/img_project7.png',
    hideText: '닫기',
  },
  {
    id: 'pop8',
    title: 'SK이노베이션',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '오픈 일정을 고려하여 내부 개발자들의 관리자 화면 지원 요청을 받아 화면 설계서만을 참고하며 해당 작업을 진행하게 되었습니다. 그러면서 관리자 화면의 기본적이 스타일을 알게 되었고, 등록·수정·목록 화면을 퍼블리싱 하며 평소 헷갈려 했던 Table 태그에 관해 제대로 인지하게 되었습니다.',
    period: '2022.09',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'javascript:void(0);',
    viewMOLink: 'javascript:void(0);',
    imgCont: '../../images/portfolio/project/img_project8.png',
    hideText: '닫기',
  },
  {
    id: 'pop9',
    title: '헤이폴',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '처음으로 전면 담당하여 맡게 된 프로젝트입니다. 기존 소스를 토대로 pc, 모바일 각 일부 영역을 수정하며 운영하였습니다. 모바일 메인화면 및 회원등급 기능에 대한 개편 작업도 맡아서 하였고, 해당 작업 시 Chart.js를 사용하면서 개발자가 작업하기 편하게 넘겨주었다고 좋은 평가를 받은 바 있습니다.',
    period: '2022.01 ~ 2022.12',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'https://www.heypoll.co.kr/',
    viewMOLink: 'https://www.heypoll.co.kr/mobile',
    imgCont: '../../images/portfolio/project/img_project9.png',
    hideText: '닫기',
  },
  {
    id: 'pop10',
    title: '홈씨씨몰',
    part: '퍼블리싱',
    contribution: '기여도 : 50%',
    desc: '새로 마크업 하는 영역도 있었지만 기존 코드를 보며 수정해야 하는 경우에는 코드 파악부터 어떻게 해야 가장 효율적인 작업이 될지 고민이 많았던 프로젝트였습니다. css나 라이브러리 사용에 있어 사수분께 여러 가지 스킬을 배울 수 있었습니다. 그리고 처음 맡게 된 프로젝트인 만큼 부족함이 많아 작업 도중 외부 디자이너에게 많은 수정 작업을 재요청 받게 된 적이 있어 기억에 남는 프로젝트이기도 합니다.',
    period: '2021.12 ~ 2022.12',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: 'https://www.homecc.com/',
    viewMOLink: 'https://www.homecc.com/',
    imgCont: '../../images/portfolio/project/img_project10.png',
    hideText: '닫기',
  },
];

popList.forEach((el, index) => {
  const popCont = document.querySelector('.pop-wrap').insertAdjacentHTML(
    'beforeend',
    `<div class='pop' id='${popList[index].id}'>
      <div class='pop-cont-wrap'>
        <div class='pop-cont'>
          <div class='text-wrap'>
            <h2 class='title'>${popList[index].title}</h2>
            <p class='part'>${popList[index].part}</p>
            <p class='contribution'>${popList[index].contribution}</p>
            <p class='desc'>${popList[index].desc}</p>
            <p class='period'>${popList[index].period}</p>
            <div class='btn-wrap'>
              <a href='${popList[index].viewPCLink}' target='_blank' class='btn-view-pc'>PC화면 보러가기</a>
              <a href='${popList[index].viewMOLink}' target='_blank' class='btn-view-mo'>모바일화면 보러가기</a>
            </div>
          </div>
          <div class='img-wrap'>
            <img src='${popList[index].imgCont}' alt='img-cont'>
          </div>
          <button type='button' class='btn-close'><span class='hide'>닫기</span></button>
        </div>
      </div>
    </div>`
  );
});

const itemProject = document.querySelectorAll('.works .work-list .item');
const pop = document.querySelectorAll('.pop');
const btnClose = document.querySelectorAll('.pop .btn-close');
const bodyWorks = document.querySelector('#portfolio01.works');

// popup open
itemProject.forEach((el, index) => {
  el.addEventListener('click', () => {
    pop.forEach((el) => {
      el.classList.remove('open');
    });
    pop[index].classList.add('open');
    bodyWorks.classList.add('pop-open');

    // if (window.innerWidth < 1200) {
    //   pop[index].classList.remove('open');
    //   bodyWorks.classList.remove('pop-open');
    // }
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
