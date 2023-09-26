import React from 'react'

function CurrentDate() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="date">
      <h1>Current date is {date}</h1>    
      </div>
  );
}
export default CurrentDate;