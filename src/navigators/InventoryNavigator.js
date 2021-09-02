import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { INVENTORY_LIST } from "../constants/routeNames";
import InventoryScreen from '../screens/InventoryScreen';

const InventoryStack = createStackNavigator();

function InventoryNavigator() {
    return (
        <InventoryStack.Navigator>
            <InventoryStack.Screen name={INVENTORY_LIST} component={InventoryScreen} />
        </InventoryStack.Navigator>
    )
};

export default InventoryNavigator;