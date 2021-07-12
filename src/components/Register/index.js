import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/Container/index';
import CustomButton from '../CustomButton/index';
import Input from '../Input/index';
import CyberBar from '../../assets/images/CyberBar.png';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';
import Message from '../Message/index'





const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
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

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({ name: 'first_name', value });
            }}
            error={errors.first_name || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.last_name || error?.last_name?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'last_name', value });
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'email', value });
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
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: 'password', value });
            }}
          />

          <Input
            label="Password Confirmation"
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
              onChange({ name: 'password_confirmation', value });
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