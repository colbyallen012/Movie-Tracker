import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import MovieContainter from '../MovieContainer/MovieContainer'
import MovieSpecs from '../MovieSpecs/MovieSpecs'
import AccountMenu from '../AccountMenu/AccountMenu'

const NavBar = ({movies}) => {
  return (
    <div className = 'header'>
      <NavLink to='/' className='nav'>Movies</NavLink>
      <NavLink to='/favorites' className='nav'>Favorites</NavLink>
      <AccountMenu />
      <Route exact path='/' render={() => <MovieContainter movies={movies}/>} />
      <Route exact path='/:id' render={({match}) => {
        const {id} = match.params;
        const description = movies.find(movie => {
          return movie.id === parseInt(id)
        });
        return description && <MovieSpecs {...description} />
      }}/>
      <Route exact path='/Favorites' component={MovieContainter}/>
    </div>
  )
}

export default NavBar;