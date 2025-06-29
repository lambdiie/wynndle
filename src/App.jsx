import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Main/Error";

import logo from "./assets/wynndlelogo.png";
import "./App.css";

function App() {
  const { dataArray, error, loading } = useFetchDatabase();

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Oops! Something went wrong with fetching the data! Try refreshing the page, or try again later. If it still doesnt work, contact @diie123 on discord with the error!
      </p>
    );

  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <NavBar />
      <ErrorBoundary FallbackComponent={Error}>
        <Outlet context={dataArray} />
      </ErrorBoundary>
    </>
  );
}

function useFetchDatabase() {
  const [dataArray, setDataArray] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDatabase() {
      try {
        const response = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

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

  return { dataArray, error, loading };
}

export default App;
