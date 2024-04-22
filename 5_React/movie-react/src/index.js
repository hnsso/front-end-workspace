import React from "react";
import ReactDOM from "react-dom/client";
// ===================================================================================2
import { RouterProvider } from "react-router-dom"; // 연결하기위해서 Provider가 필요하다
import router from "./router";
// ===================================================================================
import "./asset/reset.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />); // <App> => provider로 변경
