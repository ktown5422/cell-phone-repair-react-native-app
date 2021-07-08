import { 
         LOGIN_FAIL,
         LOGIN_LOADING,
         LOGIN_SUCCESS,
       } from "../../constants/typeOfActions";
import axiosInstance from "../../helpers/axiosHelper";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default ({ email: email, password }) =>  (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    });
    axiosInstance.post('user/login', {
        email,
        password,
    })
    .then((res) => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? err.response.data : {error: 'Something is wrong'},
        });
    });
};