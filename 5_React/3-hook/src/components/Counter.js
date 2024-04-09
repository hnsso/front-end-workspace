import { useState, useEffect } from "react";
import Btn from "./Btn";
// 언제 쓰는지 메인에서 데이터 불러올때!

// 컴포넌트 :
// pros

// 상위 컴포넌트가 하위컨포넌트로 데이터를 전달하는게 REACT에서의 방향이다

// Counter 컴포넌트
const Counter = () => {
  const [counter, setCounter] = useState(0);
  //      초기값 , 변화시킬려고 하는거
  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  const setCount = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  console.log("always~~");

  // 첫번째는 함수 :                      /  두번째는 대괄호 [] : 바뀌었을때 조건이 필요한 부분이다 !!
  useEffect(() => {
    console.log("useEffect!");
  }, []);
  // useEffect(()=>{},[]); = (상태를 바꾸는 시점을 꼽는다) 기본 틀이다 !!
  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);
  //  counter가 바뀌는 시점 !! 이다 !!

  // 컴포넌트 !!
  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
    </>
  );
};

export default Counter;
