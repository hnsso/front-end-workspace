import { update } from "../api/movie";
import Detail from "./Detail";


const Create = () => {
  const OnUpdate = () => {
    update();
  };

  return (
    <>
      <h2>영화 목록</h2>
      <h2>영화 목록</h2>

      <input type="text" placeholder="영화 제목 입력" />
      <input type="text" placeholder="영화 정보 입력" />
      <input type="text" placeholder="영화 배우 입력" />

      <Button type={OnUpdate}>영화 추가</Button>
    </>
  );
};

export default Create;
