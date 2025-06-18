import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import logo from "./assets/wynndlelogo.png";
import "./App.css";

function App() {
  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
