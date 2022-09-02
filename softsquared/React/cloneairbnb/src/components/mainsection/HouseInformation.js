import React from 'react'

function HouseInformation({information}) {
  return (
    <div className="information-container">
        <div className="information-block">{information.housename}</div>
        <div className='information-block'>{information.star}</div>
        <div className="information-block">{information.distance}</div>
        <div className="information-block">{information.date}</div>
        <div className="information-block">{information.price}</div>
    </div>
  )
}

export default HouseInformation