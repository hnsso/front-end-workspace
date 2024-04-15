import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ===========================================
import store from "./store";
import { Provider } from "react-redux";

// 가장 먼저 스토어 생성이 우선이다 Redux에선
// const storeCreate = CreateStore(store); 이때 스토어가 생성된거다

// Provider 컴포넌트를 사용하여 프로젝트에 사용하세여
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
