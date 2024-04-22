import axios from "axios";

// 전체 보기 !!
export const getMovies = async () => {
  return await axios.get("http://localhost:8080/api/movie");
}; //                  전체보기 Get 방식 주소

export const addMovie = async (data) => {
  return await axios.post("http://localhost:8080/api/movie", data);
};

export const delMovie = async (no) => {
  return await axios.delete("http://localhost:8080/api/movie/" + no);
};
