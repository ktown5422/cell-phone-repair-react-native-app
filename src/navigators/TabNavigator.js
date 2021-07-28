import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  MENU,
  DASHBOARD,
  INVENTORY_LIST,
  USER_PROFILE,
  INVOICE_LIST,
} from "../constants/routeNames";
import InventoryScreen from "../screens/InventoryScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import HomeNavigator from "./HomeNavigator";
import MenuNavigator from "./MenuNavigator";
import InvoiceListScreen from "../screens/InvoiceListScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator activeColor="white" barStyle={{ backgroundColor: "blue" }}>
      <Tab.Screen
        name={DASHBOARD}
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={INVENTORY_LIST}
        component={InventoryScreen}
        options={{
          tabBarLabel: "Inventory",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={INVOICE_LIST}
        component={InvoiceListScreen}
        options={{
          tabBarLabel: "Invoices",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU}
        component={MenuNavigator}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
