import React, { useMemo, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigators/index.js';
import Splash from './src/screens/SplashScreen';
import { authReducer } from './src/context/reducers/authReducer';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigators/index';


const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
