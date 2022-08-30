import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";
import './NavSlide.css';

import Icon1 from '../img/icon/icon1.jpg'
import Icon2 from '../img/icon/icon2.jpg'
import Icon3 from '../img/icon/icon3.jpg'
import Icon4 from '../img/icon/icon4.jpg'
import Icon5 from '../img/icon/icon5.jpg'
import Icon6 from '../img/icon/icon6.jpg'
import Icon7 from '../img/icon/icon7.jpg'
import Icon8 from '../img/icon/icon8.jpg'
import Icon9 from '../img/icon/icon9.jpg'
import Icon10 from '../img/icon/icon10.jpg'
const NavSlide = ()=>{
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:5,
        slidesToScroll:2
    }

    return(
        <div className="wrap-slider">
            <Slider {...settings}>
                <div className="slider-block">
                    <img src={Icon1}></img>
                    <span>A자형 주택</span>
                </div>
                <div className="slider-block">
                    <img src={Icon2}></img>
                    <span>섬</span>
                </div>
                <div className="slider-block">
                    <img src={Icon3}></img>
                    <span>해변 근처</span>
                </div>
                <div className="slider-block">
                    <img src={Icon4}></img>
                    <span>호숫가</span>
                </div>
                <div className="slider-block">
                    <img src={Icon5}></img>
                    <span>통나무집</span>
                </div>
                <div className="slider-block">
                    <img src={Icon6}></img>
                    <span>디자인</span>
                </div>
                <div className="slider-block">
                    <img src={Icon7}></img>
                    <span>초소형 주택</span>
                </div>
                <div className="slider-block">
                    <img src={Icon8}></img>
                    <span>국립공원</span>
                </div>
                <div className="slider-block">
                    <img src={Icon9}></img>
                    <span>기상천외한 숙소</span>
                </div>
                <div className="slider-block">
                    <img src={Icon10}></img>
                    <span>캠핑장</span>
                </div>
            </Slider>
        </div>
    )
}

export default NavSlide