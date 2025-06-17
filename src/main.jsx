import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./reset.css";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App.jsx";
import GameContainer from "./components/Main/GameContainer.jsx";
import { Analytics } from "@vercel/analytics/react";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="weapon" /> },
      { path: "weapon", element: <GameContainer gameType="weapon" /> },
      { path: "armour", element: <GameContainer gameType="armour" /> },
      { path: "*", element: <Navigate to="/weapon" /> },
    ],
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={createBrowserRouter(routes)} />
  </StrictMode>
);
