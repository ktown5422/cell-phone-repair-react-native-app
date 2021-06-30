import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DASHBOARD } from '../../constants/routeNames'

import { Text, View, Button } from 'react-native';


const SettingsScreen = ( {navigation} ) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting</Text>
            <Button title="Go Back to Dashboard" onPress={() =>
                navigation.navigate(DASHBOARD)
            } />
      </View>
    );
};

export default SettingsScreen;