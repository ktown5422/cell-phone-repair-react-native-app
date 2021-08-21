import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  MENU,
  INVENTORY_LIST,
  INVOICE_LIST,
  CREATE_APPOINTMENT,
  APPOINTMENTS,
} from "../constants/routeNames";
import InventoryScreen from "../screens/InventoryScreen";
import MenuNavigator from "./MenuNavigator";
import InvoiceListScreen from "../screens/InvoiceListScreen";
import AppointmentNavigator from "./AppointmentNavigator";
import AppointmentCreateScreen from "../screens/AppointmentCreateScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator activeColor="white" barStyle={{ backgroundColor: "blue" }}>
      <Tab.Screen
        name={APPOINTMENTS}
        component={AppointmentNavigator}
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
        name={CREATE_APPOINTMENT}
        component={AppointmentCreateScreen}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
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
