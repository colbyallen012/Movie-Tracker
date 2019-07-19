export const showMovies = (movies) => ({
  type: 'SHOW_MOVIES',
  movies
});

export const signUp = (user) => ({
  type: 'SIGN_UP',
  user
})

export const login = (user) => ({
  type: 'LOGIN',
  user
});

export const showError = (error) => ({
  type: "SHOW_ERROR",
  error
});