import React from "react";
import SearchBar from "./SearchBar.js";
import UserTools from "./UserTools.js";
import "./Header.css";
import logo from "../../img/airbnblogo.png";
function header() {
  return (
    <div className="header-wrap">
      <div className="header">
        <div className="logo">
          <img src={logo} className="airbnb-logo" alt="AirBnB" />
        </div>
        <div className="search">
          <div className="wrap-searchBar">
            <SearchBar />
          </div>
        </div>
        <div className="usertools">
          <UserTools className="wrap-usertools" />
        </div>
      </div>
    </div>
  );
}

export default header;
