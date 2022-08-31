import Header from './components/Header.js';
import NavSlide from './components/NavSlide.js';
import React,{useState} from 'react';
function App() {
  const [housetype,setHouseType] = useState("");

  const HouseData = [
    {
      id:1,
      houseType:"number1",
      housename:"Kartepe",
      country:"터키",
      date:"9월 25일~30일",
      distance:"7,892km",
      price:128642,
      
    }
  ]

  const getData = (HouseType)=>{
    setHouseType(HouseType);
    console.log(`app.js number is ${housetype}`);
  }

  return (
    <div className="App">
      <Header></Header>
      <NavSlide housetype={housetype} getData={getData}></NavSlide>
    </div>
  );
}

export default App;


