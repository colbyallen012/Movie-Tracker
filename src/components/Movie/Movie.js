import React from 'react';
import '../Movie/Movie.css'

const Movie = ({ poster, id, backDrop }) => {
  const imgSrc = `http://image.tmdb.org/t/p/w185//${poster}`
  return (
    <div className='movie'>
      <img src={imgSrc} alt="movie poster"/>
    </div>
  )
}

export default Movie;