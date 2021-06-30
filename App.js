import React, { useMemo, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import Splash from './src/screens/SplashScreen';
import { authReducer } from './src/context/reducers/authReducer';
import GlobalProvider from './src/context/Provider';


const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  // const authReducer = useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setIsLoading(false);
  //       setUserToken("asdf");
  //     },
  //     signUp: () => {
  //       setIsLoading(false);
  //       setUserToken("asdf");
  //     },
  //     signOut: () => {
  //       setIsLoading(false);
  //       setUserToken(null);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
