import React,{useEffect,useState} from 'react'
import Header2 from '../Header2.js';
import UserReview from './UserReview.jsx';
import {useLocation} from 'react-router-dom';
import './OrderHouse.css';
import 'react-day-picker/dist/style.css';



import SidebarRight from './SidebarRight.jsx';

import {isDateRange,DayPicker} from 'react-day-picker';
import {format} from 'date-fns';

const pastMonth = new Date();



function OrderHouse() {
  const location = useLocation();
  const information=location.state.houseinformation; //정보 전달
  const picture = location.state.housepicture;
  let daynight = 0;
  const [range, setRange] = useState(isDateRange);

  
  if (range?.from) {
    if (range.to) {
      daynight = (range.to - range.from)/(1000*60*60*24)
    }
  }



  return (
    <div>
        <Header2 />
        <div className="ordersection">
          <div className="house-title">
            <h1>{information.housename}</h1>
            <span>{information.star} 후기</span><span>호스트</span><span class="share_save">공유하기 저장</span>
          </div>

          <div className='house-picture-container'>
            <div className='house-picture-item'>
              <img src={picture[0]}></img>
            </div>
            <div className='house-picture-item'>
              <img src={picture[1]}></img>
            </div>
            <div className='house-picture-item'>
              <img src={picture[2]}></img>
            </div>
            <div className='house-picture-item'>
              <img src={picture[1]}></img>
            </div>
            <div className='house-picture-item'>
              <img src={picture[0]}></img>
            </div>
          </div>
          <section className='main'>
            <div className='housedetail'>
              <div className='detail-1'>
                <h3>{information.owner}님이 호스팅하는 섬</h3>
                <span>최대 인원 {information.maxpeople[0]}명 침실{information.maxpeople[1]}개 욕실 {information.maxpeople[2]}개</span>
              </div>
              <div className='detail-2'>
                <h4>{information.owner}님은 슈퍼호스트입니다</h4>
                <span className="superhostspan">슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</span>
                <h4>훌륭한 숙소 위치</h4>
                <span>최근 숙박한 게스트 중 94%가 위치에 별점 5점을 준 숙소입니다.</span>
                <h4>10월 8일 전까지 무료로 취소하실 수 있습니다.</h4>
              </div>
              <div className='detail-3'>
                <h2><span>에어</span>커버</h2>
                <p>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</p>
                <p className="more">더 알아보기</p>
              </div>
              <div className='detail-4'>
                <p>국립공원 내장산 구역안에 있는 송죽마을(구 솔티)의 꽃담아카데미 내에 있습니다. 2층 다락이 딸린 20m2의 내부공간(침실, 주방, 욕실)과 40m2의 목재데크가 있는 아치형 방갈로 형태의 독립주택입니다. 주변이 국립공원이라 반딧불이 서식하고 있고 앞개울 건너에 담비가 사는 최고의 자연환경을 유지하고 있습니다. 가족단위 휴식과 팀단위 MT에 적합하며 돔온실도 있어 30명 정도의 당일 워크샵도 가능합니다.
                </p>
                <p className='more'>더 보기</p>
              </div>
              <div className='checkoutdate'>
                <h3>{information.housename}에서 {daynight}박</h3>
                <DayPicker
                  mode="range"
                  defaultMonth={pastMonth}
                  selected={range}
                  onSelect={setRange}
                />
              </div>
              <div className='review'>
                <h3>평점 후기 133개</h3>
                <div className='userreview-container'>
                  <UserReview />
                </div>
              </div>
            </div>
            <aside className='sticky'>
              <SidebarRight daynight={daynight} />
            </aside>
          </section>
        </div>
    </div>
  )
}

export default OrderHouse


// fix 변수를 useState로 설정
// 이후 windowscroll이 일정 이상 넘어가면 sexfix로 true 반환
// 클래스명을 삼항연산자로 설정