import React from "react";
import { Image } from "react-native";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../assets/theme/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  quantity,
  uri: imageUrl,
  ImageComponent,
  renderRightActions,
  onPress,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.darkgrey} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{quantity}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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

export default ListItem;
