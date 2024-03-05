// 1. 이벤트 연결
// 1) on, off
//  => 스크립트에서는 AddEventListner 를 쓸때는 함수를 입력하고 한다
/* 
$("#area1").on("mouseenter", (event) => {
  // 이벤트에 접근하겠다는 target
  $(event.target).css("background-color", "beige").text("마우스가 올라감");
});
// 마우스가 내려갈 때(mouseleave) -> 배경 색상 : hotpink, 글자는 '마우스가 내려감'

$("#area1").on("mouseleave", (event) => {
  $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
});
*/

/*
$("#area1").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    // mouseenter인 경우
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  } else {
    // mouseleave인 경우
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  }
});

//                       event(여러가지 기능들이 담간)는 초기에 담겨져있다 !!
$("#area1").on("click", (event) => {
  // 배경 색상은 white, 텍스트는 '',
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave");
});
*/

// << 나중에 프로젝트에서 사용해보자 !!  >>
$("#area1").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  },
  mouesleave: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2) one
$("#area2").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
$("#textarea1").keydown((e) => {
  console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될 때
$("#textarea1").keypress((e) => {
  console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질 때
$("#textarea1").keyup((e) => {
  console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// on을 이용해서 한꺼번에
$("#textarea1").on({
  keydown: () => {
    $("#textarea1").keydown((e) => {
      console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    });
  },
  keypress: () => {
    $("#textarea1").keypress((e) => {
      console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    });
  },
  keyup: () => {
    $("#textarea1").keyup((e) => {
      console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    });
  },
});

//
