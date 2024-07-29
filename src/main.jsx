import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About.jsx";
import Development from "./components/Development.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "development",
        element: <Development />,
      },
    ],
  },
]);

createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<About />} />
    <Route path="about" element={<About />} />
    <Route path="/development" element={<Development />} />
  </Route>
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
