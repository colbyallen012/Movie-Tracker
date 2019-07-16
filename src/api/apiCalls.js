  // const url = 'http://localhost:3000'

  export const fetchMovies = (params) => {
      return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=044b86cc1259591cb5a872bda8d25edd&language=en-US&page=1`)
        .then(res => res.json())
        .catch (error => error.message)   
  }

