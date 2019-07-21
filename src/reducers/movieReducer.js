export const movieReducer = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_MOVIES':
      return action.movies;

    default:
      return state;
  }
}