import { 
    GET_APPOINTMENTS,
    DELETE_APPOINTMENT,
    ADD_APPOINTMENT
    } from '../actions/actionTypes';

const initialState = {
    appointments: [],
    appointment: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload
            };
        default:
            return state;
    }
}
