const Section = () => {
  const counters = document.querySelectorAll(".scroll_on");
  // couters 라는 변수에다가 css에 ClassName이 scroll_on인 태크들을 다 선택하겠다 !!
  const loop = true;
  // true , false 처리를 위한 boolean

  // 이벤트를 실행시키기위해서 handleScroll 화살표 함수를 만든다 !!
  const handleScroll = () => {
    // 클래스 scroll_on인 집합들을 각각을 매개변수 counter로 잡아서 각각에 이벤트를 시키기위해서 하는 방법
    counters.forEach((counter) => {
      // 각각의 요소들의 위치
      const rect = counter.getBoundingClientRect();

      // 네비게이션 부분을 제외한 높이
      const winHeight = window.innerHeight;
      
      // 각가의 요소들의 높이
      const contentHeight = rect.bottom - rect.top; //실제 높이 !! .scroll_on의 부분의 높이값

      
      if (
        rect.top <= winHeight - contentHeight &&
        rect.bottom >= contentHeight
      ) {
        counter.classList.add("active"); // css에 있는 .active의 생각대로 추가하겠다
      }

      if (loop && (rect.bottom <= 0 || rect.top >= winHeight)) {
        counter.classList.remove("active"); // css에 있는 .active의 생각대로 제거하겠다
      }
    });
  };
  // 이벤트추가 인데 조건이 있음 (이벤트이름, 함수)
  document.addEventListener("scroll", handleScroll);

  handleScroll(); // 페이지 로드시 한번 실행
};
Section(); // Section2 함수 호출

// const Section = () => { ... }: 이 코드는 화살표 함수를 사용하여 Section이라는 이름의 함수를 정의합니다.
// const counters = document.querySelectorAll(".scroll_on");: 이 코드는 문서에서 클래스가 "scroll_on"으로 지정된 모든 요소를 선택합니다. 선택된 요소는 NodeList에 저장됩니다.
// const Percentage = 100;: 이 코드는 Percentage라는 상수를 100으로 설정합니다.
// const loop = true;: 이 코드는 loop라는 상수를 true로 설정합니다.
// const handleScroll = () => { ... }: 이 코드는 handleScroll이라는 이름의 함수를 정의합니다. 이 함수는 스크롤 이벤트가 발생할 때 실행됩니다.
// counters.forEach((counter) => { ... });: 이 코드는 counters NodeList의 각 요소에 대해 반복합니다. 각 요소는 counter라는 매개변수로 전달됩니다.
// const rect = counter.getBoundingClientRect();: 이 코드는 현재 반복 중인 요소인 counter의 경계 상자 정보를 가져옵니다.
// const winHeight = window.innerHeight;: 이 코드는 현재 브라우저 창의 높이를 가져옵니다.
// const contentHeight = rect.bottom - rect.top;: 이 코드는 요소의 실제 내용의 높이를 계산합니다.
// 첫 번째 if문: 이 코드는 요소가 화면에 충분히 노출되었는지 확인합니다. exposurePercentage를 사용하여 요소의 특정 비율만큼 노출되었는지 확인합니다.
// 두 번째 if문: 이 코드는 loop가 true일 때 요소가 뷰포트를 벗어났는지 확인합니다. 벗어났다면 active 클래스를 제거합니다.
// document.addEventListener("scroll", handleScroll);: 이 코드는 스크롤 이벤트가 발생할 때 handleScroll 함수를 실행합니다.
// handleScroll();: 이 코드는 페이지가 로드될 때 handleScroll 함수를 한 번 실행합니다.
// Section();: 이 코드는 Section 함수를 호출합니다.
// 이 코드는 페이지의 스크롤 이벤트를 감지하고, 특정 요소가 화면에 충분히 노출되었는지 확인하여 해당 요소에 클래스를 추가하거나 제거하는 기능을 구현합니다.
