import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';


export default combineReducers({
  auth: authReducer,
  appointments: appointmentReducer,
})


export default function UserReducer(prevState =[], action) {
    switch (action.type) {
      case RESTORE_TOKEN:
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case SIGN_IN:
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case SIGN_OUT:
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
}