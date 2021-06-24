import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import Dashboard from '../screens/DashboardScreen';
import { CREATE_INVENTORY_ITEM, DASHBOARD } from '../constants/routeNames';
import InventoryScreen from '../screens/InventoryScreen';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={DASHBOARD} component={Dashboard}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;