import React from 'react'

const Age = (props) => {
    const age=props.age>18?"Adult":"Minor"
  return (
    <div>{age}</div>
  )
}

export default Age