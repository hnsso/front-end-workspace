// 사용하고자하거나 우리가 가져 올려면 import해야한다
import { useState } from "react";
// useState는 구성이 정해져있다 !!

const App = () => {
  const [counter, setCounter] = useState(0); // 초기값 / 배열 형식
  //     변수명 , 변화되는 함수(counter를 변화시기는 함수이다)
  const setCount = () => {
    // counter = counter + 1 ;
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;

// 처음 React 파일을 만들면 나오는 src중에서
// 1 ) App.js / index.js 만 뺴고 다 날린다
// index.js

// App.js => 우리가 사용해야할 것은 처음 import로 지정한다

// const App () => {
//   return ;
// }
//
// export default App;
// 여기서 부터 시작 !
