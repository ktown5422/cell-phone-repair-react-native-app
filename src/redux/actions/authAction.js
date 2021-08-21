import AsyncStorage from '@react-native-async-storage/async-storage';

import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actionTypes';


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


      if (!response.ok) {
          throw new Error(resData.message);
        }

    const resData = await response.json();
    
    console.log(resData);
    dispatch({ type: SIGN_IN, payload: {id: resData.id, token: resData.token, first_name: resData.first_name, email: resData.email }});
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

      if (!response.ok) {
        throw new Error(resData.message);
      }
      
      const resData = await response.json();
      
      dispatch({ type: SIGN_UP});
    } catch (err) {
      throw err;
  
    }
};

// export const saveData = async (resData) => {
//   try {
//     const userData = JSON.stringify(resData)
//     await AsyncStorage.setItem('userData', userData)
//     alert('Data successfully saved')
//   } catch (e) {
//     alert('Failed to save the data to the storage')
//   }
// }
