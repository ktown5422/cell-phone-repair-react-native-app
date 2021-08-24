import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Input from './Input';
import AppText from './AppText';
import colors from '../assets/theme/colors';

const CustomTimePicker = (props) => {
    const { defaultDate } = props;
    const [date, setDate] = useState(moment(defaultDate))
    const [show, setShow] = useState(false);


    const onChange = (e, selectedDate) => {
        setDate(moment(selectedDate));
    }

    const onCancelPress = () => {
        setDate(moment(defaultDate));
        setShow(false);
    }

    const onDonePress = () => {
        props.onDateChange(date);
        setShow(false);
    }


    return (
        <TouchableHighlight
            style={{
                    backgroundColor: colors.lightgrey,
                    borderRadius: 25,
                    flexDirection: "row",
                    width: '100%',
                    padding: 15,
                    marginVertical: 10
            }} 
            activeOpacity={0} 
            onPress={() => setShow(true)}>
            <View>
                <Text>{date.format('LT')}</Text>
                
                <Modal 
                    transparent={true}
                    animationType="slide"
                    visible={show}
                    supportedOrientations={['portrait']}
                    onRequestClose={() => setShow(false)}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                            }}
                            activeOpacity={1}
                            visible={show}
                            onPress={() => setShow(false)}>
                            <TouchableHighlight
                                underlayColor={'#FFFFFF'}
                                style={{
                                    flex: 1,
                                    borderBottomColor: '#E9E9E9',
                                    borderTopWidth: 1,
                                }}
                                onPress={() => console.log('datepicker clicked')}>

                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    height: 256,
                                    overflow: 'hidden',
                                }}>
                                    <View style={{ marginTop: 20 }}>
                                        <DateTimePicker
                                            display="spinner"
                                            value={new Date(date)}
                                            mode="time"
                                            is24Hour={true}
                                            onChange={onChange} 
                                        />
                                    </View>

                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onCancelPress}
                                        style={[styles.btnText, styles.btnCancel]}>
                                        <AppText>
                                            Cancel
                                        </AppText>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onDonePress}
                                        style={[styles.btnText, styles.btnDone]}>
                                        <AppText>
                                            Done
                                        </AppText>
                                    </TouchableHighlight>

                                </View>

                            </TouchableHighlight>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        </TouchableHighlight>
    )
}



const styles = StyleSheet.create({
    btnText: {
        position: 'absolute',
        top: 0,
        height: 42, 
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    }
})


export default CustomTimePicker;