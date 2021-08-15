import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { View, Button } from "react-native";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { INVENTORY_LIST, APPOINTMENT_DETAILS } from "../../constants/routeNames";


const appointments = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/appointments/users/${user.id}')
  }, []);
}

const Dashboard = ({ navigation, route }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Screen>
          <FlatList
            data={appointments}
            keyExtractor={appointment => appointment.id.toString()}
            renderItem={({ item }) =>
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate(APPOINTMENT_DETAILS, item)} />
            }
          />
        </Screen>
      </SafeAreaView>
    </ScrollView>
  );
};



export default Dashboard;
