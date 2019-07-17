  // const url = 'http://localhost:3000'
import { apiKey } from '../apiKey'

  export const fetchMovies = () => {
      return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}edd&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => res.results)
        .catch (error => error.message)   
  }

