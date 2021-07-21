import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";

const initialMessages = [
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

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
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
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
