import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./asset/reset (2).css";
//      파일 경로 !! => 우리가 스타일 하기전에 reset.css를 링크를 하는것 처럼
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
