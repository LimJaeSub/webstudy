import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom';

function Roadmap() {
  const navigate = useNavigate();
    const onClickgoHome = ()=>{
        navigate('/');
    }
    // 1. location 훅 취득
    const location = useLocation();

    // 2. location에서 props값 꺼내기
    console.log(location);
    const {id,roadmap} = location.state;
  return (
    <div>
        <h3>Here is Roadmap</h3>
        <p>id : {id}</p>
        <p>roadmap : {roadmap}</p>
        <button onClick={onClickgoHome}>홈화면으로 이동</button>
    </div>
  )
}

export default Roadmap