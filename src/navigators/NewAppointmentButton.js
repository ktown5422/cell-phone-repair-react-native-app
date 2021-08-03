import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../assets/theme/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function NewAppointmentButton(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={80} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80
    },
})

export default NewAppointmentButton;