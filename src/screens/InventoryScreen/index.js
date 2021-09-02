import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";

const phoneInventory = [
  {
    id: 1,
    title: "First Item",
    subTitle: "hey to all",
    image: require("../../assets/images/HatPic.jpg"),
  },
  {
    id: 2,
    title: "Second Item",
    subTitle: "hey to all",
    image: require("../../assets/images/HatPic.jpg"),
  },
  {
    id: 3,
    title: "Third Item",
    subTitle: "hey to all",
    image: require("../../assets/images/HatPic.jpg"),
  },
];

const Item = ({ title, subTitle, image, onPress, renderRightActions }) => (
  <ListItem
    title={title}
    subTitle={subTitle}
    image={image}
    onPress={onPress}
    renderRightActions={renderRightActions}
  />
);

const InventoryScreen = () => {
  const [inventory, setInventory] = useState(phoneInventory);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (inventorys) => {
    const newInventory = inventory.filter((i) => i.id !== inventorys.id);
    setInventory(newInventory);
  };
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      subTitle={item.subTitle}
      image={item.image}
      onPress={() => console.log("Selected", item)}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item)} />
      )}
    />
  );

  return (
    <Screen>
      <FlatList
        data={inventory}
        keyExtractor={(inventorys) => inventorys.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setInventory(phoneInventory);
        }}
      />
    </Screen>
  );
};

export default InventoryScreen;