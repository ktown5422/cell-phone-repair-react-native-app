import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../actions/auth';


const initialState = {
    token: null,
    userId: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          token: action.token,
          userId: action.userId
        };
      case REGISTER_SUCCESS:
        return {
          token: action.token,
          userId: action.userId
        };
      default:
        return state;
    }
  };