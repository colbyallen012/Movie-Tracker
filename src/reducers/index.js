import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { signUpReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  signUp: signUpReducer
});

export default rootReducer;