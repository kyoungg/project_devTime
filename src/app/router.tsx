import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>this page is error</p>, // 에러/404 처리
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
