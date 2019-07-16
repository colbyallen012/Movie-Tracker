import React from 'react';
import Movie from '../Movie/Movie';

const MovieContainer = ({ recentMovies }) => {
  const displayMovies = recentMovies.map(movie => {
    return (<Movie
      backDrop={movie.backdrop_path}
      poster={movie.poster_path}
      id={movie.id}
      key={movie.id}
    />)
  })
  return (
    <section className='movie-container'>
      {displayMovies}
    </section>
  )
}

export default MovieContainer;