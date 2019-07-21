import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MovieSpecs/MovieSpecs.css'
import { connect } from 'react-redux';
import { favoriteMovie, removeFavorite } from '../../api/apiCalls';

class MovieSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  handleClick = () => {
    const { title, poster_path, overview, vote_average, release_date, user, id } = this.props;
    console.log(this.props.user)
    if (this.props.isFavorited === false) {
      favoriteMovie({ movie_id: id, user_id: user.id, title, poster_path, release_date, vote_average, overview, isFavorited: true});
    } else {
      removeFavorite(user.id, id);
    }
  }
  
  render() {
    const { title, backdrop_path, overview, vote_average, release_date, user} = this.props;
    console.log(this.props)
    const imgSrc = `http://image.tmdb.org/t/p/w1280//${backdrop_path}`
    return (
      <div className='container'>
        <h1 className='title'>{title}
          <span className='rating'> Rating : {vote_average} / 10 </span>
          <button onClick={() => this.handleClick()} className='btn'>
            Add to Favorites
          </button>
        </h1>
        <img src={imgSrc} alt="movie backdrop" className='back-drop'/>
        <p className='description'>{overview}</p>
        <p className='date'>Release Date: {release_date}</p>
        <h3>{this.state.error}</h3>
        <Link to={`/Login`}>
          <button className='back-btn'>
           ◀ back
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.login,
})

export default connect(mapStateToProps)(MovieSpecs);