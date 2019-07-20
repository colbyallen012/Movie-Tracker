import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieSpecs/MovieSpecs.css'

const MovieSpecs = ({title, backdrop_path, overview, vote_average, release_date}) => {
  const imgSrc = `http://image.tmdb.org/t/p/w1280//${backdrop_path}`
  return (
    <div className='container'>
      <h1 className='title'>{title} <span className='rating'> Rating : {vote_average} / 10 </span></h1>
      <img src={imgSrc} alt="movie backdrop" className='back-drop'/>
      <p className='description'>{overview}</p>
      <p className='date'>Release Date: {release_date}</p>
      <Link to={`/`} className='back-btn'>
        <button className='btn'>
         ◀ back
        </button>
      </Link>
    </div>
  )
}

export default MovieSpecs;