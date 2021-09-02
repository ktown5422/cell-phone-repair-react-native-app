import React from "react";
import { Image } from "react-native";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../assets/theme/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItemPic({
  title,
  subTitle,
  uri: profile_img,
  ImageComponent,
  renderRightActions,
  onPress,
}) {
  return (
        <View style={styles.container}>
          {ImageComponent}
          {profile_img && <Image style={styles.image} source={{ uri: profile_img  }} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.darkgrey,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItemPic;