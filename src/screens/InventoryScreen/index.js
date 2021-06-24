import React from 'react';

import { Text, View, Button } from 'react-native';
import { CREATE_APPOINTMENT } from '../../constants/routeNames';

const InventoryScreen = ({ navigation }) => {
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

export default InventoryScreen;