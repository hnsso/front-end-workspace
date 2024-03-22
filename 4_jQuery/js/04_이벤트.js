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

<script>
  $(document).ready(function(){" "}
  {$("form").submit(function () {
    // 제목(title) 필드 확인
    var title = $("#title_input").val();
    if ($.trim(title) == "") {
      alert("제목을 입력해주세요.");
      return false; // 제출 방지
    }

    // 내용(content) 필드 확인
    var content = $("#content_input").val();
    if ($.trim(content) == "") {
      alert("내용을 입력해주세요.");
      return false; // 제출 방지
    }

    // 파일(file) 필드 확인
    var file = $("#file").val();
    if ($.trim(file) == "") {
      alert("파일을 업로드해주세요.");
      return false; // 제출 방지
    }

    // 모든 필드가 유효한 경우 true 반환하여 제출 허용
    return true;
  })}
  );
</script>;

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

$("#textarea2").on({
  keyup: () => {
    $("#textarea2").keyup((e) => {
      console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    });
  },
});

// 사용자가 입력한거에 따라서니깐 우리는 textarea2에다가 걸어야한다 !!------------------

$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let currentLength = $(e.target).val().length;

  // number
  let maxLength = parseInt($("#maxLength").text());

  // string  : console.log(typeof maxLength);

  if (currentLength > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(currentLength);
  }
});

//----------------------------------------------------------------------------------

$("#userId").keyup((e) => {
  let id = $(e.target).val(); // 제이쿼리 방식 => 내가 입력한 값을 가져오는
  id = e.target.value; // 자바스크립트 방식
  // console.log(id);
  //
  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  // console.log(regExp.test(id));
  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
  }
});

$(document).ready(function () {
  $("form").submit(function () {
    // 제목(title) 필드 확인
    var title = $("#title_input").val();
    if ($.trim(title) == "") {
      alert("제목을 입력해주세요.");
      return false; // 제출 방지
    }

    // 내용(content) 필드 확인
    var content = $("#content_input").val();
    if ($.trim(content) == "") {
      alert("내용을 입력해주세요.");
      return false; // 제출 방지
    }

    // 파일(file) 필드 확인
    var file = $("#file").val();
    if ($.trim(file) == "") {
      alert("파일을 업로드해주세요.");
      return false; // 제출 방지
    }

    // 모든 필드가 유효한 경우 true 반환하여 제출 허용
    return true;
  });
});

// --------------------------------------------------------------------------

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(++currentCount);
});

$("#btn").click(() => {
  $("#area3").trigger("click");
});

// 같은 기능일때 !!

// $("#btn").click(() => {
//   let counter = $("#counter2");
//   let currentCount = parseInt(counter.text());
//   counter.text(++currentCount);
// });
