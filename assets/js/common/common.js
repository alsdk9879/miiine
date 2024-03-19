/*
 * tab menu
 */
const tabList = document.querySelectorAll('.tabmenu-list button');
const tabCont = document.querySelectorAll('.tabmenu-cont');

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
