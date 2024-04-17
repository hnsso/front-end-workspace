import Header from "./components/Header";
import { increase, decrease } from "./store/counter";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
    </>
  );
  // dispatch로 해서 함수호출을해서 counter.js에 기능을 가져온다 !
};

export default App;
