import React, {useContext} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  // const isLoggedIn = false;
  const { authState: {isLoggedIn} } = useContext(GlobalContext);
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <RootStack.Screen
          name="App"
          component={HomeNavigator}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator} 
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;