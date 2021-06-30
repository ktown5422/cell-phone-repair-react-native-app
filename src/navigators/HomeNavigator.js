import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CREATE_APPOINTMENT, CREATE_INVENTORY_ITEM, DASHBOARD, DRAWER_NAVIGATOR, SETTINGS, USER_PROFILE } from '../constants/routeNames';
import Dashboard from '../screens/DashboardScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import InventoryScreen from '../screens/InventoryScreen';
import CreateAppointmentScreen from '../screens/AppointmentScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';


const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name={DASHBOARD} component={DrawerNavigator}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;