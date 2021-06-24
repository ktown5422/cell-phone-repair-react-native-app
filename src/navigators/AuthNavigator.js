import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/index';
import RegisterScreen from '../screens/RegisterScreen/index';
import { LOGIN, REGISTER } from '../constants/routeNames';
  
const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={LoginScreen}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={RegisterScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;