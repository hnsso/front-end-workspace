// // Header >>>>  색변환 !!
// $(function () {
//   var $header = $("header"); //헤더를 변수에 넣기
//   var $page = $(".page-start"); //색상이 변할 부분
//   var $window = $(window);
//   var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기

//   $window.resize(function () {
//     //반응형을 대비하여 리사이즈시 top값을 다시 계산
//     pageOffsetTop = $page.offset().top;
//   });

//   $window.on("scroll", function () {
//     //스크롤시
//     var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
//     $header.toggleClass("down", scrolled); //클래스 토글
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header"); // 헤더 요소를 변수에 저장합니다.
  var page = document.querySelector(".page-start"); // 색상이 변할 부분을 변수에 저장합니다.
  var window = window;
  var pageOffsetTop = page.getBoundingClientRect().top + window.scrollY; // 색상이 변할 부분의 top 값을 구합니다.

  window.addEventListener("resize", function () {
    // 반응형을 대비하여 리사이즈할 때 top 값을 다시 계산합니다.
    pageOffsetTop = page.getBoundingClientRect().top + window.scrollY;
  });

  window.addEventListener("scroll", function () {
    // 스크롤할 때
    var scrolled = window.scrollY >= pageOffsetTop; // 스크롤된 상태를 판단합니다.
    header.classList.toggle("down", scrolled); // 클래스를 토글하여 적용합니다.
  });
});

// ========================================================== 햄버거 메뉴
// var burger = $(".menu-trigger");

// burger.each(function (index) {
//   var $this = $(this);

//   $this.on("click", function (e) {
//     e.preventDefault();
//     $(this).toggleClass("active-" + (index + 1));
//   });
// });

// $("#toggle").click(function () {
//   $("#toggle .bar").toggleClass("animate");
//   $("#page").toggleClass("overlay");
// });
// -=============================================================

// #toggle 요소에 클릭 이벤트를 추가합니다.
document.getElementById("toggle").addEventListener("click", function () {
  // #toggle .bar 요소에 animate 클래스를 토글합니다.
  document.querySelector("#toggle .bar").classList.toggle("animate");
  // #page 요소에 overlay 클래스를 토글합니다.
  document.getElementById("page").classList.toggle("overlay");
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
// ================== section2 폰트 active 관련 =========================

$(document).ready(function () {
  // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
  const $counters = $(".scroll_on");

  const scroll = document.querySelectorAll(".scroll_on").addEventListener();

  // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
  const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window)
    .on("scroll", function () {
      // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
      $counters.each(function () {
        const $el = $(this);

        // 요소의 위치 정보를 가져옵니다.
        const rect = $el[0].getBoundingClientRect();
        // const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
        const contentHeight = rect.bottom - rect.top; // 요소의 높이

        // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
        if (
          rect.top <=
            window.innerHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        }
        // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
        if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
          $el.removeClass("active");
        }
      });
    })
    .scroll();
});

const Scroll = () => {
  const counters = document.querySelectorAll(".scroll_on");
  const boolean = true;

  const viewScroll = () => {
    counters.forEach(() => {});
  };
};

// =========================================================================

const Section2 = () => {
  const [loop, setLoop] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const counters = scrollRef.current.querySelectorAll(".scroll_on");
      counters.forEach((counter) => {
        const rect = counter.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const contentHeight = rect.bottom - rect.top;

        if (
          rect.top <= winHeight - contentHeight &&
          rect.bottom >= contentHeight
        ) {
          counter.classList.add("active");
        }

        if (loop && (rect.bottom <= 0 || rect.top >= winHeight)) {
          counter.classList.remove("active");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [loop]); // loop 상태가 변경될 때마다 useEffect가 재실행됩니다.

  useEffect(() => {
    // 페이지 로드시 한번 실행
    handleScroll();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  return (
    <section id="section2">
      <div ref={scrollRef} className="scroll_wrap">
        <div className="scroll_on type_bottom">
          <p>안 녕 하 세 요 꼼 빠 뇨 에 이 전 시 입 니 다</p>
        </div>
        <div className="scroll_on type_bottom">
          <h1>
            저희는 반려동물과 함께하는 즐거움, 특별함의 서비스를 제공하고
            이웃과의 다양한 모임을 통해 소중한 인연과 추억을 지속적인 유지를
            이어가고 있습니다
          </h1>
        </div>
        <div className="scroll_on type_bottom">
          <h4>
            다양한 시스템과 커뮤니티를 통해 우리는 보다 최선의 방법을 통해
            최선을 다하고 있습니다 .
          </h4>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  const counters = document.querySelectorAll(".scroll_on");
  const loop = true;

  const handleScroll = () => {
    counters.forEach((counter) => {
      const rect = counter.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const contentHeight = rect.bottom - rect.top;

      if (
        rect.top <= winHeight - contentHeight &&
        rect.bottom >= contentHeight
      ) {
        console.log("active");
        counter.classList.add("active");
      }

      if (loop && (rect.bottom <= 0 || rect.top >= winHeight)) {
        counter.classList.remove("active");
        console.log("remove");
      }
    });
  };

  document.addEventListener("scroll", handleScroll);
  handleScroll(); // 페이지 로드시 한번 실행
};

Section2(); // Section2 함수 호출

// =========================================================== section3

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $(".scroll").text(scroll);

  let offset = scroll - $("#section2").offset().top;

  if (scroll > $("#section2").offset().top) {
    $(".sec3").css({ left: -offset + "px" });
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
