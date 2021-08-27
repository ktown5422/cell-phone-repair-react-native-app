import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../assets/theme/colors";
import HatPic from "../assets/images/HatPic.jpg";
import AppText from "../components/AppText/index";
import { Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function Card({ title, subTitle, uri: imageUrl, onPress, appointmentDate, appointmentTime, description, phoneType }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl}} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
          <AppText style={styles.appointmentDate}>{appointmentDate}</AppText>
          <AppText style={styles.appointmentTime}>{appointmentTime}</AppText>
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
    marginBottom: 1,
  },
  appointmentDate: {
    color: colors.secondary,
  },
  appointmentTime: {
    color: colors.danger,
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
