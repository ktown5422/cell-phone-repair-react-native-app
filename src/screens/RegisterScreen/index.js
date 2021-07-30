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
import AuthContext from "../../context/Provider";

const RegisterScreen = ({
  props,
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = React.useContext(AuthContext);

  // const signUp = async() => {
  //   try{
  //     firebase.auth().createUserWithEmailAndPassword(email, password)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <Container>
      <Image source={CyberBar} style={styles.logoImage} />

      <View>
        <Text style={styles.title}>Repair Shop Software</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>

          <Input
            label="First Name"
            icon="account"
            placeholder="First Name"
            value={first_name}
            autoCapitalize="none"
            onChangeText={setFirstName}
          />
          <Input
            label="Last Name"
            icon="account"
            placeholder="Last Name"
            value={last_name}
            autoCapitalize="none"
            onChangeText={setLastName}
          />

          <Input
            label="Email"
            icon="email"
            placeholder="Enter Email"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            label="Password"
            icon="lock"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />

          <Input
            label="Password Confirmation"
            icon="lock-check"
            placeholder="Password Confirmation"
            autoCapitalize="none"
            secureTextEntry={isSecureEntry}
          />

          <CustomButton
            loading={loading}
            onPress={() => signUp({ first_name, last_name, email, password })}
            disabled={loading}
            primary
            title="Submit"
          />

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

export default RegisterScreen;
