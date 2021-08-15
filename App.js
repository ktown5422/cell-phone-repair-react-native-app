import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator.js";
import TabNavigator from "./src/navigators/TabNavigator.js";
import AuthContext from "./src/context/Provider.js";
import { Provider } from 'react-redux';
import ErrorMessage from "./src/components/ErrorMessage.js";
import jwtDecode from 'jwt-decode';
import { applyMiddleware, createStore } from "redux";
import store from './src/redux/store';


const App = ({ navigation }) => {
  // const [isloading, setIsLoading] = useState(false);
  // const [user, setUser] = useState();
  // const [error, setError] = useState();
  // const [state, dispatch] = React.useReducer(
  //   (prevState, action) => {
  //     switch (action.type) {
  //       case "RESTORE_TOKEN":
  //         return {
  //           ...prevState,
  //           userToken: action.token,
  //           isLoading: false,
  //         };
  //       case "SIGN_IN":
  //         return {
  //           ...prevState,
  //           isSignout: false,
  //           userToken: action.token,
  //         };
  //       case "SIGN_OUT":
  //         return {
  //           ...prevState,
  //           isSignout: true,
  //           userToken: null,
  //         };
  //     }
  //   },
  //   {
  //     isLoading: true,
  //     isSignout: false,
  //     userToken: null,
  //   }
  // );

  // React.useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {
  //       userToken = await SecureStore.getItemAsync("userToken");
  //     } catch (e) {
  //       // Restoring token failed
  //     }

  //     // After restoring token, we may need to validate it in production apps

  //     // This will switch to the App screen or Auth screen and this loading
  //     // screen will be unmounted and thrown away.
  //     dispatch({ type: "RESTORE_TOKEN", token: userToken });
  //   };

  //   bootstrapAsync();
  // }, []);

  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: async ({ email, password }) => {
  //       try {
  //         const response = await fetch("http://localhost:3000/api/users/login", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             email: email,
  //             password: password,
  //           }),
  //         });
          
  //         const resData = await response.json();
  //         if (!response.ok) {
  //           throw new Error(resData.message);
  //         }
  //         const user = jwtDecode(resData.token);
  //         console.log(user);
  //         dispatch({ type: "SIGN_IN", token: user });
  //       } catch (err) {
  //         console.log(err);
  //         setError(<ErrorMessage /> || 'Something went wrong');
  //       }
  //     },
  //     signOut: () => dispatch({ type: "SIGN_OUT" }),

  //     signUp: async ({ first_name, last_name, email, password }) => {

  //       try {
  //         const response = await fetch("http://localhost:3000/api/users/register", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             first_name: first_name,
  //             last_name: last_name,
  //             email: email,
  //             password: password,
  //           }),
  //         });
          
  //         const resData = await response.json();
  //         if (!response.ok) {
  //           throw new Error(resData.message);
  //         }
  //         console.log(resData);
  //         dispatch({ type: "SIGN_IN" });
  //       } catch (err) {
  //         console.log(err);
  //         setError(<ErrorMessage /> || 'Something went wrong');
  //       }
  //     },
  //   }),
  //   []
  // );

  


  return (
    <Provider store={store}>
      <NavigationContainer>
         <AuthNavigator /> 
      </NavigationContainer>
    </Provider>
  );
};

export default App;
