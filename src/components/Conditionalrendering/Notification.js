import React from 'react'

const Notification = (props) => {
    const Notification=props.message!=undefined?props.message:"No Messasge...";
  return (
    <div>{Notification}</div>
  )
}

export default Notification