// NPM packages
import { useState, useEffect } from "react";

// Project files
import API from "./scripts/api/api";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LoadingScreen from "./screens/LoadingScreen";
import MainScreen from "./screens/MainScreen";
import ErrorScreen from "./screens/ErrorScreen";

import { Product } from "./interfaces/interfaces";

import "./styles/style.css";

const enum StatusCodes {
  LOADING,
  LOADED,
  ERROR,
}

export default function App() {
  // Local state
  const [status, setStatus] = useState(StatusCodes.LOADING);
  const [products, setProducts] = useState(Array<Product>());

  useEffect(() => {
    API.getProducts(
      (data: Product[]) => {
        setProducts(data);
        setStatus(StatusCodes.LOADED);
      },
      (error: Error) => {
        setStatus(StatusCodes.ERROR);
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {status === StatusCodes.LOADING && <LoadingScreen />}
        {status === StatusCodes.LOADED && <MainScreen products={products} />}
        {status === StatusCodes.ERROR && <ErrorScreen />}
      </main>
      <Footer />
    </div>
  );
}
