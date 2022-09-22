import NavSlide from "./components/NavSlide.js";
import Header from './components/Header.js';
import House from "./components/mainsection/House.js";
import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import __house1 from "./img/house/house1.jpeg";
import __house2 from "./img/house/house2.jpg";
import __house3 from "./img/house/house3.jpg";
import __house4 from "./img/house/house4.jpg";
import __house5 from "./img/house/house5.jpeg";
import __house6 from "./img/house/house6.jpg";
import __house7 from "./img/house/house7.jpg";
import __house8 from "./img/house/house8.jpg";
import __house9 from "./img/house/house9.jpg";
import __house10 from "./img/house/house10.jpg";



const HouseData = [
    {
      key: 1,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house1, __house2, __house3],
      housetitle: "별이 ",
    },
    {
      key: 2,
      houseStyle: "number1",
      housename: "드루스키닌카이, 리투아니아",
      date: "9월 2일~8일",
      distance: "7,466km",
      price: 255114,
      star: "★ 4.87",
      picture: [__house4, __house5, __house6],
    },
    {
      key: 3,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house7, __house8, __house9],
    },
    {
      key: 4,
      houseStyle: "number2",
      housename: "조천읍,제주시,한국",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house1, __house5, __house9],
    },
    {
      key: 5,
      houseStyle: "number2",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house2, __house8, __house6],
    },
    {
      key: 6,
      houseStyle: "number2",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house3, __house10, __house9],
    },
    {
      key: 7,
      houseStyle: "number3",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house4, __house7, __house9],
    },
    {
      key: 8,
      houseStyle: "number3",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house5, __house8, __house10],
    },
    {
      key: 9,
      houseStyle: "number3",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 10,
      houseStyle: "number4",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house7, __house4, __house3],
    },
    {
      key: 11,
      houseStyle: "number4",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house8, __house1, __house2],
    },
    {
      key: 12,
      houseStyle: "number4",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house9, __house10, __house4],
    },
    {
      key: 13,
      houseStyle: "number5",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 14,
      houseStyle: "number5",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 15,
      houseStyle: "number5",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 16,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 17,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 18,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 19,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 20,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
    {
      key: 21,
      houseStyle: "number1",
      housename: "Kartepe ,터키",
      date: "9월 25일~30일",
      distance: "7,892km",
      price: 128642,
      star: "★ 4.87",
      picture: [__house6, __house5, __house1],
    },
  ];

function Home() {

    const [housetype, setHouseType] = useState("number1");

    const getData = (HouseType) => {
      setHouseType(HouseType);
    };
  
    const filterarray = HouseData.filter((it) => it.houseStyle === housetype);
  return (
    <div className="App">
        <Header />
        <div>
          <NavSlide housetype={housetype} getData={getData}></NavSlide>
          <section className="mainsection">
            {filterarray.map((data) => (
              <House
                key={data.key}
                houseStyle={data.houseStyle}
                housename={data.housename}
                date={data.date}
                distance={data.distance}
                price={data.price}
                star={data.star}
                picture={data.picture}
              ></House>
            ))}
          </section>
        </div>
    </div>
  )
}

export default Home