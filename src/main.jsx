import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetails from "./pages/PostDetails";
import "./index.css";

const routes = [
  { path: "/", 
    element: <Home /> },

  { path: "/about", 
    element: <About /> },

  { path: "/contact", 
    element: <Contact /> },

  { path: "/posts/:id", 
    element: <PostDetails /> },

];

const router = createBrowserRouter([{ 
  element: <App />, 
  children: routes }]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

