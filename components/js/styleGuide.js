// nav 클릭하면 이동
document.querySelectorAll('.nav .nav-link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function scrollProgress() {
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

  document.querySelectorAll('.guide-inner-wrap').forEach((el, index) => {
    if (scrollTop >= el.offsetTop - 100) {
      document.querySelectorAll('.nav .nav-link').forEach((el) => {
        el.classList.remove('active');
      });
      document.querySelector('.nav .nav-link:nth-child(' + (index + 1) + ')').classList.add('active');
    }
  });
}
window.addEventListener('scroll', scrollProgress);

// datepicker
const rangePicker = new DateRangePicker(document.querySelector('#dashbrdRangePicker'), {
  autohide: true,
  language: 'ko',
});

// btn-eye on & off
const btnEye = document.querySelectorAll('.btn-eye');

btnEye.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('show');
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
