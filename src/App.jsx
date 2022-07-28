// NPM packages
import { useState, useEffect } from "react";

// Project files
import API from "./scripts/api/api";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LoadingScreen from "./screens/LoadingScreen";
import MainScreen from "./screens/MainScreen";
import ErrorScreen from "./screens/ErrorScreen";

import "./styles/style.css";

export default function App() {
  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getProducts(
      (data) => {
        setProducts(data);
        setStatus(1);
      },
      (error) => {
        setStatus(2);
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {status === 0 && <LoadingScreen />}
        {status === 1 && <MainScreen products={products} />}
        {status === 2 && <ErrorScreen />}
      </main>
      <Footer />
    </div>
  );
}
