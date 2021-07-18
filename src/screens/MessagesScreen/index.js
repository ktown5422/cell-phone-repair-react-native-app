import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import ImageItem from "../../components/ImageItem";
import HatPic from "../../assets/images/HatPic.jpg";

const DATA = [
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

const Item = ({ title, subTitle, image }) => (
  <ImageItem title={title} subTitle={subTitle} image={image} />
);

const MessagesScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} subTitle={item.subTitle} image={item.image} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
