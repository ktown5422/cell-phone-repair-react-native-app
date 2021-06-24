// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigators';



const App = () => {
  return (
      <AppNavContainer></AppNavContainer>
  );
};

export default App;
