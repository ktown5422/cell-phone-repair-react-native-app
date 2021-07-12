import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React,{useContext, useState, useCallback, useEffect} from 'react';
import RegisterComponent from '../../components/Register/index';
import {LOGIN} from '../../constants/routeNames'
import registerAction, {clearAuthState} from '../../context/actions/registerAction';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosHelper';

const RegisterScreen = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);



  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const signup = async (form) => {
    const response = await axios.post("http://localhost:3000/user/register", form);
    
    
    return response;
  }

  const onSubmit = () => {
    console.log(form)
    if (!form.first_name) {
      setErrors((prev) => {
        return {...prev, first_name: 'Please add a  first name'};
      });
    }
    if (!form.last_name) {
      setErrors((prev) => {
        return {...prev, last_name: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors((prev) => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) 
    signup(form);
    // console.log(form)
    // {
    //   registerAction(form)(authDispatch)((response) => {
    //     navigate(LOGIN, {data: response});
    //   });
    // }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default RegisterScreen;
