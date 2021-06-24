import React, { createContext, useReducer } from 'react';
import auth from './auth';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authState)

  return <GlobalContext.Provider value={[]}>{children}</GlobalContext.Provider>
};