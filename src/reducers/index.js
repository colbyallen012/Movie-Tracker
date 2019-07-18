import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { signUpReducer, loginUserReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  login: loginUserReducer,
  signUp: signUpReducer
});

export default rootReducer;