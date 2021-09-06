import Appointment from '../../models/appointment';
import { 
    GET_APPOINTMENTS,
    DELETE_APPOINTMENT,
    ADD_APPOINTMENT,
    CREATE_APPOINTMENT,
    EDIT_APPOINTMENT,
    SIGN_OUT
    } from '../actions/actionTypes';

const initialState = {
    appointments: [],
    token: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload,
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
        case EDIT_APPOINTMENT:
            // const appointmentIndex = state.appointments.findIndex(appoint => appoint.id === action.aid);
            const updateAppointment = new Appointment(
                action.aid,
                action.appointmentData.name,
                action.appointmentData.price,
                action.appointmentData.description,
                action.appointmentData.phoneType,
                action.appointmentData.appointmentDate,
                action.appointmentData.appointmentTime,
            );
            const updatedUserAppointment = [...state.appointments]
            updatedUserAppointment = updateAppointment;
            return {
                ...state,
                appointments: updatedUserAppointment
            };
        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter(
                    appoint => appoint.id !== action.aid
                )
            };
        case SIGN_OUT:
            return {
               ...initialState
            }
        default:
            return state;
    }
}
