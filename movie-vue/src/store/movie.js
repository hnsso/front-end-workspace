import { getMovies, addMovie, delMovie } from "@/api/movie";

export default {
  state: {
    movies: [], // 그리고 마지막으로 다 여기로 들어간다
  },
  mutations: {
    setMovies(state, movies) {
      //           바로위에있는걸 호출 / 그리고 response.data 넣어져있다
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    removeMovie(state, no) {
      state.movies = state.movies.filter((movie) => movie.no !== no);
    },
  },

  // 비동기 처리 관련 !!
  actions: {
    async fetchMovies({ commit }) {
      const response = await getMovies();
      commit("setMovies", response.data);
    },

    async insertMovie({ commit }, data) {
      const response = await addMovie(data);
      commit("addMovie", response.data);
    },
    async deleteMovie({ commit }, no) {
      await delMovie(no);
      commit("removeMovie", no);
    },
  },
};
