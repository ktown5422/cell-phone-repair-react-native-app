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


const AppPicker = ({ icon, items, numberOfColumns, name, onSelectItem, placeholder, selectedItem, PickerItemComponent = PickerItem, }) => {
    const [modalVisable, setModalVisable] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.darkgrey} style={styles.icon} />}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.darkgrey} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisable} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisable(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
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
    },
    placeholder: {
        color: colors.darkgrey,
        flex: 1,
    }
})

export default AppPicker;