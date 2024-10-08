import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react"; // 정보를 담고자하면
import { addMovie } from "../api/movie.js";
// ======================================================
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    margin: 5px;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
`;

// 영화 정보 추가 페이지
const Create = () => {
  //   const [movie, setMovie] = useState({ title: "", genre: "", actor: "" }); 하나의 useState  로
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");

  const navigate = useNavigate();

  const onCreate = async () => {
    await addMovie({ title, genre, actor });
    navigate("/");
  };
  return (
    <StyledDiv>
      <Header />
      <h1>영화 정보 추가</h1>
      <input
        type="text"
        placeholder="영화 제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="영화 장르 입력"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="영화 배우 입력"
        value={actor}
        onChange={(e) => setActor(e.target.value)}
      />
      <button onClick={onCreate}>추가</button>
    </StyledDiv>
  );
};
export default Create;
