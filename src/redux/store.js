import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-redux';
import rootReducer from './reducers/index';


const initialState = {};


const middleware = [thunk];

 const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

 export default store;