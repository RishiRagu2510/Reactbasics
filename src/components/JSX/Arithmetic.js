import React from 'react'
var a=10;
var b=5;
var d=a+b;
var c=a-b;
var e=a*b;
var f=a/b;
const Arithmetic = () => {
  return (
    <div>
    <h1>Add is {d}</h1>
    <h1>Sub is {c}</h1>
    <h1>Mul is {e}</h1>
    <h1>Div is {f}</h1>
    </div>
  );
}

export default Arithmetic