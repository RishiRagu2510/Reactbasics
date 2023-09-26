import React from 'react'

const Userstatus = (props) => {
const userstatus=props.isOnline?"Online":"Offline"
return(
    <div>{userstatus}</div>
  )
}

export default Userstatus