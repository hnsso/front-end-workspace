import Header from "../components/Header";
import styled from "styled-components";
//  =======================================
import { getMovies, delMovie } from "../api/movie";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: blod;
    margin-top: 30px;
  }
  table {
    width: 100%;
    margin-top: 30px;
    th {
      width: 25%;
      font-weight: bold;
    }
    td {
      padding-top: 20px;
    }
  }
`;

const Home = () => {
  // 일단 담아낼 변수랑 함수 두개 !! 설정
  const [movies, setMovies] = useState([]);
  // 여러기능이 포함되어있는 API 만들고 설정
  const moviesAPI = async () => {
    const result = await getMovies();
    console.log(result);
    setMovies(result.data); // 비동기 처리된 기능들과 정보들을 setMovies에 담아서 useEffect로 실행!
  };

  useEffect(() => {
    moviesAPI();
  }, []);

  const onDelete = async (no) => {
    await delMovie(no);
    moviesAPI(); // 바로 삭제후에 바로 보이게 !!
  };

  return (
    <StyledDiv>
      <Header />
      <h1>영화 목록</h1>

      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>배우</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.no}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.actor}</td>
              <td>
                <button onClick={() => onDelete(movie.no)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledDiv>
  );
};
export default Home;
