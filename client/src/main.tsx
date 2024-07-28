import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home/index.tsx";
import Services from "./pages/Services/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import ErrorPage from "./pages/ErrorPage/index.tsx";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import Categories from "./pages/Categories/index.tsx";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "/services",
            element: <Services />,
         },
         {
            path: "/about-us",
            element: <AboutUs />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/search/:category",
            element: <Categories />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
