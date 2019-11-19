import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AcountMenu from '../AccountMenu/AccountMenu'
import '../MovieSpecs/MovieSpecs.css'
import { connect } from 'react-redux';
import { favoriteMovie, removeFavorite, fetchFavorites } from '../../api/apiCalls';
import { setFavorites } from '../../actions'


class MovieSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isFavorited: false,
    }
  }


  handleFavorite = async () => {
    if (this.state.isFavorited === true) {
      return
    }
    try {
      const { title, poster_path, overview, vote_average, release_date, user, id} = this.props;
      await favoriteMovie({ movie_id: id, user_id: user.id, title, poster_path, release_date, vote_average, overview});
      await fetchFavorites(user.id)
      .then(result => this.props.setFavorites(result))
      this.setState({ isFavorited: true })
    } catch (error) {
      console.log(error.message)
    }

  }

  handleDelete = async () => {
    try {
      const {user, id} = this.props;
      await removeFavorite(user.id, id)
      await fetchFavorites(user.id)
      .then(result => this.props.setFavorites(result))
      this.setState({ isFavorited: false });
    } catch (error) {
      console.log(error.message)
    }
  }
 
  render() {
    const { title, backdrop_path, overview, vote_average, release_date, user} = this.props;
    console.log(this.props)
    const imgSrc = `http://image.tmdb.org/t/p/w1280//${backdrop_path}`
    return (
      <div className='container'>
        <section className='specs'>
          <h2 className='title'>{title}</h2>
          <h3 className='rating'> Rating : {vote_average} / 10</h3>
          <h3 className='date'>Release Date: {release_date}</h3>
          <p className='description'>{overview}</p>
          <h3>{this.state.error}</h3>
          <button onClick={() => this.handleFavorite()} className='btn'>
            Add to Favorites
            </button>
            <button onClick={() => this.handleDelete()} className='btn'>
            Delete Favorite
            </button>
          <Link to={`/LoggedIn`}>
            <button className='back-btn'>
           ◀ Back
            </button>
          </Link>
        </section>
        <section className='image'>
          <img src={imgSrc} alt="movie backdrop" className='back-drop'/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.login,
})

const mapDispatchToProps = dispatch => ({
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSpecs);