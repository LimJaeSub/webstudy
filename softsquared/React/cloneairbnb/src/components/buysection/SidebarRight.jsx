import React, {useState} from 'react'


function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <span>{props.name}</span>
      <span>{props.age}</span>
    </li>
  );
}
function SidebarRight() {
  const [isopen,setIsopen] = useState(false);
  const age = 25;

  const onClicktriggerfunction = ()=>{
    setIsopen(!isopen);
  }
  return (
    <div className="reservation-sidebar">
      <div className="sidebar-block reservation-header">
        <h2>금액/박</h2>
        <span>평점,후기</span>
      </div>
      <div className='sidebar-block datepicker'>
        <div className="checkin">
          <p>체크인</p>
          <span>날짜</span>
        </div>
        <div className='checkout'>
          <p>체크아웃</p>
          <span>날짜</span>
        </div>
        <div className='sidebar-block peoplecount'>
          <div className='menu-open-trigger' onClick={onClicktriggerfunction}>게스트 1명</div>
          <div className={`dropdown-menu ${isopen?'active':'inactive'}`}>
            <ul>
              <DropdownItem name={"성인"} age={age} />
              <DropdownItem name={"유아"} age={8} />
              <DropdownItem name={"반려동물"} age={3} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight


