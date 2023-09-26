import React from 'react'
const arr=["Life is like riding a bicycle. To keep your balance, you must keep moving.","May the Force be with you","No one can make you feel inferior without your consent."]
const Quote = () => {
const num=Math.floor(Math.random()*3);
  return (
   <h1><br></br>{arr[num]}</h1>
  )
}

export default Quote;