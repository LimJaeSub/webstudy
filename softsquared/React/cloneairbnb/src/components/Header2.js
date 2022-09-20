import React from "react";
import SearchBar2 from "./SearchBar2.js";
import UserTools from "./UserTools.js";
import "./Header2.css";
import logo from "../img/airbnblogo.png";

function Header2() {
  return (
    <div className="header2-wrap">
      <div className="header2">
        <div className="logo">
          <img src={logo} className="airbnb-logo" alt="AirBnB" />
        </div>
        <div className="search2">
          <div className="wrap-searchBar2">
            <SearchBar2 className="searchBar2" />
          </div>
        </div>
        <div className="usertools">usetool</div>
      </div>
    </div>
  );
}

export default Header2;
