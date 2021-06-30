import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/Container/index';
import CustomButton from '../CustomButton/index';
import FormInput from '../FormInput/index';
import CyberBar from '../../assets/images/CyberBar.png';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';





const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    loading,
    error,
    errors,
  }) => {
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
          <Text style={styles.subTitle}>Create a free account</Text>
  
          <View style={styles.form}>
            {error?.error && (
              <Message retry danger retryFn={onSubmit} message={error?.error} />
            )}
            <FormInput
              label="Username"
              iconPosition="right"
              placeholder="Enter Username"
              error={errors.userName || error?.username?.[0]}
              onChangeText={(value) => {
                onChange({name: 'userName', value});
              }}
            />
  
            <FormInput
              label="First name"
              iconPosition="right"
              placeholder="Enter First name"
              onChangeText={(value) => {
                onChange({name: 'firstName', value});
              }}
              error={errors.firstName || error?.first_name?.[0]}
            />
            <FormInput
              label="Last Name"
              iconPosition="right"
              placeholder="Enter Last name"
              error={errors.lastName || error?.last_name?.[0]}
              onChangeText={(value) => {
                onChange({name: 'lastName', value});
              }}
            />
            <FormInput
              label="Email"
              iconPosition="right"
              placeholder="Enter Email"
              error={errors.email || error?.email?.[0]}
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
              error={errors.password || error?.password?.[0]}
              onChangeText={(value) => {
                onChange({name: 'password', value});
              }}
            />
  
            <CustomButton
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
              primary
              title="Submit"
            />
  
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}>
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  };
  
  export default RegisterComponent;