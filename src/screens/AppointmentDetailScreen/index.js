import React from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";
import colors from "../../assets/theme/colors";
import HatPic from "../../assets/images/HatPic.jpg";
import AppText from "../../components/AppText/index";
import ListItem from "../../components/ListItem";

function AppointmentDetailScreen({ route }) {
  const appointments = route.params;
  

  return (
    <ScrollView>
      <Image style={styles.image} source={appointments.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{appointments.name}</AppText>
        <AppText style={styles.price}>{appointments.price}</AppText>
        <AppText style={styles.title}>{appointments.description}</AppText>
        <AppText style={styles.price}>{appointments.phoneType}</AppText>
        <AppText style={styles.price}>{appointments.appointmentDate}</AppText>
        <AppText style={styles.price}>{appointments.appointmentTime}</AppText>

        <View style={styles.userContainer}>
          <ListItem image={HatPic} title="Kevin" subTitle="test@yahoo.com" />
        </View>
      </View>
    </ScrollView>
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

export default AppointmentDetailScreen;
