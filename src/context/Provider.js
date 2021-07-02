import React, {createContext, useReducer} from 'react';
import auth from './reducers/authReducer';
import authInitialState from './initialsStates/authState';


export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    

    return (
        <GlobalContext.Provider 
            value={{authState, authDispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;