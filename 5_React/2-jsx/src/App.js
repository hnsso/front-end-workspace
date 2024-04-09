// 우리가 가져 올려면 import해야한다
import { useState } from "react";
// useState는 구성이 정해져있다 !1

const App = () => {
  const [counter, setCounter] = useState(0); // 초기값 / 배열 형식
  //     변수명 , 변화되는 함수(counter를 변화시기는 함수이다)
  const setCount = () => {
    // counter = counter + 1 ;
    setCounter(counter + 1);
  };
};

return (
  <div>
    <h1>Total Clicks : {counter}</h1>
    <button onClick={setCount}>Click!</button>
  </div>
);

export default App;
