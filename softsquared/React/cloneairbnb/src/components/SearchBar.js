import React from 'react'

function SearchBar(props) {
  return (
    <div className={props.className}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className='searchBar-block'>어디든지</div>
        <div className='searchBar-block'>언제든일주일</div>
        <div className='searchBar-block'>게스트 추가</div>
        <div className='searchBar-button'>
            <div className="searchBar-button-icon-wrap">
                <span class="searchBar-button-icon material-symbols-outlined">search</span>
            </div>
        </div>
    </div>
  )
}

export default SearchBar