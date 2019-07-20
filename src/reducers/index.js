import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { loginUserReducer, showErrorReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  login: loginUserReducer,
  showError: showErrorReducer
});

export default rootReducer;