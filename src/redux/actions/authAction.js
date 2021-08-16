import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AUTHENTICATE, SIGN_IN, LOGIN_FAIL, USER_LOADING, AUTH_ERROR } from './actionTypes';


export const signIn = ({email, password}) => async dispatch => {
    console.log('here')
    const response = await fetch(
      'http://localhost:3000/api/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGN_IN, payload: {id: resData.id, token: resData.token }});
};
      
