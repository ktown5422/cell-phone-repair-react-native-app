import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { CREATE_INVENTORY_ITEM, INVENTORY_LIST } from '../../constants/routeNames';
import authReducer from '../../context/reducers/authReducer';


const Dashboard = ({ navigation, route }) => {
  // const { signOut } = useContext(authReducer);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashbord</Text>
        <Button
          title="Go to Inventory"
          onPress={() => {
            navigation.navigate(INVENTORY_LIST)}}
        />
      </View>
    );
};

export default Dashboard;