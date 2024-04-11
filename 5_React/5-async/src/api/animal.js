import axios from "axios"; // axios를 쓸려면 import
import { useQuery } from "@tanstack/react-query";

// 우리는 기능이 한개가 아니라 여러개를 가져와야한다 !!
// fetch ~ then
export const getFetch = () => {
  //   url 명시 !!
  return fetch("http://localhost:8080/api/animal").then((response) => {
    return response.json();
  });
};

// async ~ await
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/animal");
  console.log(response);
  return response.json();
};

// axios (async ~ await) => 비동기처리할때 무조건 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 이거
export const getAxios = async () => {
  const response = await axios.get("http://localhost:8080/api/animal");
  return response.data;
};
// 

// react-query
export const useGetQuery = () => {
  return useQuery({
    queryKey: ["animal"],
    queryFn: getAxios,
  });
};
