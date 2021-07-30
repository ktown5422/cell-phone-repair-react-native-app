import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Input = ({
    onChangeText,
    iconPosition,
    icon,
    style,
    value,
    label,
    error,
    ...props
  }) => {
     
    return (
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.darkgrey} style={styles.icon} />}
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={value}
            {...props}
          />
      </View>
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
    }
  })
  
  export default Input;