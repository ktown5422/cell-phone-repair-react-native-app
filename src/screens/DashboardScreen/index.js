import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { View, Button } from "react-native";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { INVENTORY_LIST, APPOINTMENT_DETAILS } from "../../constants/routeNames";
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { getAppointments } from '../../redux/actions/appointmentAction';
  

const Dashboard = () => {
  
  useEffect(() => {
    getAppointments()
  }, []); 


  return (
    <ScrollView>
      <SafeAreaView>
        <Screen>
          <FlatList
            data={null}
            keyExtractor={appointments => appointments.id.toString()}
            renderItem={({ item }) =>
              <Card
                title={item.name}
                subTitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate(APPOINTMENT_DETAILS, item)} />
            }
          />
        </Screen>
      </SafeAreaView>
    </ScrollView>
  );
};

Dashboard.propTypes = {
  appointments: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  appointments: state.appointments.appointments
})

export default connect(mapStateToProps, { getAppointments })(Dashboard);
