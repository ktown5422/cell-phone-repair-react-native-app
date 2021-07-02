import { useRoute } from '@react-navigation/native';
import React, { useState, useContext, useEffect } from 'react';
import LoginComponent from '../../components/Login/index';
import { GlobalContext } from '../../context/Provider';
import loginAction from '../../context/actions/loginAction';



const LoginScreen = () => {
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const {params} = useRoute();
  
    useEffect(() => {
      if (params?.data) {
        setJustSignedUp(true);
        setForm({...form, email: params.data.email});
      }
    }, [params]);
  
    const { authDispatch, authState:{error, loading} } = useContext(GlobalContext);
  
    const onSubmit = () => {
      if (form.email && form.password) {
        loginAction(form)(authDispatch);
      }
    };
  
    const onChange = ({name, value}) => {
      setJustSignedUp(false);
      setForm({...form, [name]: value});
    };
  
    return (
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
        justSignedUp={justSignedUp}
      />
    );
  };
  
  export default LoginScreen;