import Home from "./Home.jsx";
import Header from "./components/Header/Header.js";
import OrderHouse from "./components/buysection/OrderHouse.jsx";
import Reservation from "./components/reservation/Reservation.jsx";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/OrderHouse" element={<OrderHouse />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// npm install @mui/icons-material
// npm install react-icons --save
