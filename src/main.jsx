import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Development from "./pages/Development.jsx";
import Layout from "./components/Layout.jsx";
import Nicolas from "./pages/Nicolas.jsx";
import Blog from "./pages/Blog.jsx";
import Design from "./pages/Design.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Nicolas />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "development",
        element: <Development />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen min-w-screen">
    <RouterProvider router={router} />
  </div>
);
