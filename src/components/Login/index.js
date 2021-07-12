import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
import CyberBar from '../../assets/images/CyberBar.png';
import { REGISTER } from "../../constants/routeNames";
import styles from './styles';
import Container from '../Container/index';
import Input from '../Input/index';
import CustomButton from '../CustomButton/index';
import Message from '../Message/index'



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
      <Container style={{ backgroundColor: 'white'}}>
        <Image
          source={CyberBar}
          style={styles.logoImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Welcome to Cyber Bar Help Desk</Text>
          <Text style={styles.subTitle}>Please login here</Text>
  
          <View style={{ flex: 1 }}> 
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
  
            <Input
              label="Email"
              iconPosition="right"
              placeholder="Enter Email"
              value={form.email || null}
              onChangeText={(value) => {
                onChange({name: 'email', value});
              }}
            />
  
            <Input
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
              value={form.password || null}
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