import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
import HatPic from "../../assets/images/HatPic.jpg";
import AppText from "../../components/AppText/index";
import ImageItem from "../../components/ImageItem";

function AppointmentListingScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={HatPic} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Appointment with Kevin T.</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ImageItem image={HatPic} title="Kevin" subTitle="test@yahoo.com" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default AppointmentListingScreen;
