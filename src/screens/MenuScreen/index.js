import React from "react";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import colors from "../../assets/theme/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";

const menuItems = [
  {
    title: "Account",
    icon: {
      name: "account-circle",
      backgroundColor: colors.accent,
    },
  },
  {
    title: "Create Appointment",
    icon: {
      name: "calendar-month",
      backgroundColor: colors.danger,
    },
  },
  {
    title: "Create Invoice",
    icon: {
      name: "receipt",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Create Inventory Item",
    icon: {
      name: "playlist-plus",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Settings",
    icon: {
      name: "account-cog",
      backgroundColor: colors.accent,
    },
  },
];

function MenuScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Kevin T"
          subTitle="test@yahoo.com"
          image={require("../../assets/images/HatPic.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor={colors.danger} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default MenuScreen;
