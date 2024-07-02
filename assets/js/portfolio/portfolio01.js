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
    title: '통일플러스센터',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '통일부와 지역사회가 함께하는 통일 참여 소통 종합 플렛폼인 통일플러스센터 웹 사이트를 유지보수하고 있습니다.<br>기존 소스를 기준으로 일부 수정 및 추가 기능에 대하여 퍼블리싱을 전면 담당하고 있습니다.',
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
    desc: '국토교통부와 한국토지주택공사가 운영하고 있는 국민 주거복지 종합포털의 UI/UX를 전면 개편하였습니다.<br>허브 화면, 메인 화면의 일부 영역, 로그인 화면, 각 상세 화면, 메일링 화면 등을 맡아 퍼블리싱 하였고, 협업시 빠르고 효율적인 진행을 위해 공통 영역은 컴포넌트화 하여 작업하였습니다.',
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
    desc: '서울시 내 가로등 점·소등 시스템 관리를 위한 플랫폼을 전면 담당하여 구축하였습니다. 난이도 있는 SVG 동작 방식 이해를 통해 클라이언트가 원하는 서울시 지도 내 효과 적용을 성공시켰고, Slack을 통해 개발자들과 빠른 소통 경험이 있습니다.',
    period: '2023.09 ~ 2024.01',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: '../../images/portfolio/project/img_project3.png',
    hideText: '닫기',
  },
  {
    id: 'pop4',
    title: '제주 ITS 통합플랫폼',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '제주특별자치도 지능형교통체계 관련한 플랫폼 고도화를 전면 담당하여 퍼블리싱 하였습니다.<br>',
    period: '2023.08 ~ 2023.09',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: '../../images/portfolio/project/img_project4.png',
    hideText: '닫기',
  },
  {
    id: 'pop5',
    title: 'Shop GPT ai',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '사내 자사서비스로 런칭한 ai를 활용하여 인터넷 쇼핑을 할 수 있는 반응형 웹 사이트를 전면 담당하여 퍼블리싱 하였습니다.',
    period: '2023.07 ~ 2023.10',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: '../../images/portfolio/project/img_project5.png',
    hideText: '닫기',
  },
  {
    id: 'pop6',
    title: '사내 홈페이지 리뉴얼',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: '사내 홈페이지 리뉴얼 퍼블리싱을 담당하여 모션적인 반응형 웹 사이트를 제작하였습니다.',
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
    desc: '현대경제연구원 관리자 및 사용자를 위한 학습플랫폼 반응형 사이트를 전면 구축하였습니다.',
    period: '2023.01 ~ 2023.03',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: '../../images/portfolio/project/img_project7.png',
    hideText: '닫기',
  },
  {
    id: 'pop8',
    title: 'SK이노베이션',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: 'SK이노베이션 구축사업에 필요한 관리자 화면 지원 요청을 받아 해당 화면 퍼블리싱 하였습니다.',
    period: '2022.09',
    btnViewPC: 'PC화면 보러가기',
    btnViewMO: '모바일화면 보러가기',
    viewPCLink: '#',
    viewMOLink: '#',
    imgCont: '../../images/portfolio/project/img_project8.png',
    hideText: '닫기',
  },
  {
    id: 'pop9',
    title: '헤이폴',
    part: '퍼블리싱',
    contribution: '기여도 : 100%',
    desc: 'SM C&C에서 런칭한 서베이를 통해 앱테크가 가능한 헤이폴 서비스 IT 운영을 대행하였습니다.',
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
    desc: 'KCC글라스의 인테리어 전문 온라인 쇼핑몰인 홈씨씨몰 웹 사이트의 고도화 및 운영 작업하였습니다.',
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
          <div class='txt-wrap'>
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

    if (window.innerWidth < 1200) {
      pop[index].classList.remove('open');
      bodyWorks.classList.remove('pop-open');
    }
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
