import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../assets/theme/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal } from 'react-native';
import { Button } from 'react-native';
import Screen from './Screen';
import { FlatList } from 'react-native';
import PickerItem from './PickerItem';


const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => { 
    const [modalVisable, setModalVisable] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.darkgrey} style={styles.icon} />}
                    <AppText style={ styles.text }>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.darkgrey} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisable} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisable(false)} />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisable(false);
                                    onSelectItem(item);
                                }} 
                            /> 
                        )} 
                    />
                </Screen>
            </Modal>
        </>
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
    text: {
        flex: 1,
    }
  })
  
  export default AppPicker;