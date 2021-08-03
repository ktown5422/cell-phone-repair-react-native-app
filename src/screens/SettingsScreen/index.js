import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DASHBOARD } from '../../constants/routeNames'

import { Text, View, Button } from 'react-native';


const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting</Text>
        </View>
    );
};

export default SettingsScreen;