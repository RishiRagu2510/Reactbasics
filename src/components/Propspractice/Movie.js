import React from 'react'


const Movie = (Props) => {
    const rating=Props.Rating||"Not Rated";
  return (
    <>
    <div>Movie is {Props.title}</div>
    <div>{Props.title} is {Props.year}</div>
    <div>{Props.title} is {rating}</div>

    </>
    )
}

export default Movie