import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

import logo from "./assets/wynndlelogo.png";
import "./App.css";

function App() {
  const { dataArray, error, loading, errorStatus } = useFetchDatabase();

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Oops! Something went wrong, please refresh or try again later. Error
        Code: {errorStatus}
      </p>
    );

  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <NavBar />
      <Outlet context={dataArray} />
    </>
  );
}

function useFetchDatabase() {
  const [dataArray, setDataArray] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    async function fetchDatabase() {
      try {
        const response = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setErrorStatus(response.status);
        if (response.status >= 400) {
          throw new Error("Error with fetching data!");
        }
        const objectData = await response.json();
        const dataArray = Object.keys(objectData).map((key) => {
          return { ...objectData[key], internalName: key };
        });
        setDataArray(dataArray);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDatabase();
  }, []);

  return { dataArray, error, loading, errorStatus };
}

export default App;
