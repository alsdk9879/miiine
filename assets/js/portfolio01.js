// 마우스커서 움직임 효과
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {duration: 0.3, left: e.pageX -5, top:e.pageY -5})
    gsap.to(follower, {duration: 0.8, left: e.pageX -15, top:e.pageY -15})
});


// header 상단바 스크롤시 hide & show
let nowScrollTop;
let lastScrollTop = 0;

function hasScroll(){
  const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  const headerNav = document.querySelector("#header");

  if( scrollTop > lastScrollTop ){
    headerNav.classList.add("hide");
  } else {
    headerNav.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
}

function scrollProgress(){
  nowScrollTop = true;

  setTimeout(() => {
    if( nowScrollTop ){
      nowScrollTop = false;
      hasScroll();
    };
  }, 300);
};
window.addEventListener("scroll", scrollProgress);


// section1
// section3
// title 스크롤시 좌우이동
function titleTransform(){
  const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

  const offset1 = (scrollTop - document.querySelector(".cont-wrap").offsetTop) * 0.3;
  const offset2 = (scrollTop - document.querySelector(".cont-wrap").offsetTop) * 0.1;

  document.querySelector("#section1 .txt1").style.transform = "translateX(" + offset1 + "px)";
  document.querySelector("#section1 .txt2").style.transform = "translateX(" + -offset1 + "px)";
  document.querySelector("#section1 .txt3").style.transform = "translateX(" + offset1 + "px)";
  document.querySelector("#section1 .txt3 .tag").style.transform = "translate(0, " + -offset2 + "px)";
  document.querySelector("#section1 .txt4").style.transform = "translateX(" + -offset1 + "px)";
  document.querySelector("#section1 .txt4 .tag").style.transform = "translate(0, " + -offset2 + "px)";
  document.querySelector("#section1 .main-img-wrap").style.transform = "translate(-50%, " + -offset2 + "px)";

  document.querySelector("#section3 .txt2").style.transform = "translateX(" + -offset1 + "px)";
  document.querySelector("#section3 .txt3").style.transform = "translateX(" + offset1 + "px)";

  ( scrollTop === 0 ) ? document.querySelector(".main-img-wrap").style.transform = "translate(-50%, 0px)" : "";
  
}
window.addEventListener("scroll", titleTransform);


// section2
// section4
// accordion-name 클릭시 toggle
const accordionList = document.querySelectorAll(".accordion-list");

accordionList.forEach( list => {
  list.addEventListener("click", name => {
    if( name !== list ){
      list.classList.toggle("show");
    };
  });
});

// 스크롤시 각 list 하나씩 나타나기
function indicateAccordionList(){
  const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  
  const accordionList = document.querySelectorAll(".accordion-list");
  const projectList = document.querySelectorAll(".project-list");

  accordionList.forEach( list => {
    if( scrollTop > list.offsetTop ){
      list.classList.add("indicate");
    } else {
      list.classList.remove("indicate");
    };
  });

  projectList.forEach( list => {
    scrollTop > list.offsetTop - 500 ? list.classList.add("show") : list.classList.remove("show");
  })
};
window.addEventListener("scroll", indicateAccordionList);


// section5
// slick slider
$("#section5 .slider-aboutMe").slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  infinite: false,
});


// section6
// backgroundChange
function backgroundChange(){
  const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  const section6ScrollTop = document.querySelector("#section6").offsetTop;
  const section7ScrollTop = document.querySelector("#section7").offsetTop;

  if( scrollTop >= section6ScrollTop && scrollTop <= section7ScrollTop ){
    document.querySelector("body").dataset.theme = "light";
  } else {
    document.querySelector("body").dataset.theme = "dark";
  }
};
window.addEventListener("scroll", backgroundChange);





