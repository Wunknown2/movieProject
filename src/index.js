import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./components/context/AuthContextProvider";
import MovieContextProvider from "./components/context/MovieContextProvider";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/context/CartContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MovieContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
