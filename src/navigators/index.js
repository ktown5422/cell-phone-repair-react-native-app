import React, {useContext, useEffect, useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const AppNavContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { authState: {isLoggedIn} } = useContext(GlobalContext);
  const [authLoaded, setAuthLoaded] = useState(false);

  

  // const getUser = async () => {
  //   try {
  //     await AsyncStorage.getItem('user');
  //     if (user) {
  //       setAuthLoaded(true);
  //       setAuthenticated(true);
  //     } else {
  //       setAuthLoaded(true);
  //       setAuthenticated(false);
  //     }
  //   } catch(error) {}
  // };

  // useEffect(() => {
  //   getUser();
  // }, [isLoggedIn]);

  return (
  <>
    {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    ) : (
      <ActivityIndicator />
    )}
  </>
  );
};

export default AppNavContainer;