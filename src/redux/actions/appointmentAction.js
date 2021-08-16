import axios from 'axios';
import { GET_APPOINTMENTS } from './actionTypes';


export const getAppointments = () => async dispatch => {
   await axios.get('http://localhost:3000/api/appointments/users/611280b81de2dba7a282faca')
        .then(res => {
            dispatch({
                type: GET_APPOINTMENTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};