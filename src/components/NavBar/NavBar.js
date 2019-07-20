// import React from 'react';
import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import MovieContainter from '../MovieContainer/MovieContainer'
import MovieSpecs from '../MovieSpecs/MovieSpecs'
import AccountMenu from '../AccountMenu/AccountMenu'
import SignUpMenu  from '../SignUpMenu/SignUpMenu'
import { logOut } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logoutUser = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render () {
  return (
    <div className = 'header'>
      <NavLink to='/favorites' className='nav'>Favorites</NavLink>
      <NavLink to='/signup' className='nav'>Signup</NavLink>
      <Route exact path='/' render={() => 
      <div>
        <AccountMenu user={this.props.user}/>
        <MovieContainter movies={this.props.movies}/> 
      </div>
      }/>
      <Route exact path='/Login' render={() =>
        <div>
          <h2>{this.props.user.name && `Welcome ${this.props.user.name}!`}</h2>
          <button onClick={this.logoutUser}>Sign Out</button>
          <MovieContainter movies={this.props.movies}/> 
        </div> 
      }/>
      <Route exact path='/:id' render={({match}) => {
        const {id} = match.params;
        const description = this.props.movies.find(movie => {
          return movie.id === parseInt(id)
        });
        return description && <MovieSpecs {...description} />
      }}/>
      <Route exact path='/Favorites' component={MovieContainter}/>
      <Route exact path='/signup' render={() => 
      <div>
        <SignUpMenu user={this.props.user}/>
        <MovieContainter movies={this.props.movies}/> 
      </div>
      }/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(null, mapDispatchToProps)(NavBar);