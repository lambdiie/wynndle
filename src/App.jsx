import { Outlet } from "react-router-dom";

import logo from "./assets/wynndlelogo.png";
import "./App.css";

function App() {
  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <Outlet />
    </>
  );
}

export default App;
