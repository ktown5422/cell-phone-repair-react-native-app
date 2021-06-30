import React, {createContext, useReducer} from 'react';
import authReducer from './reducers/authReducer';

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authState);
    

    return <GlobalContext.Provider value={{authState, authDispatch}}>{children}</GlobalContext.Provider>
};

export default GlobalProvider;