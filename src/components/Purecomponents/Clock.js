import React from 'react'

const Clock = () => {
    const time=new Date();
    const h=time.getHours();
    const m=time.getMinutes();
    const s= time.getSeconds();
  return (
    <div>{h}:{m}:{s}</div>
  )
}

export default Clock;