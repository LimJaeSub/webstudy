import React from 'react'
import Header2 from '../Header2.js';
function orderHouse() {
  return (
    <div>
        <Header2 />
        <div className="ordersection">
          <div className="house-title">
            <h3>여기에 집 제목 쓸거임</h3>
            <span>평점,후기</span><span>호스트</span><span>공유하기 저장</span>
          </div>

          <div className='house-picture-container'>
            <div className='house-picture-item'>사진1</div>
            <div className='house-picture-item'>사진2</div>
            <div className='house-picture-item'>사진3</div>
            <div className='house-picture-item'>사진4</div>
            <div className='house-picture-item'>사진5</div>
          </div>

          <div className='housedetail'>
            <div className='detail-1'>
              <h3>집주인 님이 호스팅하는 섬</h3>
              <span>최대 인원 n명 침실n개 욕실 n개</span>
            </div>
            <div className='detail-2'>
              <h4>집주인님은 슈퍼호스트입니다</h4>
              <span>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</span>
              <h4>훌륭한 숙소 위치</h4>
              <span>최근 숙박한 게스트 중 94%가 위치에 별점 5점을 준 숙소입니다.</span>
              <h4>10월 8일 전까지 무료로 취소하실 수 있습니다.</h4>
            </div>
            <div className='detail-3'>
              <h4>에어커버</h4>
              <span>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</span>
            </div>
            <div className='detail-4'>
              <span>최대 24명까지 수용할 수 있습니다. 결혼식 및 이벤트 수락</span>
            </div>
            <div className='checkoutdate'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default orderHouse