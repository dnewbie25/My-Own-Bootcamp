import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Notes from "./routes/Notes.jsx";
import User from "./routes/User.jsx";
import NotFoundPage from "./routes/NotFoundPage.jsx";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/notes", element: <Notes /> },
  { path: "/user", element: <User /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
