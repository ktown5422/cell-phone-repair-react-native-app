import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../assets/theme/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';


const InputButton = ({
    onChangeText,
    iconPosition,
    selectedItem,
    placeholder,
    onPress,
    icon,
    style,
    value,
    label,
    error,
    ...props
}) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.darkgrey} style={styles.icon} />}
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={20} color={colors.darkgrey} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        fontSize: 18,
        width: "100%",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    text: {
        flex: 1,
    },
})

export default InputButton;