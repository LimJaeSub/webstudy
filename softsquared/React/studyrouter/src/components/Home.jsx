import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const moveRoadmap = ()=>{
    navigate('/Roadmap',{
      state:{
        id:1,
        roadmap:"frontend",
      }
    })
  }
  return (
    <div>
        <h2>Here is home</h2>
        <Link to="/Linkpage" className='link'>링크페이지</Link>
        <Link to="/Course" className='link'>Course</Link>
        <button onClick={moveRoadmap}>Roadmap</button>
    </div>
  )
}

export default Home