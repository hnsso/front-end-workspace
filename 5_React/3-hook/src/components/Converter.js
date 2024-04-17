import Btn from "./Btn";
import { useState, useEffect } from "react"; // redux를 쓰지않는다면 !!

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (e) => {
    // console.log(e.target.value);
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
    //  이조건을 작동 시키겠따 !!
  }, [bool]);
  // boolean값이 바뀌는 시점
  return (
    <>
      <h1>Time Converter</h1>
      Minutes :{" "}
      <input
        type="number"
        placeholder="Minuter"
        onChange={change}
        value={bool ? number * 60 : number}
        disabled={bool}
      />
      <br></br>
      Hours :{""}
      <input
        type="number"
        placeholder="Hours"
        onChange={change}
        disabled={!bool}
        value={bool ? number : Math.floor(number / 60)}
      />
      <br></br>
      <Btn click={reset} text="Reset" />
      <Btn click={invert} text={text} />
    </>
  );
};

export default Converter;
