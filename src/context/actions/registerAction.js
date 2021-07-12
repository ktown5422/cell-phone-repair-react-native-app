import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/typeOfActions";
import axiosInstance from "../../helpers/axiosHelper"


export const clearAuthState = () => dispatch => {
    dispatch ({
        type: CLEAR_AUTH_STATE,
    })
}

export default ({ 
    email, 
    password, 
    first_name: first_name, 
    last_name: last_name, 
}) =>  (dispatch) => {
    dispatch({
        type: REGISTER_LOADING,
        payload: res.data,
    });
    axiosInstance.post('user/register', {
        email,
        password,
        first_name,
        last_name,
    })
    .then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : {error: 'Somehing is wrong'},
        });
    });
};