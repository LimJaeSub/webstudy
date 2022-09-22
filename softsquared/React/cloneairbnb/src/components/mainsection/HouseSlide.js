import React from 'react'
import Slider from 'react-slick';
import './SlideStyle.css';
import './slick-theme-house.css';
import './HouseSlide.css';

// image
import __house1 from '../../img/house/house1.jpeg';
import __house2 from '../../img/house/house2.jpg';
import __house3 from '../../img/house/house3.jpg';
import __house4 from '../../img/house/house4.jpg';
import __house5 from '../../img/house/house5.jpeg';
import __house6 from '../../img/house/house6.jpg';
import __house7 from '../../img/house/house7.jpg';
import __house8 from '../../img/house/house8.jpg';
import __house9 from '../../img/house/house9.jpg';
import __house10 from '../../img/house/house10.jpg';

function HouseSlide(props) {

    const settings={
        dots:false,
        infinite:true,
        speed:500,
        fade:true,
        cssEase:'linear',
        prevArrow:false,
        nextArrow:false,
    }


    

    const showpicture = props.picture;
  return (
    <div className='wrap-houseslide'>
        <Slider className='slick-slider-house' {...settings}>
            <div className='block-house'>
                <img src={showpicture[0]} onClick={props.click} />
            </div>
            <div className='block-house'>
                <img src={showpicture[1]} onClick={props.click}></img>
            </div>
            <div className='block-house'>
                <img src={showpicture[2]} onClick={props.click}></img>
            </div>
        </Slider>
    </div>
  )
}

export default HouseSlide