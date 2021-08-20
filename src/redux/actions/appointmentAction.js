import axios from 'axios';
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

export const createAppointment = ({name, price, description, phoneType, appointmentDate, appointmentTime}) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  console.log('newappointment', userId)

  try {
    const response = await fetch(
      "http://localhost:3000/api/appointments/",
      {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: name,
         price: price,
         description: description,
         phoneType: phoneType,
         appointmentDate: appointmentDate,
         appointmentTime: appointmentTime,
         creator: userId
       })
     }
   );
 
   if (!response.ok) {
     throw new Error('err')
   }
 
   const resData = await response.json();
   console.log(resData);
   dispatch({ type: CREATE_APPOINTMENT, appointmentData: { name, price, description, phoneType, appointmentDate, appointmentTime, creator: userId } });

  } catch (error) {
    throw error;
  }
  
};

// export const deleteAppointment