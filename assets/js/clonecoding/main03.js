// accordion menu
const accMenuTItle = document.getElementsByClassName('accordion-menu-title');

for (let i = 0; i < accMenuTItle.length; i++) {
  accMenuTItle[i].addEventListener('click', function() {
    this.classList.toggle('open');

    const accSubList = this.nextElementSibling;

    if (accSubList.style.display === 'block') {
      accSubList.style.display = 'none';
    } else {
      accSubList.style.display = 'block';
    };
  });
};

// all-content-wrap tabmenu
const allContTabList = document.querySelectorAll('.all-content-wrap .tab-list');
const allContTabCont = document.querySelectorAll('.all-content-wrap .tab-cont');

allContTabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    allContTabList.forEach((el) => {
      el.classList.remove('active');
    });
    allContTabList[index].classList.add('active');

    allContTabCont.forEach((cont) => {
      cont.classList.remove('active');
    });
    allContTabCont[index].classList.add('active');
  });
});

// popular-content-wrap tabmenu
const popularContTabList = document.querySelectorAll('.popular-content-wrap .tab-list');
const popularContTabCont = document.querySelectorAll('.popular-content-wrap .tab-cont');

popularContTabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    popularContTabList.forEach((el) => {
      el.classList.remove('active');
    });
    popularContTabList[index].classList.add('active');

    popularContTabCont.forEach((cont) => {
      cont.classList.remove('active');
    });
    popularContTabCont[index].classList.add('active');
  });
});

// header 스크롤시 background
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if( window.scrollY > headerHeight ) {
    header.classList.add('bg');
  } else {
    header.classList.remove('bg');
  }
});

// header noti list & mypage modal
// const noti = document.querySelector('.btn-noti');
// const notiList = document.querySelector('.notification');
// const profile = document.querySelector('.btn-profile');
// const profileMenu = document.querySelector('.profile-menu');
// noti.addEventListener('click', (event) => {
//   event.currentTarget.nextElementSibling.classList.add('open');
// });

// notiList.addEventListener('click', (event) => {
//   if (event.target.classList.contains('notification')) event.currentTarget.classList.remove('open');
// });

// profile.addEventListener('click', (event) => {
//   event.currentTarget.nextElementSibling.classList.add('open');
// });

// profileMenu.addEventListener('click', (event) => {
//   if (event.target.classList.contains('profile-menu')) event.currentTarget.classList.remove('open');
// });