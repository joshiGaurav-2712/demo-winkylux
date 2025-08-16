import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementLight />,
  },
  {
    path: "/390w-light",
    element: <ElementLight />,
  },
  
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
