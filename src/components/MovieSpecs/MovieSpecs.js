import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MovieSpecs/MovieSpecs.css'
import { connect } from 'react-redux';
import { favoriteMovie } from '../../api/apiCalls'; 

class MovieSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = () => {
    const { title, poster_path, overview, vote_average, release_date, user, id } = this.props;
    console.log(this.props.user)
    if (this.props.isFavorited === false) {
      favoriteMovie({ movie_id: id, user_id: user.id, title, poster_path, release_date, vote_average, overview, isFavorited: true});
    } else {
      console.log('already favorited')
    }
  }

  render() {
    const { title, backdrop_path, overview, vote_average, release_date, user} = this.props;
    const imgSrc = `http://image.tmdb.org/t/p/w1280//${backdrop_path}`
    return (
      <div className='container'>
        <h1 className='title'>{title} <span className='rating'> Rating : {vote_average} / 10 </span></h1>
        <img src={imgSrc} alt="movie backdrop" className='back-drop'/>
        <p className='description'>{overview}</p>
        <p className='date'>Release Date: {release_date}</p>
        <button onClick={() => this.handleClick()} >Favorite</button>
        <Link to={`/`} className='back-btn'>
          <button className='btn'>
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