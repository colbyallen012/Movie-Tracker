import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { signUpReducer } from './userReducer';
import { loginUserReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginUserReducer,
  signUp: signUpReducer
});

export default rootReducer;