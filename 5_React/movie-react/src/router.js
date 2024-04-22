// ================ Router Dom 관련 =================
import { createBrowserRouter } from "react-router-dom";
// ===================================================
import Home from "./pages/Home";
import Create from "./pages/Create";
// ===================================================

const router = createBrowserRouter([
  {
    path: "/", // 경로
    element: <Home />, // 내가만든 .js
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom"; 2
// const router = createBrowserRouter([]);
// export default router;
