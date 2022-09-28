import React from 'react'

function UserTools(props) {
  return (
    <div className={props.className}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className='usertools-block usertools-host'>호스트 되기</div>
        <div className='usertools-block usertools-language'>
          <span className="material-symbols-outlined">
            language
          </span>
        </div>
        <div className='usertools-block usertools-login'>로그인</div>
    </div>
  )
}

export default UserTools