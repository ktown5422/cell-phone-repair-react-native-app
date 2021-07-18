import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import colors from "../assets/theme/colors";
import AppText from "./AppText";

function ImageItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.darkgrey,
  },
  title: {
    fontWeight: "500",
  },
});

export default ImageItem;
