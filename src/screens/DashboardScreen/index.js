import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { View, Button } from "react-native";
import Card from "../../components/Card";
import { INVENTORY_LIST } from "../../constants/routeNames";

const Dashboard = ({ navigation, route }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Card title="a hat" subTitle="30" />
          <Button
            title="Go to Inventory"
            onPress={() => {
              navigation.navigate(INVENTORY_LIST);
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;
