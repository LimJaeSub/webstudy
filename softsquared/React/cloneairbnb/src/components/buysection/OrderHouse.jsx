import React from 'react'
import Header2 from '../Header2.js';
import UserReview from './UserReview.jsx';
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

          <div>
            fixed nav 임
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
              <p>공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.
                    의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다.
                    대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다. 대법원장은 국회의 동의를 얻어 대통령이 임명한다. 국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.
              </p>
            </div>
            <div className='checkoutdate'>
              <h3>집이름에서 n박</h3>
              <span>보낼날짜</span>
            </div>
            <div className='review'>
              <h3>평점 후기 133개</h3>
              <div className='userreview-container'>
                <UserReview />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default orderHouse


// fix 변수를 useState로 설정
// 이후 windowscroll이 일정 이상 넘어가면 sexfix로 true 반환
// 클래스명을 삼항연산자로 설정