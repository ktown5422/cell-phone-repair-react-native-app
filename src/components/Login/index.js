import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import TouchableOpacity from 'react-native-gesture-handler';
import { Image } from "react-native-elements";
import CyberBar from '../../assets/images/CyberBar.png';
import { REGISTER } from "../../constants/routeNames";
import styles from './styles';
import Container from '../Container/index';
import FormInput from '../FormInput/index';
import CustomButton from '../CustomButton/index';



const LoginComponent = ({
    error,
    justSignedUp, 
    onChange,
    loading,
    onSubmit,
  }) => {
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
      <Container>
        <Image
          height={70}
          width={70}
          source={CyberBar}
          style={styles.logoImage}
        />
  
        <View>
          <Text style={styles.title}>Welcome to </Text>
          <Text style={styles.subTitle}>Please login here</Text>
  
          <View style={styles.form}>
            {justSignedUp && (
              <Message
                onDismiss={() => {}}
                success
                message="Account created successfully"
              />
            )}
            {error && !error.error && (
              <Message
                onDismiss={() => {}}
                danger
                message="invalid credentials"
              />
            )}
  
            {error?.error && <Message danger onDismiss message={error?.error} />}
  
            <FormInput
              label="Email"
              iconPosition="right"
              placeholder="Enter Email"
              value={form.email || null}
              onChangeText={(value) => {
                onChange({name: 'email', value});
              }}
            />
  
            <FormInput
              label="Password"
              placeholder="Enter Password"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev) => !prev);
                  }}>
                  <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
              }
              iconPosition="right"
              onChangeText={(value) => {
                onChange({name: 'password', value});
              }}
            />
  
            <CustomButton
              disabled={loading}
              onPress={onSubmit}
              loading={loading}
              primary
              title="Submit"
            />
  
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}>
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  };
  
  export default LoginComponent;