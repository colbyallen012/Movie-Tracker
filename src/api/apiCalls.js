  // const url = 'http://localhost:3000'
// import { apiKey } from '../apiKey'
const apiKey = process.env.REACT_APP_API_KEY

// const apiKey = '26b4ed9978c000b15baddff565ba3d67'

export const fetchMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(res => res.json())
    .then(res => res.results)
    .catch (error => error.message)   
}

export const addUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch('https://movietracker-be.herokuapp.com/api/v1/users', options)
  
    return response.ok;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to post error");
  }
}

export const getUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
   
    const response = await fetch('https://movietracker-be.herokuapp.com/api/v1/login', options)
    const result = await response.json()
    
    return result
  } catch (error) {
    throw new Error("Email and password do not match");
  } 
}

export const favoriteMovie = async (userId, movieInfo) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(movieInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`https://movietracker-be.herokuapp.com/api/v1/users/${userId}/favorites`, options)
    const result = await response.json()
    return result.data
  } catch (error) {
    throw new Error("failed to fetch favorites");
  }
}

export const fetchFavorites = async (userId) => {
  try {
    const response = await fetch(`https://movietracker-be.herokuapp.com/api/users/${userId}/favorites`);
    const result = await response.json();
    return result.data
  } catch (error) {
    throw new Error('Failed to fetch favorites');
  }
}

export const removeFavorite = async (userId, movieId) => {
  try {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`http://localhost:3001//api/v1/users/${userId}/favorites/${movieId}`, option);
    const result = await response.json();
    console.log(result);
  } catch (error) {

  }
}