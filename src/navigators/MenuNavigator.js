import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "../screens/MenuScreen/index";

const Stack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
