import React from 'react'
import {useNavigate} from 'react-router-dom';
function Linkpage() {
    const navigate = useNavigate();
    const onClickgoHome = ()=>{
        navigate('/');
    }
  return (
    <div>
        <h3>Here is Linkpage</h3>
        <button onClick={onClickgoHome}>홈화면으로 이동</button>
    </div>
  )
}

export default Linkpage