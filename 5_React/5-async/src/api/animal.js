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

// async ~ await : 자바스크립트를 이용하여 백핸드서버에 있는 데이터만 가져와서 웹페이지 일부를 동적으로 바꾸는
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

// 비동기 처리 : 동시다발적으로 일을 진행하고 처리한다

// 동기처리 : 순차적으로 일을 처리해나간다

// 그래서 우리는 비동기처리방식으로 데이터를 동시다발적으로 처리해나가야한다 그래서 axios / async and await

// 자바스크립트를 이용하여 백핸드서버에 있는 데이터만 가져와서 웹페이지 일부를 동적으로 바꾸는
// axios (async ~ await) => 비동기처리할때 무조건 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 이거
export const getAxios = async () => {
  const response = await axios.get("http://localhost:8080/api/animal");
  return response.data;
};
