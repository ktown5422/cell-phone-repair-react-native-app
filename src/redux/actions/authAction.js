import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../../constants/routeNames';

import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actionTypes';


export const signIn = ({email, password}) => async (dispatch, getState) => {
    try {
        const response = await fetch(
          'http://localhost:3000/api/users/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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
    
    dispatch({ type: SIGN_IN, payload: {id: resData.id, token: resData.token, first_name: resData.first_name, email: resData.email, profile_img: resData.profile_img }});
  } catch (err) {
    console.log(err);
  }
};

export const signUp = ({ profile_img, first_name, last_name, email, password}) => async dispatch => {
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
          profile_img: profile_img,
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
