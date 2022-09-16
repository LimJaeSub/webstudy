import React,{useState} from 'react'
import HouseSlide from './HouseSlide.js';
import HouseInformation from './HouseInformation.js';
import './House.css';
function House(props) {
  const picture = props.picture;
  const getData2 = props.getData2;  
  const onClickHouseSlide = ()=>{
    const dispatchHouseData = {
      price:props.price,
      star:props.star,
      housename:props.housename,
      picture:props.picture,
    }
    getData2(dispatchHouseData);
  }
  const information={
    key:props.key,
    housename:props.housename,
    date:props.date,
    distance:props.distance,
    price:props.price,
    star:props.star,
  }
  return (
    <div className='wrap-house'>
        <div onClick={onClickHouseSlide}>
          <HouseSlide picture={picture}/>
        </div>
        <HouseInformation information={information}/>
    </div>
  )
}

export default House