import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { APPOINTMENT_DETAILS, APPOINTMENT_LIST } from "../constants/routeNames";
import Dashboard from "../screens/DashboardScreen";
import AppointmentDetailScreen from '../screens/AppointmentDetailScreen';

const AppointmentStack = createStackNavigator();

function AppointmentNavigator() {
    return (
        <AppointmentStack.Navigator mode="modal">
            <AppointmentStack.Screen name={APPOINTMENT_LIST} component={Dashboard} />
            <AppointmentStack.Screen name={APPOINTMENT_DETAILS} component={AppointmentDetailScreen} />
        </AppointmentStack.Navigator>
    )
};

export default AppointmentNavigator;