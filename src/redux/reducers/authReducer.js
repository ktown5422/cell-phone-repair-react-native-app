import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIGN_IN, LOGIN_FAIL, AUTHENTICATE, SIGN_OUT, SIGN_UP, USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/actionTypes';
import { getMyObject } from '../actions/authAction';

const initialState = {
    token: null,
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            action.payload.token;
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case SIGN_OUT:
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default:
            return state;
    }
}