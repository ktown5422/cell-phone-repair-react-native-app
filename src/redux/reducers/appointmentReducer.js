import Appointment from '../../models/appointment';
import { 
    GET_APPOINTMENTS,
    DELETE_APPOINTMENT,
    ADD_APPOINTMENT,
    CREATE_APPOINTMENT,
    SIGN_OUT
    } from '../actions/actionTypes';

const initialState = {
    appointments: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload
            };
        case CREATE_APPOINTMENT:
            const newAppointment = new Appointment (
                action.appointmentData.imageUrl,
                action.appointmentData.name,
                action.appointmentData.price,
                action.appointmentData.description,
                action.appointmentData.phoneType,
                action.appointmentData.appointmentDate,
                action.appointmentData.appointmentTime,
                action.appointmentData.creator,
            );
            return {
                ...state,
                appointments: state.appointments.concat(newAppointment)
            }
        case SIGN_OUT:
            return {
               ...initialState
            }
        default:
            return state;
    }
}
