import React from "react";
import ReactDOM from "react-dom/client";
// import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./App.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
