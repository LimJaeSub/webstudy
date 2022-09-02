import React,{useState} from 'react'
import HouseSlide from './HouseSlide.js';
import HouseInformation from './HouseInformation.js';
import './House.css';
function House(props) {
  const picture = props.picture;
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
        <HouseSlide picture={picture}  />
        <HouseInformation information={information}/>
    </div>
  )
}

export default House