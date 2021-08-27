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
import { Platform, View } from 'react-native';
import PhonePickerItem from '../../components/PhonePickerItem';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from '../../components/ImageInput';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../../redux/actions/appointmentAction';
import AppFormPicker from '../../components/AppFormPicker';
import CustomDatePicker from '../../components/CustomDatePicker';
import AppText from '../../components/AppText';
import CustomTimePicker from '../../components/CustomTimePicker';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Diagnostic Notes"),
    phoneType: Yup.object().required().nullable().label("Phone Type"),
    images: Yup.array().min(1, "Please select at least one Image")
});

const phoneTypes = [
    { label: "iphone 5c", value: 1, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 6", value: 2, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 6+", value: 3, backgroundColor: 'purple', icon: 'cellphone' },
    { label: "iphone 6s", value: 4, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 7", value: 5, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 7+", value: 6, backgroundColor: 'purple', icon: 'cellphone' },
    { label: "iphone 8", value: 7, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 8+", value: 8, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone X", value: 9, backgroundColor: 'purple', icon: 'cellphone' },
    { label: "iphone XS", value: 10, backgroundColor: 'red', icon: 'cellphone' },
    { label: "iphone 11", value: 11, backgroundColor: 'green', icon: 'cellphone' },
    { label: "iphone 12", value: 12, backgroundColor: 'purple', icon: 'cellphone' },
];


const AppointmentEditScreen = () => {
    const dispatch = useDispatch();
    const [imageUri, setImageUri] = useState();
   
    // const addAppointment = values => {
    //     const data = new FormData();
    //     data.append('name', values.name)
    //     data.append('price', values.price)
    //     data.append('description', values.description)
    //     data.append('phoneType', values.phoneType)
    //     data.append('appointmentDate', values.appointmentDate)
    //     data.append('appointmentTime', values.appointmentTime)
    //     data.append('imageUri', values.imageUri)
    //   }


      

    return (
        <Screen>
            <ScrollView>
                <Formik
                    initialValues={{ name: "", price: "", description: "", phoneType: null, appointmentDate: "", appointmentTime: "", images: "" }}
                    onSubmit={(values) => console.log('sub', values)}
                    validationSchema={validationSchema}
                >
                    {({ errors, setFieldTouched, touched, values, handleChange, handleSubmit }) => (
                        <>
                            <ImageInput 
                                imageUri={imageUri} 
                                onChangeImage={(uri) => handleChange("images")(uri)}
                             />
                            <Input 
                                maxLength={255} 
                                placeholder="Name" 
                                onBlur={() => setFieldTouched("name")} 
                                onChangeText={handleChange("name")} 
                            />
                            <ErrorMessage error={errors.name} visible={touched.name} />
                            <Input 
                                keyboardType="numeric" 
                                maxLength={8} 
                                placeholder="Price" 
                                onBlur={() => setFieldTouched("price")} 
                                onChangeText={handleChange("price")} 
                            />
                            <ErrorMessage error={errors.price} visible={touched.price} />
                            <AppFormPicker 
                                icon="apps" 
                                items={phoneTypes} 
                                name="phoneType" 
                                numberOfColumns={3} 
                                placeholder="Pick a Phone" 
                                PickerItemComponent={PhonePickerItem} 
                            />
                            
                            <Input 
                                maxLength={255} 
                                placeholder="Diagnostic Notes" 
                                onBlur={() => setFieldTouched("description")} 
                                onChangeText={handleChange("description")} 
                            />
                            <AppText>Pick a Date:</AppText>
                            <CustomDatePicker 
                                onDateChange={(date) => handleChange("appointmentDate")(date.format('MMMM Do, YYYY'))} />
                            <AppText>Pick a Time:</AppText>
                            <CustomTimePicker 
                                onDateChange={(date) => handleChange("appointmentTime")(date.format('LT'))} />
                            <CustomButton  
                                title="Create Appointment" 
                                onPress={handleSubmit} 
                            />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </Screen>
    );
}

export default AppointmentEditScreen;