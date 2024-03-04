// JQuery는 '$' 을 사용 !!
// $(document).ready(function () {}); 이걸 추약한게 밑에 있는거다

$(function () {
  // 1 , 태그 선택자
  // 자바스크림트 방식 => p 태그를 가져온거
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }

  // 제이쿼리 방식!! => 편하긴한데 나중에 리액트에서는 적용하는데 문제가 있다 ...
  $("h5").css("color", "skyblue").css("background-color", "yellow");

  // 2. 아이디 선택자

  // 자바스크립트 방식 -> 글씨 색깔(Color) 변경 (자유롭게)
  document.querySelector("#id1").style.color = "crimson";
  //   console.log(document.querySelector("#id1")); 우리가 맞는지 확인하기 위해서 console 에 찍어본다 !!

  // 제이쿼리 방식 -> id가 id2인 글씨 색깔 변경 !!
  $("#id2").css("color", "blue");

  // 클래스 선택자 => 한꺼번에 줄수도 있다 !!
  $(".item").css({ color: "white", "background-color": "indigo" });

  // 4. 자식 선택자와 자손 선택자
  $("div > ul > li").css("color", "green");
  $("div > ul > .ch").css("background-color", "lime");
  $("div > ul > li > h3").css("color", "indianred");
  $("dib > h3").css("color", "violet");
  $("div h3").css("background-color", "khaki");

  // 5. 속성 선택자
  $("#div1 input[class]").css("background-color", "turquoise");
  $("#div1 input[type=text]").val("change value");
  $("#div1 input[class~=test1]").val("123456789");
  $("#div1 input[type^=ra]").prop("checked", true);
  $("#div1 input[type$=box]").prop("checked", true);
  $("#div1 input[class*=st3]")
    .css({ withd: "100px", height: "100px" })
    .val("10000");

  // 6. 입력 양식 선택자
  $("#div2 : text").css("background-color", "pink");
  $("#div2 : button").val("버튼");
  $("#div2 : checkbox").prop("checked", true);
  $("#div2 : file").css("background-color", "yellow");

  // 7. 입력 양식 상태에 대한 선택자
  // 1) input 태그중 활성화 된 객체 선택
  $("#div3 input:enabled").css("background-color", "lavender");
  // 2) input 태그 중 비활성화된 객체 선택 -> 배경색 : lightcyan
  $("#div3 input:disabled").css("background-color", "lightcyan");
  // 3) input 태그 중 체크된 객체 선택
  $("#div3 input:checked").css({ withd: "30px", height: "30px" });
  // 4) checkbox에 change 이벤트 핸들러 등록
  $("#div3 : checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    console.log(checkbox.attr("checked)"));
    console.log(checkbox.prop("checked)")); // true or false
  });

  // 5) select 에 change 이벤트 핸들러 등록
  // 선택하는거
  $("#national").change(function () {
    // select 태그의 option 태그 중 선택된 객체 선택
    let value = $("#national>option:selected").val();
    console.log(value);
    $("#result").val(value);
  });
});
