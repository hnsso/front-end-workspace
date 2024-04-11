import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 리액트 쿼리를 쓰고 싶으면
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
