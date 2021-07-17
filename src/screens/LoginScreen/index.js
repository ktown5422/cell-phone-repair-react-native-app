import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CyberBar from "../../assets/images/CyberBar.png";
import { DASHBOARD, REGISTER } from "../../constants/routeNames";
import styles from "./styles";
import Container from "../../components/Container/index";
import Input from "../../components/Input/index";
import CustomButton from "../../components/CustomButton";
import Message from "../../components/Message/index";
import firebase from "firebase";
import * as authActions from "../../store/actions/auth";
import { useDispatch } from "react-redux";

const LoginScreen = ({ onSubmit, loading, error }) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const signIn = async() => {
  //   try{
  //     firebase.auth().signInWithEmailAndPassword(email, password)
  //     navigate(DASHBOARD)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <Container>
      <Image source={CyberBar} style={styles.logoImage} />

      <View>
        <Text style={styles.title}>Repair Shop Software</Text>
        <Text style={styles.subTitle}>Login</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            value={password}
            onChangeText={setPassword}
          />

          <CustomButton
            loading={loading}
            onPress={() => login()}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
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

export default LoginScreen;
