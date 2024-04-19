import axios from "axios";

const instance = axios.create([(baseURL = "http://localhost8080/api")]);

export const selectAll = async (data) => {
  return await instance.get("movie", data);
};

export const update = async (no) => {
  return await instance.get("movie" + no);
};

export const moviedelete = async (no) => {
  return await instance.get("movie" + no);
};
