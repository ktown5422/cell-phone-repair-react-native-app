import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import  rootReducer  from './reducers';


const initialState = {};


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



const middleware = [thunk];


export default () => {
let store = createStore(
    persistedReducer,
    // rootReducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)),
    );
let persistor = persistStore(store);
return {store, persistor}
};