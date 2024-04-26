// // // Header >>>>  색변환 !!
// // $(function () {
// //   var $header = $("header"); //헤더를 변수에 넣기
// //   var $page = $(".page-start"); //색상이 변할 부분
// //   var $window = $(window);
// //   var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기

// //   $window.resize(function () {
// //     //반응형을 대비하여 리사이즈시 top값을 다시 계산
// //     pageOffsetTop = $page.offset().top;
// //   });

// //   $window.on("scroll", function () {
// //     //스크롤시
// //     var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
// //     $header.toggleClass("down", scrolled); //클래스 토글
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   var header = document.querySelector("header"); // 헤더 요소를 변수에 저장합니다.
//   var page = document.querySelector(".page-start"); // 색상이 변할 부분을 변수에 저장합니다.
//   var window = window;
//   var pageOffsetTop = page.getBoundingClientRect().top + window.scrollY; // 색상이 변할 부분의 top 값을 구합니다.

//   window.addEventListener("resize", function () {
//     // 반응형을 대비하여 리사이즈할 때 top 값을 다시 계산합니다.
//     pageOffsetTop = page.getBoundingClientRect().top + window.scrollY;
//   });

//   window.addEventListener("scroll", function () {
//     // 스크롤할 때
//     var scrolled = window.scrollY >= pageOffsetTop; // 스크롤된 상태를 판단합니다.
//     header.classList.toggle("down", scrolled); // 클래스를 토글하여 적용합니다.
//   });
// });

// // ========================================================== 햄버거 메뉴
// // var burger = $(".menu-trigger");

// // burger.each(function (index) {
// //   var $this = $(this);

// //   $this.on("click", function (e) {
// //     e.preventDefault();
// //     $(this).toggleClass("active-" + (index + 1));
// //   });
// // });

// // $("#toggle").click(function () {
// //   $("#toggle .bar").toggleClass("animate");
// //   $("#page").toggleClass("overlay");
// // });
// // -=============================================================

// // #toggle 요소에 클릭 이벤트를 추가합니다.
// document.getElementById("toggle").addEventListener("click", function () {
//   // #toggle .bar 요소에 animate 클래스를 토글합니다.
//   document.querySelector("#toggle .bar").classList.toggle("animate");
//   // #page 요소에 overlay 클래스를 토글합니다.
//   document.getElementById("page").classList.toggle("overlay");
// });
// // ========================================================== section1
// document.addEventListener("DOMContentLoaded", function () {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.4,
//   };

//   // IMAGE ANIMATION

//   let revealCallback = (entries) => {
//     entries.forEach((entry) => {
//       let container = entry.target;

//       if (entry.isIntersecting) {
//         console.log(container);
//         container.classList.add("animating");
//         return;
//       }

//       if (entry.boundingClientRect.top > 0) {
//         container.classList.remove("animating");
//       }
//     });
//   };

//   let revealObserver = new IntersectionObserver(revealCallback, options);

//   document.querySelectorAll(".reveal").forEach((reveal) => {
//     revealObserver.observe(reveal);
//   });

//   // TEXT ANIMATION

//   let fadeupCallback = (entries) => {
//     entries.forEach((entry) => {
//       let container = entry.target;
//       container.classList.add("not-fading-up");

//       if (entry.isIntersecting) {
//         container.classList.add("fading-up");
//         return;
//       }

//       if (entry.boundingClientRect.top > 0) {
//         container.classList.remove("fading-up");
//       }
//     });
//   };

//   let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

//   document.querySelectorAll(".fadeup").forEach((fadeup) => {
//     fadeupObserver.observe(fadeup);
//   });
// });
// // ================== section2 폰트 active 관련 =========================

// $(document).ready(function () {
//   // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
//   const $counters = $(".scroll_on");

//   const scroll = document.querySelectorAll(".scroll_on").addEventListener();

//   // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
//   const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
//   const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

//   // 윈도우의 스크롤 이벤트를 모니터링합니다.
//   $(window)
//     .on("scroll", function () {
//       // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
//       $counters.each(function () {
//         const $el = $(this);

//         // 요소의 위치 정보를 가져옵니다.
//         const rect = $el[0].getBoundingClientRect();
//         // const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
//         const contentHeight = rect.bottom - rect.top; // 요소의 높이

//         // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
//         if (
//           rect.top <=
//             window.innerHeight - (contentHeight * exposurePercentage) / 100 &&
//           rect.bottom >= (contentHeight * exposurePercentage) / 100
//         ) {
//           $el.addClass("active");
//         }
//         // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
//         if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
//           $el.removeClass("active");
//         }
//       });
//     })
//     .scroll();
// });

