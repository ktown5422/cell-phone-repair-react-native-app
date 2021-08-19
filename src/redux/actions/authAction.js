import AsyncStorage from '@react-native-async-storage/async-storage';

import { SIGN_IN, SIGN_UP } from './actionTypes';


export const signIn = ({email, password}) => async dispatch => {
    console.log('here')
    try {
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

  
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message);
    }
    console.log(resData);
    dispatch({ type: SIGN_IN, payload: {id: resData.id, token: resData.token }});
  } catch (err) {
    console.log(err);
  }
};

export const signUp = ({first_name, last_name, email, password}) => async dispatch => {
  console.log('signup')
  try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
        }),
      });
      
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message);
      }
      console.log(resData);
      dispatch({ type: SIGN_UP });
    } catch (err) {
      console.log(err);
  
    }
};
      
