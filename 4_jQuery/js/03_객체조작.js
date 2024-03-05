// 1. Content 설정
// 1) html()
// content 영역에 태그와 텍스트를 모두 가져온다.
console.log($("#content1").html());
// content3의 내용(태그 + 텍스트)을 content2의 추가
$("#content2").html($("#content3").html());
// 2) text()s
// content 영역의 텍스트만 가져온다 !
console.log($("#content3").text());
// content3의 내용(텍스트)을 content4의 추가
$("#content4").text($("#content3").text());

// 2. 요소 추가
// 1) 자바스크립트와 제이쿼리
//        태크를 만든다 => document.createElement !!
const p = document.createElement;
p.innerHTML = "자바스크립트로 추가";

// #id를 선택할때 그리고         아이로 추가한다 !
document.querySelector("#area1").appendChild(p);

const p2 = $("<p>").html("제이쿼리로 추가");
$("#area1").append(p2);

// 2) 요소 추가 1 => 여기서는 부모기준
//  $(A).append(B) : A 요소의 자식 요소로 B요소를 뒷 부분에 추가한다.
$("#area1").append("<span>B</span>");

// $(A).append(C) : A요소의 자식 요소로 C 요소를 앞부분에 추가한다.
$("#area1").prepend("<span>C<span>");

// $(A).after(D) : A요소의 형제 요소로 D요소를 뒷분분에 추가한다
$("#area1").after("<span>D<span>");

// $(A).before(E) : A 요소의 형제 요소로 E 요소를 앞부분에 추가한다.
$("#area1").before("<span>E<span>");

// 3) 요소 추가 2
// $(B).appendTo(A) : B 요소를 A 요소의 자식 요소로 뒷부분에 추가한다.
$("<span>B</span>").appendTo("#area2");
// $(C).appendTo(A) : C 요소를 A 요소의 자식 요소로 앞부분에 추가한다.
$("<span>C</span>").prependTo("#area2");

// $(D).insertAfter("#area2") : D 요소를 A 요소의 형제 요소로 뒷부분에 추가한다
$("<span>D<span>").insertAfter("#area2");

// $(E).insertAfter("#area2") : E 요소를 A 요소의 형제 요소로 앞부분에 추가한다
$("<span>E<span>").insertBefore("#area2");

// 3 . 요소 복제
//         화살표 함수 !!
/*  
    만일 한 개의 이벤트 핸들러가 설정되면 두 이벤트 모두
    한곳에서 적용 !!

    2개 이상이 되면 해당 이벤트 핸들러의 이벤트가 분리
*/
$(".item").hover(
  /*
    이렇게 두개로 하는 방식이 있다정도만 인지하자
    (event) => {
    console.log("event1 : " + event.type); //mouseenter
    console.log(event.target);
    $(event.target).addClass("bg-hotpink");
  },
  (event) => {
    console.log("event2 : " + event.type); //mouseleave
    console.log(event.target);
    $(event.target).removeClass("bg-hotpink");
  }
  */
  (event) => {
    $(event.target).toggleClass("bg-hotpink");
  }
);

$("#btn1").click(() => {
  // 이벤트 까지 복제하려면 매개값으로 true를 전달한다.
  // (생략시 false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거

// 1) remove => 선택된 요소의 이벤트까지 삭제를 한다
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});

// 2) detach => remove랑 차이는 이벤트까지는 삭제 하지않는다 !!
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});

//  -----------------------------------------------

// 3) empty
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5 . 배열 관리

// 제이슨 방식(엄청 중요하다)의 배열 생성 (키와 벨류 그리고 함수까지 넣을수 있다 !!)

let array = [
  { name: "구글", link: "http://goole.com" },
  { name: "네이버", link: "http://naver.com" },
  { name: "다음", link: "http://daum.com" },
];

// 자바 스크립트 방식

// 스크립트에 있는 콜벡함수이다 !!
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javaScript ---------------");
});

// 제이쿼리 방식

$(array).each((index, element) => {
  console.log(index);
  console.log(element.name);
  console.log(element.link);
  console.log("jQuery -------------");
});

let output = "";
// index를 명시해야지  element를 가져올수있다 !
$(array).each((i, e) => {
  // append 방식
  //   console.log(`<h4><a href='${e.link}'> ${e.name}</a></h4>`);
  //   $("#each-test").append(`<h4><a href='${e.link}'> ${e.name}</a></h4>`);

  // html 방식
  output += `<h4><a href='${e.link}'> ${e.name}</a></h4>`;

  //   const result = "<h4><a href='" + e.link + "'>" + e.name + "</h4>";
  //   console.log(result);
  //   $("#each-test").append(result);
});
$("#each-test").html(output);
