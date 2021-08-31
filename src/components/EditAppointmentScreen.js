import React from 'react';
import Screen from './Screen';
import { Formik } from "formik";
import Input from './Input/index';
import CustomButton from './CustomButton/index';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import PhonePickerItem from './PhonePickerItem';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAppointment } from '../redux/actions/appointmentAction';
import AppFormPicker from './AppFormPicker';
import CustomDatePicker from './CustomDatePicker';
import AppText from './AppText/index';
import CustomTimePicker from './CustomTimePicker';
import { useSelector } from 'react-redux';



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


function EditAppointmentScreen({ route }) {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        price: Yup.number().required().min(1).max(10000).label("Price"),
        description: Yup.string().label("Diagnostic Notes"),
    });
    // const appointments = useSelector(state => state.appointments.appointments.find(appoint => appoint.id === id));
    const  id  = route.params;
    // const appointmentId = useSelector(state => state.appointments.appointments.find(appoint => appoint.id === id));

    // console.log('yolo', appointmentId)

    return (
        <Screen>
            <ScrollView>
                <Formik
                    initialValues={{ id: id, price: "", description: "", phoneType: "", appointmentDate: "", appointmentTime: "" }}
                    onSubmit={values => dispatch(updateAppointment(values, id))}
                    validationSchema={validationSchema}
                >
                    {({ errors, setFieldTouched, touched, handleChange, handleSubmit }) => (
                        <>
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

export default EditAppointmentScreen;