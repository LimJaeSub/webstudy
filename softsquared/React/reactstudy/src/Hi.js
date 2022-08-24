import React from 'react'

function Hi(props) {
    const data = props.users;
  return (
    <div>User name is {data.username}</div>
  )
}

export default Hi