import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../assets/theme/colors";
import HatPic from "../assets/images/HatPic.jpg";

function Card({ title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={HatPic} />
      <View style={styles.detailsContainer}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
