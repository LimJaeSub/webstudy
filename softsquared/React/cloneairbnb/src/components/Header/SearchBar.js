import React from "react";

function SearchBar() {
  return (
    <div className="searchBar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="searchBar-container">
        <div className="searchBar-block">
          <div>어디든지</div>
        </div>
        <div className="searchBar-block">
          <div>언제든일주일</div>
        </div>
        <div className="searchBar-block">
          <div>게스트 추가</div>
        </div>
      </div>
      <div className="searchBar-button">
        <div className="searchBar-button-icon-wrap">
          <span className="searchBar-button-icon material-symbols-outlined">
            search
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
