import axios from 'axios';
import { useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';
import { GET_APPOINTMENTS, ADD_APPOINTMENTS, CREATE_APPOINTMENT} from './actionTypes';


export const getAppointments = () => async (dispatch, getState) => {
    const userId = getState().auth.id;
    
    try {
      const response = await fetch(
        `http://localhost:3000/api/appointments/users/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('err')
      }
  
      const resData = await response.json();
  
      // console.log(resData);
      dispatch({ type: GET_APPOINTMENTS, payload: resData.appointments });

    } catch (err) {
      throw err
    }
    
};

export const createAppointment = ({ imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime }) => async (dispatch, getState, navigation) => {
  const userId = getState().auth.id;

  // console.log('newappointment', imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime)

    const response = await fetch(
      "http://localhost:3000/api/appointments/", 
      {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         imageUrl: imageUrl,
         name: name,
         price: price,
         description: description,
         phoneType: phoneType.label,
         appointmentDate: appointmentDate,
         appointmentTime: appointmentTime,
         creator: userId
       })
     }
   );
   const resData = await response.json();
   console.log(resData);
   
   if (!response.ok) {
     throw new Error('err')
   }
 
   dispatch({ type: CREATE_APPOINTMENT, responseData: { imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime, creator: userId } });

  const jumpToAction = TabActions.jumpTo('AppointmentNavigator');

  navigation.dispatch(jumpToAction);  
};

// export const deleteAppointment