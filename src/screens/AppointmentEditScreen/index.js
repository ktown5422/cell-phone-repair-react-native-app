import React, { useState, useEffect } from 'react';
import Screen from '../../components/Screen';
import { Formik } from "formik";
import Input from '../../components/Input';
import AppPicker from '../../components/AppPicker';
import CustomButton from '../../components/CustomButton';
import * as Yup from 'yup';
import ErrorMessage from '../../components/ErrorMessage';
import InputButton from '../../components/InputButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import PhonePickerItem from '../../components/PhonePickerItem';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from '../../components/ImageInput';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Diagnostic Notes"),
    phoneType: Yup.object().required().nullable().label("Phone Type"),
    images: Yup.array().min(1, "Please select at least one Image")
});

const phoneTypes = [
    { label: "iphone 6", value: 1, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 6s", value: 2, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 6s +", value: 3, backgroundColor: 'purple', icon: 'cellphone' },
    { label: "iphone 6", value: 4, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 6s", value: 5, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 6s +", value: 6, backgroundColor: 'purple', icon: 'cellphone' },
    { label: "iphone 6", value: 7, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 6s", value: 8, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 6s +", value: 9, backgroundColor: 'purple', icon: 'cellphone' },
];


function AppointmentEditScreen() {
    const [imageUri, setImageUri] = useState();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    return (
        <Screen>
            <ScrollView>
                <Formik
                    initialValues={{ name: "", price: "", description: "", phoneType: "", images: "" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ errors, setFieldTouched, touched, values, handleChange, handleSubmit }) => (
                        <>
                            <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
                            <Input maxLength={255} name="name" placeholder="Name" onBlur={() => setFieldTouched("name")} onChangeText={handleChange("name")} />
                            <ErrorMessage error={errors.name} visible={touched.name} />
                            <Input keyboardType="numeric" maxLength={8} name="price" placeholder="Price" onBlur={() => setFieldTouched("price")} onChangeText={handleChange("price")} />
                            <ErrorMessage error={errors.price} visible={touched.price} />
                            <AppPicker icon="apps" items={phoneTypes} name="phoneType" numberOfColumns={3} placeholder="Phone Types" PickerItemComponent={PhonePickerItem} />
                            <InputButton placeholder="Pick a Date" onPress={() => showMode('date')} />
                            
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display='default'
                                    onChange={onChange} />
                            
                            <InputButton placeholder="Pick a Time" onPress={() => showMode('time')} />
                            <Input maxLength={255} name="description" placeholder="Diagnostic Notes" onBlur={() => setFieldTouched("description")} onChangeText={handleChange("description")} />
                            <CustomButton title="Create Appointment" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </Screen>
    );
}

export default AppointmentEditScreen;