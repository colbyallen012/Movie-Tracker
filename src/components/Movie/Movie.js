import React from 'react';

const Movie = ({ poster, id, backDrop }) => {
  const imgSrc = `http://image.tmdb.org/t/p/w185//${poster}`
  return (
    <div>
      <img src={imgSrc} alt="movie poster"/>
    </div>
  )
}

export default Movie;