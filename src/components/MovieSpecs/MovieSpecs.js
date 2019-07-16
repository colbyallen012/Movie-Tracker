import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieSpecs/MovieSpecs.css'

const MovieSpecs = ({title, backdrop_path, overview, release_date}) => {
  const imgSrc = `http://image.tmdb.org/t/p/w185//${backdrop_path}`
  return (
    <div>
      <h1>{title}</h1>
      <img src={imgSrc} alt="movie backdrop"className='back-drop'/>
      <p>Synopsis: {overview}</p>
      <p>Release Date: {release_date}</p>
      <Link to={`/`} className='back-btn'>◀ back</Link>
    </div>
  )
}

export default MovieSpecs;