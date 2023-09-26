import React from 'react'
const str="Life is like riding a bicycle. To keep your balance, you must keep moving."
const str1=str.split(" ");
const str2=str1.length;
const Wordcount = () => {
  return (
    <div>
    <h1>Totat number of Words in paragraph is</h1>
    <p>{str2}</p>
    </div>
  )
}

export default Wordcount