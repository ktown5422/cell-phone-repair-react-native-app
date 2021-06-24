import React from 'react';

import { Text, View, Button } from 'react-native';


const UserProfileScreen = ({ navigation, route }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Account Profile Screen</Text>
        <Button
          title="Go back"
        />
      </View>
    );
};

export default UserProfileScreen;