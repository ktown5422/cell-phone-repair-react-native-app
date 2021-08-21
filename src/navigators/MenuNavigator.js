import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "../screens/MenuScreen/index";
import UserProfileScreen from "../screens/UserProfileScreen";
import { MESSAGES, USER_PROFILE, INVENTORY_LIST, INVOICE_LIST, SETTINGS, MENU_SCREEN } from "../constants/routeNames";
import InvoiceListScreen from "../screens/InvoiceListScreen";
import InventoryScreen from "../screens/InventoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MessagesScreen from "../screens/MessagesScreen/index";

const Stack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />
      <Stack.Screen name={USER_PROFILE} component={UserProfileScreen} />
      <Stack.Screen name={MESSAGES} component={MessagesScreen} />
      <Stack.Screen name={INVOICE_LIST} component={InvoiceListScreen} />
      <Stack.Screen name={INVENTORY_LIST} component={InventoryScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
