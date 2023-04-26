// accordian menu
const menuList = document.querySelectorAll('.depth1 .list');
const btnOpen = document.querySelectorAll('.depth1 .btn-open');

btnOpen.forEach((btn, index) => {
  btn.addEventListener('click', e => {
    menuList.forEach( el => {
      el.classList.toggle('open');
    });
    
    menuList.forEach((list, index2) => {
      if( index !== index2 ){
        list.classList.remove('open');
      };
    });
  });
});

// tabmenu
const tabList = document.querySelectorAll('.tab-list');
const tabCont = document.querySelectorAll('.tab-cont');

tabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    tabList.forEach((el) => {
      el.classList.remove('active');
    });
    tabList[index].classList.add('active');

    tabCont.forEach((cont) => {
      cont.classList.remove('active');
    });
    tabCont[index].classList.add('active');
  });
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