import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { APPOINTMENT_LIST, CREATE_APPOINTMENT, CREATE_INVENTORY_ITEM, CREATE_INVOICE_SCREEN, CREATE_REPAIR_TICKET, DASHBOARD, DRAWER_NAVIGATOR, INVENTORY_LIST, INVOICE_LIST, REPAIR_TICKET_LIST, SETTINGS, USER_PROFILE } from '../constants/routeNames';
import Dashboard from '../screens/DashboardScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import InventoryScreen from '../screens/InventoryScreen';
import CreateAppointmentScreen from '../screens/AppointmentScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';
import BookedAppointmentsScreen from '../screens/BookedAppointmentsScreen';
import Splash from '../screens/SplashScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const CustomDrawer = (props) => {
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 20,
                            backgroundColor: '#f6f6f6',
                            marginBottom: 20,
                            marginTop: 20,
                        }}
                    >
                        <View>
                            <Text>John Doe</Text>
                            <Text>example@email.com</Text>
                        </View>
                        <Image
                            source={{
                                uri: 'https://avatars.githubusercontent.com/u/17262777?v=4',
                            }}
                            style={{ width: 60, height: 60, borderRadius: 30 }}
                        />
                    </View>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        right: 0,
                        left: 0,
                        bottom: 50,
                        backgroundColor: '#f6f6f6',
                        padding: 20,
                    }}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name={DASHBOARD} component={Dashboard} />
            <Drawer.Screen name={CREATE_APPOINTMENT} component={CreateAppointmentScreen} />
            <Drawer.Screen name={CREATE_REPAIR_TICKET} component={Splash} />
            <Drawer.Screen name={CREATE_INVOICE_SCREEN} component={Splash} />
            <Drawer.Screen name={APPOINTMENT_LIST} component={Splash} />
            <Drawer.Screen name={REPAIR_TICKET_LIST} component={Splash} />
            <Drawer.Screen name={INVOICE_LIST} component={Splash} />
            <Drawer.Screen name={SETTINGS} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};



const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
            <Stack.Screen name={DASHBOARD} component={DrawerNavigator} />
            <Stack.Screen name={APPOINTMENT_LIST} component={BookedAppointmentsScreen} />
            <Stack.Screen name={INVENTORY_LIST} component={InventoryScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;