import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CyberBar from "../../assets/images/CyberBar.png";
import { REGISTER } from "../../constants/routeNames";
import styles from "./styles";
import Container from "../../components/Container/index";
import Input from "../../components/Input/index";
import CustomButton from "../../components/CustomButton";
import Message from "../../components/Message/index";
import AppText from "../../components/AppText";
import { Formik } from "formik";
import * as Yup from 'yup';
import ErrorMessage from "../../components/ErrorMessage";
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { signIn } from '../../redux/actions/authAction';
import { useDispatch } from "react-redux";

const LoginScreen = ({loading }) => {
  const { navigate } = useNavigation();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const { signIn } = React.useContext(AuthContext);
  const dispatch = useDispatch();


  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
  });

  return (
    <Container>
      <Image source={CyberBar} style={styles.logoImage} />

      <View>
        <AppText style={styles.title}>Repair Shop Software</AppText>
        <AppText style={styles.subTitle}>Login</AppText>

        <View style={styles.form}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => dispatch(signIn(values))}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
                <Input
                  label="Email"
                  icon="email"
                  placeholder="Enter Email"
                  autoCapitalize="none"
                  onBlur={() => setFieldTouched("email")}
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  // value={email}
                  onChangeText={handleChange("email")}
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <Input
                  label="Password"
                  icon="lock"
                  placeholder="Enter Password"
                  secureTextEntry
                  onBlur={() => setFieldTouched("password")}
                  autoCorrect={false}
                  autoCapitalize="none"
                  textContentType="password"
                  // value={password}
                  onChangeText={handleChange("password")}
                />
                <ErrorMessage error={errors.password} visible={touched.password} />
                <CustomButton
                  loading={loading}
                  onPress={handleSubmit}
                  disabled={loading}
                  primary
                  title="Login"
                />
              </>
            )}

          </Formik>

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

LoginScreen.propTypes = {
  signIn: Proptypes.func.isRequired,
  isAuthenticated: Proptypes.bool,
  dispatch: Proptypes.func
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signIn })(LoginScreen);
