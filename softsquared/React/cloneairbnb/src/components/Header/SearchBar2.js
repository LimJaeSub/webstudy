import React from "react";

function SearchBar2(props) {
  return (
    <div className={props.className}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="searchBar-block">검색 시작하기</div>
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

export default SearchBar2;
