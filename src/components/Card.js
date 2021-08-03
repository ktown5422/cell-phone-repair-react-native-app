import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../assets/theme/colors";
import HatPic from "../assets/images/HatPic.jpg";
import AppText from "../components/AppText/index";
import { Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={HatPic} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
