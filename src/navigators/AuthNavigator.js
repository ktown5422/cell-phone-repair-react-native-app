import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/index';
import RegisterScreen from '../screens/RegisterScreen/index';
import { LOGIN, REGISTER } from '../constants/routeNames';


const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={LOGIN} component={LoginScreen} options={{ title: "Login" }}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={RegisterScreen} options={{ title: "Create Account" }}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;