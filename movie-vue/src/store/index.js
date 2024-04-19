// vue 버전 redux
import { createStore } from "vuex";
import movie from "@/store/movie";

export default createStore({
  modules: {
    movie: movie,
  },
});
