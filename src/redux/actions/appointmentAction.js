import axios from 'axios';
import { useSelector } from 'react-redux';
import { GET_APPOINTMENTS, ADD_APPOINTMENTS, CREATE_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT} from './actionTypes';


export const getAppointments = () => async (dispatch, getState) => {
    const userId = getState().auth.id;

    // const state = getState();
    // console.log('state', state)
    
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

export const createAppointment = ({ imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime, onSuccess = () => {} }) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  
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
 
   dispatch({ type: CREATE_APPOINTMENT, appointmentData: { imageUrl, name, price, description, phoneType, appointmentDate, appointmentTime, creator: userId } });
   onSuccess();
};

export const updateAppointment = ({ id, price, description, phoneType, appointmentDate, appointmentTime, onSuccess = () => {}  }) => async (dispatch, getState) => {
  
  // const id = getState().appointments.appointments.find(appoint => appoint['id'])
  // const  id  = route.params;

  const response = await fetch(
    `http://localhost:3000/api/appointments/${id}`, 
    {
     method: 'PATCH',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       price: price,
       description: description,
       phoneType: phoneType.label,
       appointmentDate: appointmentDate,
       appointmentTime: appointmentTime,
     })
   }
 );
 const resData = await response.json();
 console.log(resData);
 
 if (!response.ok) {
   throw new Error('err')
 }

 dispatch({ type: EDIT_APPOINTMENT, aid: id, appointmentData: { price, description, phoneType, appointmentDate, appointmentTime } });
}

export const deleteAppointment = (id) => async (dispatch, getState) => {
  const response = await fetch(
    `http://localhost:3000/api/appointments/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  dispatch({ type: DELETE_APPOINTMENT, aid: id });
}