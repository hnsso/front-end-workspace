import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

const store = configureStore({
  // 내가 카운터를 쓸려면 정의해야한다 !
  reducer: {
    counter: counter.reducer,
  },
});

export default store;
