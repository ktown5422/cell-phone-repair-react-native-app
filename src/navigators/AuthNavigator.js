import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
  
const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="LoginScreen" component={LoginScreen}></AuthStack.Screen>
            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;