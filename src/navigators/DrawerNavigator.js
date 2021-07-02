import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import Dashboard from '../screens/DashboardScreen/index';
import { LOGIN, DASHBOARD, USER_PROFILE, CREATE_APPOINTMENT, SETTINGS, APPOINTMENT_LIST, CREATE_REPAIR_TICKET, REPAIR_TICKET_LIST, CREATE_INVOICE_SCREEN, INVOICE_LIST } from '../constants/routeNames';
import InventoryScreen from '../screens/InventoryScreen';
import { View, Text, Image,TouchableOpacity, Button } from 'react-native';
import authReducer from '../context/reducers/authReducer';
import TabNavigator from './TabNavigator';
import UserProfileScreen from '../screens/UserProfileScreen';
import CreateAppointmentScreen from '../screens/AppointmentScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Splash from '../screens/SplashScreen';
import getHeaderTitle from '../helpers/getHeaderTitle';




const Drawer = createDrawerNavigator();

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
 
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name={DASHBOARD} component={TabNavigator}></Drawer.Screen>
            <Drawer.Screen name={CREATE_APPOINTMENT} component={CreateAppointmentScreen}></Drawer.Screen>
            <Drawer.Screen name={CREATE_REPAIR_TICKET} component={Splash}></Drawer.Screen>
            <Drawer.Screen name={CREATE_INVOICE_SCREEN} component={Splash}></Drawer.Screen>
            <Drawer.Screen name={APPOINTMENT_LIST} component={Splash}></Drawer.Screen>
            <Drawer.Screen name={REPAIR_TICKET_LIST} component={Splash}></Drawer.Screen>
            <Drawer.Screen name={INVOICE_LIST} component={Splash}></Drawer.Screen>
            <Drawer.Screen name={SETTINGS} component={SettingsScreen}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;