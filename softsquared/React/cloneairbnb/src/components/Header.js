import React from 'react'
import SearchBar from './SearchBar.js';
import './Header.css';
import logo from '../img/airbnblogo.png'
function header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} className="airbnb-logo" alt="AirBnB" />
        </div>
        <div className='search'>
            <div className='wrap-searchBar'>
                <SearchBar className="searchBar" />
            </div>
        </div>
        <div className='usertools'>
            usertools
        </div>
    </div>
  )
}

export default header