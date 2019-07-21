export const showMovies = (movies) => ({
  type: 'SHOW_MOVIES',
  movies
});

export const login = (user) => ({
  type: 'LOGIN',
  user
});

export const logOut = () => ({
  type: 'LOGOUT'
})

export const showError = (error) => ({
  type: "SHOW_ERROR",
  error
});

export const toggleFavorite = (movieId) => ({
  type: 'TOGGLE_FAVORITE',
  movieId
})
