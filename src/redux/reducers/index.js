import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import inventoryReducer from './inventoryReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentReducer,
  inventory: inventoryReducer,
})
export default rootReducer;