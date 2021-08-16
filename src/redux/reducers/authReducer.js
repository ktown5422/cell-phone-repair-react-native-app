import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIGN_IN, LOGIN_FAIL, AUTHENTICATE, SIGN_OUT, SIGN_UP, USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/actionTypes';

const initialState = {
    token: null,
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            console.log('fetching')
            AsyncStorage.setItem('token',
            action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case SIGN_OUT:
        case LOGIN_FAIL:
            AsyncStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default:
            return state;
    }
}