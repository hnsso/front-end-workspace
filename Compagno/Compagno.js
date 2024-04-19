// Header >>>>  색변환 !!
$(function () {
  var $header = $("header"); //헤더를 변수에 넣기
  var $page = $(".page-start"); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기

  $window.resize(function () {
    //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });

  $window.on("scroll", function () {
    //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass("down", scrolled); //클래스 토글
  });
});

//
var burger = $(".menu-trigger");

burger.each(function (index) {
  var $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-" + (index + 1));
  });
});

// ========================================================== section1
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add("animating");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("animating");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});

// =========================================================== section3

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $(".scroll").text(scroll);

  let offset = scroll - $("#section2").offset().top;

  if (scroll > $("#section2").offset().top) {
    $(".sec3").css({ left: -offset + "px" });
  }
});

// ========================= 흐르는 베너 js ================================

// section4 스크롤시 가로로 움직이는 폰트 효과
let didScroll = false;
let paralaxTitles = document.querySelectorAll(".paralax-title");

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
    });
    didScroll = false;
  }
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollInProgress);
