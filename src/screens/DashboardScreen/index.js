import React from 'react';
import { Text, View, Button } from 'react-native';
import { CREATE_INVENTORY_ITEM } from '../../constants/routeNames';

const Dashboard = ({ navigation, route }) => {
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

export default Dashboard;