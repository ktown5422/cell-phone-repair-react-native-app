import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { LOGIN } from "../../constants/routeNames";
import Container from "../../components/Container";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton/index";
import Input from "../../components/Input/index";
import CyberBar from "../../assets/images/CyberBar.png";
import styles from "./styles";
import Message from "../../components/Message/index";
import { Formik } from "formik";
import * as Yup from 'yup';
import ErrorMessage from "../../components/ErrorMessage";
import { ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { signUp } from '../../redux/actions/authAction';

const RegisterScreen = ({loading}) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();


  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required().min(2).label("First Name"),
    last_name: Yup.string().required().min(2).label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
  });

  return (
    <Container>
      <Image source={CyberBar} style={styles.logoImage} />

      <View>
        <Text style={styles.title}>Repair Shop Software</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        
        <View style={styles.form}>
        <Formik
            initialValues={{ first_name: "", last_name: "", email: "", password: "" }}
            onSubmit={(values) => dispatch(signUp(values))}
            validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <Input
                label="First Name"
                icon="account"
                placeholder="First Name"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("first_name")}
                onChangeText={handleChange("first_name")}
              />
              <ErrorMessage error={errors.first_name} visible={touched.first_name} />
              <Input
                label="Last Name"
                icon="account"
                placeholder="Last Name"
                onBlur={() => setFieldTouched("last_name")}
                autoCapitalize="none"
                onChangeText={handleChange("last_name")}
              />
              <ErrorMessage error={errors.last_name} visible={touched.last_name} />
              <Input
                label="Email"
                icon="email"
                placeholder="Enter Email"
                onBlur={() => setFieldTouched("email")}
                autoCapitalize="none"
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <Input
                label="Password"
                icon="lock"
                placeholder="Enter Password"
                secureTextEntry
                autoCapitalize="none"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              <ErrorMessage error={errors.password} visible={touched.password} />
              <CustomButton
                loading={loading}
                onPress={handleSubmit}
                disabled={loading}
                primary
                title="Submit"
              />
            </>
          )}

        </Formik>  

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};


export default connect(null)(RegisterScreen);
