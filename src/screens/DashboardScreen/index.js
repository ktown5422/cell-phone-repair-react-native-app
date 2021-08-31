import React, { useCallback, useEffect, useState } from "react";
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
import { ActivityIndicator } from "react-native";
import colors from "../../assets/theme/colors";
import { Text } from "react-native";
  

const Dashboard = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

 

  const appointments = useSelector(state => state.appointments.appointments);
  
  const loadAppointments = useCallback( () => {
    console.log('dashboard load')
    setIsLoading(true);
    try {
       dispatch(getAppointments())
    } catch {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocus = navigation.addListener('focus',() => {
      loadAppointments();
    });
      return () => { 
        willFocus;
      };
  }, [loadAppointments, navigation]);

  useEffect(() => {
    loadAppointments();
  }, [dispatch, loadAppointments]); 

  // if (error) {
  //   return (
  //     <View>
  //       <Text>An error occured!</Text>
  //       <Button title="Try Again" onPress={loadAppointments} color={colors.primary} />
  //     </View>
  //   )
  // }

  if(isLoading || error){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.primary} />
      <Button title="Try Again" onPress={loadAppointments} color={colors.primary} />
    </View>
    );
  }

  if(!isLoading && appointments.length === 0){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No Appointments found</Text>
    </View>
    );
  }
  
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
            keyExtractor={(appointment) => appointment.id}
            renderItem={({ item }) =>
              <Card
                uri={item.imageUrl}
                title={item.name}
                appointmentDate={item.appointmentDate}
                appointmentTime={item.appointmentTime}
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