// const Scroll = () => {
//   const counters = document.querySelectorAll(".scroll_on");
//   const boolean = true;

//   const viewScroll = () => {
//     counters.forEach(() => {});
//   };
// };

// =========================================================================

// const Section2 = () => {
//   const counters = document.querySelectorAll(".scroll_on");
//   const exposurePercentage = 100;
//   const loop = true;

//   const handleScroll = () => {
//     counters.forEach((counter) => {
//       const rect = counter.getBoundingClientRect();
//       const winHeight = window.innerHeight;
//       const contentHeight = rect.bottom - rect.top;

//       if (
//         rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
//         rect.bottom >= (contentHeight * exposurePercentage) / 100
//       ) {
//         console.log("active");
//         counter.classList.add("active");
//       }

//       if (loop && (rect.bottom <= 0 || rect.top >= winHeight)) {
//         counter.classList.remove("active");
//         console.log("remove");
//       }
//     });
//   };

//   document.addEventListener("scroll", handleScroll);
//   handleScroll(); // 페이지 로드시 한번 실행
// };

// Section2(); // Section2 함수 호출
// ===================================================================

// import React, { useState, useEffect, useRef } from "react";

// const Section2 = () => {
//   const [counters, setCounters] = useState([]);
//   const loop = true;
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       counters.forEach((counter) => {
//         const rect = counter.getBoundingClientRect();
//         const winHeight = window.innerHeight;
//         const contentHeight = rect.bottom - rect.top;

//         if (
//           rect.top <= winHeight - contentHeight &&
//           rect.bottom >= contentHeight
//         ) {
//           console.log("active");
//           counter.classList.add("active");
//         }

//         if (loop && (rect.bottom <= 0 || rect.top >= winHeight)) {
//           counter.classList.remove("active");
//           console.log("remove");
//         }
//       });
//     };

//     document.addEventListener("scroll", handleScroll);
//     handleScroll(); // 페이지 로드시 한번 실행

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [counters]); // counters가 변경될 때마다 useEffect 재실행

//   useEffect(() => {
//     setCounters(document.querySelectorAll(".scroll_on"));
//     counterRef.current = document.querySelectorAll(".scroll_on");
//   }, []);

//   return null; // Section2 컴포넌트가 아무것도 렌더링하지 않을 경우
// };

// export default Section2;

// =========================================================== section3

// $(window).scroll(function () {
//   let scroll = $(window).scrollTop();
//   $(".scroll").text(scroll);

//   let offset = scroll - $("#section2").offset().top;

//   if (scroll > $("#section2").offset().top) {
//     $(".sec3").css({ left: -offset + "px" });
//   }
// });

// window.addEventListener("scroll", function () {
//   let scroll = window.pageYOffset;
//   console.log(scroll);
//   document.querySelector(".scroll").textContent = scroll;

//   let offset = scroll - document.getElementById("section2").offsetTop;

//   if (scroll > document.getElementById("section2").offsetTop) {
//     document.querySelector(".sec3").style.left = -offset + "px";
//   }
// });

window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelectorAll(".scroll").forEach(function (element) {
    element.textContent = scroll;
  });

  let offset =
    scroll - document.getElementById("section2").getBoundingClientRect().top;

  if (
    scroll > document.getElementById("section2").getBoundingClientRect().top
  ) {
    document.querySelectorAll(".sec3").forEach(function (element) {
      element.style.left = -offset + "px";
    });
  }
});

// window.addEventListener("scroll", function () {
//   let scroll = window.scrollY;
//   document.querySelector(".scroll").textContent = scroll;

//   let offset = scroll - document.getElementById("section2").offsetTop;

//   if (scroll > document.getElementById("section2").offsetTop) {
//     document.querySelector(".sec3").style.left = -offset + "px";
//   }
// });

// window.addEventListener("scroll", function () {
//   let scroll = window.pageYOffset || document.documentElement.scrollTop;
//   document.querySelector(".scroll").textContent = scroll;

//   let section2OffsetTop =
//     document.querySelector("#section2").getBoundingClientRect().top +
//     window.scrollY;
//   let offset = scroll - section2OffsetTop;

//   if (scroll > section2OffsetTop) {
//     document.querySelector(".sec3").style.left = -offset + "px";
//   }
// });

// ========================= 흐르는 베너 js ================================
