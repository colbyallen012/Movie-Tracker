export const signUpReducer = (state = {}, action) => { 
  switch(action.type) {
    case 'SIGN_UP':
      return action.user;
    default:
      return state;
    }
}

export const loginUserReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
}