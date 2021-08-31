import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { APPOINTMENT_DETAILS, APPOINTMENT_LIST, APPOINTMENT_EDIT } from "../constants/routeNames";
import Dashboard from "../screens/DashboardScreen";
import AppointmentDetailScreen from '../screens/AppointmentDetailScreen';
import EditAppointmentScreen from '../components/EditAppointmentScreen';

const AppointmentStack = createStackNavigator();

function AppointmentNavigator() {
    return (
        <AppointmentStack.Navigator>
            <AppointmentStack.Screen name={APPOINTMENT_LIST} component={Dashboard} />
            <AppointmentStack.Screen name={APPOINTMENT_DETAILS} component={AppointmentDetailScreen} />
            <AppointmentStack.Screen name={APPOINTMENT_EDIT} component={EditAppointmentScreen} />
        </AppointmentStack.Navigator>
    )
};

export default AppointmentNavigator;