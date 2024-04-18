var burger = $(".menu-trigger");

burger.each(function (index) {
  var $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-" + (index + 1));
  });
});

// =========================================================== section3

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $(".scroll").text(scroll);

  let offset = scroll - $("#section3").offset().top;

  if (scroll > $("#section3").offset().top) {
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
