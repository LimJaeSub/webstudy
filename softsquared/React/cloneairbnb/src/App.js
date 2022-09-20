import Home from "./Home.jsx";
import Header from "./components/Header.js";
import OrderHouse from "./components/buysection/OrderHouse.jsx";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Order" element={<OrderHouse />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
