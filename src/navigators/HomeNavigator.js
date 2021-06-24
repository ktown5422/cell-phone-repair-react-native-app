import React from 'react';

import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CREATE_APPOINTMENT, CREATE_INVENTORY_ITEM, DASHBOARD, SETTINGS, USER_PROFILE } from '../constants/routeNames';



function Dashboard({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashbord</Text>
        <Button
          title="Go to Inventory"
          onPress={() => {
            navigation.navigate(CREATE_INVENTORY_ITEM)}}
        />
      </View>
    );
};

function AccountProfileScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Account Profile Screen</Text>
        <Button
          title="Go back"
        />
      </View>
    );
};
  
function InventoryScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Inventory</Text>
        <Button
          title="Create Appointment"
          onPress={() => {
            navigation.navigate(CREATE_APPOINTMENT)
          }}
        />
      </View>
    );
}
  
function CreateAppointmentScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create Appointment Screen</Text>
      </View>
    );
}

function SettingsScreen(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SCreate Appointment Screen</Text>
      </View>
    )
}



const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={DASHBOARD} component={Dashboard}></HomeStack.Screen>
            <HomeStack.Screen name={USER_PROFILE} component={AccountProfileScreen}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_INVENTORY_ITEM} component={InventoryScreen}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_APPOINTMENT} component={CreateAppointmentScreen}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={SettingsScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;