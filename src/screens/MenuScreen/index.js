import React, { useContext } from "react";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import colors from "../../assets/theme/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import { USER_PROFILE, MESSAGES, INVOICE_LIST, INVENTORY_LIST, SETTINGS, CREATE_INVENTORY_ITEM } from "../../constants/routeNames";
import { useDispatch } from "react-redux";
import { SIGN_OUT } from "../../redux/actions/actionTypes";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListItemPic from "../../components/ListItemPic";





const menuItems = [
  {
    title: "Account",
    icon: {
      name: "account-circle",
      backgroundColor: colors.accent,
    },
    targetScreen: USER_PROFILE
  },
  // {
  //   title: "Messages",
  //   icon: {
  //     name: "calendar-month",
  //     backgroundColor: colors.danger,
  //   },
  //   targetScreen: MESSAGES
  // },
  {
    title: "Create Invoice",
    icon: {
      name: "receipt",
      backgroundColor: colors.secondary,
    },
    targetScreen: INVOICE_LIST
  },
  {
    title: "Create Inventory Item",
    icon: {
      name: "playlist-plus",
      backgroundColor: colors.secondary,
    },
    targetScreen: CREATE_INVENTORY_ITEM
  },
  {
    title: "Settings",
    icon: {
      name: "account-cog",
      backgroundColor: colors.accent,
    },
    targetScreen: SETTINGS
  },
];



function MenuScreen({ navigation }) {
  const firstName = useSelector(state => state.auth.first_name);
  const email = useSelector(state => state.auth.email);
  const profile_img = useSelector(state => state.auth.profile_img);
  const dispatch = useDispatch();
  return (
    <Screen>
      <View style={styles.container}>
        <ListItemPic
          title={firstName}
          subTitle={email}
          uri={profile_img}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => dispatch({ type: SIGN_OUT })}
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
