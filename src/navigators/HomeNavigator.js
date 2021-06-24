import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CREATE_APPOINTMENT, CREATE_INVENTORY_ITEM, DASHBOARD, DRAWER_NAVIGATOR, SETTINGS, USER_PROFILE } from '../constants/routeNames';
import Dashboard from '../screens/DashboardScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import InventoryScreen from '../screens/InventoryScreen';
import CreateAppointmentScreen from '../screens/AppointmentScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={DASHBOARD} component={DrawerNavigator}></HomeStack.Screen>
            <HomeStack.Screen name={USER_PROFILE} component={UserProfileScreen}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_INVENTORY_ITEM} component={InventoryScreen}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_APPOINTMENT} component={CreateAppointmentScreen}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={SettingsScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;