export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_MOVIES':
      return action.movies;

    case 'TOGGLE_FAVORITE':
      let newState = [...state].map(movie => {
        if(movie.id === action.movieId){
          movie.isFavorited = !movie.isFavorited
        }
        return movie;
      })
      console.log(newState)

    default:
      return state;
  }
}