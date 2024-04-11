import "./asset/style.scss";
// 이거는 App.js의 컴포넌트에 스타일을 주는거다 !!
import style from "./asset/style.module.css";
// style Module 같은 경우는 이런 방식으로 흘러간다 !
import styled from "styled-components";

//   컴포넌트에서는 대문자로 시작
const Div = styled.div`
  background-color: darkcyan;
  color: white;
  font-size: 6rem;
`;

const App = () => {
  return (
    <>
      <div
        className="class"
        // id="id" /*style={{ backgroundColor: "black", color: "white" }}*/
      >
        {/* style Module 같은 경우는 이런 방식으로 흘러간다 !*/}
        <h1 className={style.deco}>Hello, React Styling!</h1>
      </div>
      <Div>Styled components!!</Div>
    </>
  );
};

export default App;

// 기본 시작 구조 !
// const App = () => {
//   return <></>;
// };

// export default App;
