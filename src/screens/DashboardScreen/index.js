import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Text, View, Button } from "react-native";
import Card from "../../components/Card";
import {
  CREATE_INVENTORY_ITEM,
  INVENTORY_LIST,
} from "../../constants/routeNames";
import authReducer from "../../context/reducers/authReducer";
import colors from "../../assets/theme/colors";

const Dashboard = ({ navigation, route }) => {
  // const { signOut } = useContext(authReducer);
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
