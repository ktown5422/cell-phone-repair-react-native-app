import { 
    FETCH_APPOINTMENTS,
    APPOINTMENT_DELETED,
    APPOINTMENT_ADDED
    } from '../actions/actionTypes';

const initialState = {
    appointments: [],
    appointment: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
