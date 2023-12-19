//  변수에 값을 저장하는데 쿼리로 선택자 지정하고 난 표현하겠다
//  a (= 선택자) 태그들이 움직여야한다
const navIcons = document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a");

navIcons[0].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.remove("header-main-bottom-right");
  });
});
navIcons[1].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.add("header-main-bottom-right");
  });
});

// category 처음에 쿼리로 난 하겠다라고 정의 내리고 그리고 이벤트 설정하면 된다 ("이벤트" , 함수)
const categoryBtn = document.querySelector(".category-btn");

const category = document.querySelector(".category");

categoryBtn.addEventListener("mouseenter", function () {
  //   category.style.display = "block";
  category.style.display = "flex";
});

// categoryBtn.addEventListener("mouseleave", function () {
//   category.style.display = "none";
// });

category.addEventListener("mouseleave", function () {
  category.style.display = "none";
});

const categoryItems = document.querySelectorAll(".category-item");

const categorySub = document.querySelector(".category-sub");

const categorySubItems = document.querySelectorAll(".category-sub-item");

categoryItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    categorySub.style.display = block;
    categorySubItems[index].style.disply = "block";
  });
  item.addEventListener("mouseleave", function () {
    categorySubItems[index].style.display = "none";
  });
});
