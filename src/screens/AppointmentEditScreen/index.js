import React, { useState } from 'react';
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


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Diagnostic Notes"),
    phoneType: Yup.object().required().nullable().label("Phone Type"),
});

const phoneTypes = [
    { label: "iphone 6", value: 1 },
    { label: "iphone 6s", value: 2 },
    { label: "iphone 6s plus", value: 3 },
];


function AppointmentEditScreen(props) {
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
            <Formik
                initialValues={{ name: "", price: "", description: "", phoneType: null }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ errors, setFieldTouched, touched, values, handleChange }) => (
                    <>
                        <Input maxLength={255} name="name" placeholder="Name" onBlur={() => setFieldTouched("name")} onChangeText={handleChange("name")} />
                        <ErrorMessage error={errors.name} visible={touched.name} />
                        <Input keyboardType="numeric" maxLength={8} name="price" placeholder="Price" onBlur={() => setFieldTouched("price")} onChangeText={handleChange("price")} />
                        <ErrorMessage error={errors.price} visible={touched.price} />
                        <AppPicker icon="apps" items={phoneTypes} name="phoneType" placeholder="Phone Types" PickerItemComponent={null} />
                        <InputButton placeholder="Pick a Date" onPress={() => showMode('date')} />
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChange} />
                        )}
                        <InputButton placeholder="Pick a Time" onPress={() => showMode('time')} />
                        <Input maxLength={255} name="description" placeholder="Diagnostic Notes" onBlur={() => setFieldTouched("description")} onChangeText={handleChange("description")} />
                        <CustomButton title="Create Appointment" />
                    </>
                )}
            </Formik>




        </Screen>
    );
}

export default AppointmentEditScreen;