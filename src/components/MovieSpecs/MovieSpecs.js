import React from 'react';
import { Link } from 'react-router-dom';

const MovieSpecs = ({title, id}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/`} className='back-btn'>◀ back</Link>
    </div>
  )
}

export default MovieSpecs;