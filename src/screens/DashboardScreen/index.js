import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { View, Button } from "react-native";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { INVENTORY_LIST } from "../../constants/routeNames";


const appointments = [
  {
    id: 1,
    title: 'Iphone X repair',
    price: 100,
    image: require('../../assets/images/HatPic.jpg')
  },
  {
    id: 2,
    title: 'Iphone 12 repair',
    price: 200,
    image: require('../../assets/images/HatPic.jpg')
  }
]

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
                image={item.image} />
          }
               />
        </Screen>
      </SafeAreaView>
    </ScrollView>
  );
};



export default Dashboard;
