import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CREATE_INVENTORY_ITEM, DASHBOARD, INVENTORY_LIST, SETTINGS, USER_PROFILE } from '../constants/routeNames';
import Dashboard from '../screens/DashboardScreen';
import InventoryScreen from '../screens/InventoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerNavigator from './DrawerNavigator';
import UserProfileScreen from '../screens/UserProfileScreen';


const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={INVENTORY_LIST} component={InventoryScreen} />
      <Tabs.Screen name={DASHBOARD} component={Dashboard} />
      <Tabs.Screen name={USER_PROFILE} component={UserProfileScreen} />
    </Tabs.Navigator>
  );
};

  export default TabNavigator;