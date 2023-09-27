import React from 'react'
let guest=0;
const StrictMode = () => {
    guest=guest+2;
  return (
    <h2>Bring a Bat to play {guest}</h2>
    )
}

export default StrictMode