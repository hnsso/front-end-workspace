import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// 전체 보여주기 연결
export const getAnimals = async () => {
  return await instance.get("animal");
};

// Animal에 1개보기랑 수정 주소 가져오기

// 1개 보여주기 - getAnimal => 서버 URL이 중여하다
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no);
};

// 수정하기 - updateAnimal
export const updateAnimal = async (data) => {
  return await instance.put("animal", data);
};
// 데이터 값그대로 가져와서 Body로 보낸다 !!

// 추가하기 - addAnimal
export const addAnimal = async (data) => {
  return await instance.post("animal", data);
};

// 삭제하기 - delAnimal
export const delAnimal = async (no) => {
  return await instance.delete("animal/" + no);
};
