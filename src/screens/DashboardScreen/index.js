import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { View, Button } from "react-native";
import HatPic from '../../assets/images/HatPic.jpg';
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { INVENTORY_LIST, APPOINTMENT_DETAILS } from "../../constants/routeNames";
import { connect, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { getAppointments } from '../../redux/actions/appointmentAction';
import { useSelector } from "react-redux";
  

const Dashboard = ({ navigation }) => {
  // const [appointments, setAppointments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const appointments = useSelector(state => state.appointments.appointments);

  console.log('Component',appointments)

  useEffect(() => {
    dispatch(getAppointments())
  }, [dispatch]); 

  // const loadAppointments = () => {
  //   const response = dispatch(getAppointments());
  //   setAppointments(response)
  // }
  
  // const appointments = [
  //   {
  //     id: 1,
  //     title: 'Iphone X repair',
  //     price: 100,
  //     image: require('../../assets/images/HatPic.jpg')
  //   },
  //   {
  //     id: 2,
  //     title: 'Iphone 12 repair',
  //     price: 200,
  //     image: require('../../assets/images/HatPic.jpg')
  //   }
  // ]

  return (
    <ScrollView>
      <SafeAreaView>
        <Screen>
          <FlatList
          onRefresh={getAppointments}
            data={appointments}
            keyExtractor={(appointment) => appointment.id.toString()}
            renderItem={({ item }) =>
              <Card
                title={item.name}
                subTitle={"$" + item.price}
                image={HatPic}
                onPress={() => navigation.navigate(APPOINTMENT_DETAILS, item)} />
            }
            refreshing={refreshing}
            onRefresh={() => getAppointments()}
          />
        </Screen>
      </SafeAreaView>
    </ScrollView>
  );
};



export default Dashboard;
