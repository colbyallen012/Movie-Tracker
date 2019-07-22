// import React from 'react';
import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import MovieContainter from '../MovieContainer/MovieContainer'
import MovieSpecs from '../MovieSpecs/MovieSpecs'
import AccountMenu from '../AccountMenu/AccountMenu'
import SignUpMenu  from '../SignUpMenu/SignUpMenu'
import { logOut } from '../../actions';
import { connect } from 'react-redux';
import './NavBar.css'


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
    <div>
      <div className = 'header'>
        <h1 className='app-name'> <span className='bang'>!</span>Netflix</h1>
        <NavLink to='/favorites' className='nav-fav'>
          <button className='nav-btn'>Favorites</button>
        </NavLink>
        <NavLink to='/signup' className='nav-sign-up'>
          <button className='nav-btn'>Sign Up</button>
        </NavLink>
      </div>
      <Route exact path='/' render={() => 
        <section>
          <AccountMenu user={this.props.user}/>
          <MovieContainter movies={this.props.movies}/> 
        </section>
      }/>
      <Route exact path='/Login' render={() =>
        <section>
          <div className='logged-in-bar'>
            <h2 className='user-name'>{this.props.user.name && `Welcome ${this.props.user.name}!`}</h2>
            <button className='sign-out-btn' onClick={this.logoutUser}>Sign Out</button>
          </div>
          <MovieContainter movies={this.props.movies}/> 
        </section> 
      }/>
      <Route exact path='/:id' render={({match}) => {
        const {id} = match.params;
        const description = this.props.movies.find(movie => {
          return movie.id === parseInt(id)
        });
        return description && <MovieSpecs {...description} />
      }}/>
      <Route exact path='/Favorites' render={() =>
      <section>
        <h2>{this.props.user.name && `Welcome ${this.props.user.name}!`}</h2>
        <button onClick={this.logoutUser}>Sign Out</button>
        <MovieContainter movies={this.props.userFavorites} />
      </section>
      }/>
      <Route exact path='/signup' render={() => 
        <section>
          <SignUpMenu user={this.props.user}/>
          <MovieContainter movies={this.props.movies}/> 
        </section>
      }/>
    </div>
    )
  }
}

const mapStateToProps = store => ({
  userFavorites: store.userFavorites
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);