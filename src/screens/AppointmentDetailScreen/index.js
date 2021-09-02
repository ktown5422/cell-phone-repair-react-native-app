import React from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";
import colors from "../../assets/theme/colors";
import HatPic from "../../assets/images/HatPic.jpg";
import AppText from "../../components/AppText/index";
import ListItem from "../../components/ListItem";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import EditAppointmentScreen from "../../components/EditAppointmentScreen";
import { APPOINTMENT_EDIT, APPOINTMENT_LIST, DASHBOARD } from "../../constants/routeNames";
import { deleteAppointment } from "../../redux/actions/appointmentAction"
import { Alert } from "react-native";
import ListItemPic from "../../components/ListItemPic";

function AppointmentDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const appointments = route.params;
  const firstName = useSelector(state => state.auth.first_name);
  const email = useSelector(state => state.auth.email);
  const profile_img = useSelector(state => state.auth.profile_img);
  const id = route.params.id;

  
  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this appointment?', [
      { text: 'No'},
      {
        text: 'Yes',
        onPress: () => {
          dispatch(deleteAppointment(id)),
          navigation.navigate(APPOINTMENT_LIST)
        }
      }
    ]);
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: appointments.imageUrl }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{appointments.name}</AppText>
        <AppText style={styles.price}>${appointments.price}</AppText>
        <AppText>{appointments.description}</AppText>
        <AppText>{appointments.phoneType}</AppText>
        <AppText>{appointments.appointmentDate}</AppText>
        <AppText style={styles.appointmentTime}>{appointments.appointmentTime}</AppText>
      </View>
      <View>
        <CustomButton title="Edit" onPress={() => navigation.navigate(APPOINTMENT_EDIT, id)} />
        <CustomButton title="delete" onPress={deleteHandler.bind(this, id)} />
      </View>
        <View style={styles.userContainer}>
          <ListItemPic uri={profile_img} title={firstName} subTitle={email} />
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
  appointmentTime: {
    color: colors.danger,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default AppointmentDetailScreen;
