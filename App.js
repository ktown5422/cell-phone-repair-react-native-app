import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator.js";
import TabNavigator from "./src/navigators/TabNavigator.js";
import AuthContext from "./src/context/Provider.js";
import * as SecureStore from "expo-secure-store";
import MessagesScreen from "./src/screens/MessagesScreen/index";
import Screen from "./src/components/Screen.js";
import Icon from "./src/components/Icon.js";
import ListItem from "./src/components/ListItem.js";
import MenuScreen from "./src/screens/MenuScreen/index.js";
import AppPicker from "./src/components/AppPicker.js";
import AppointmentEditScreen from "./src/screens/AppointmentEditScreen/index.js";


const App = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ({ email, password }) => {
        const response = await fetch("http://localhost:3000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (!response.ok) {
          const errorResData = await response.json();
          const errorId = errorResData.message;
          let message = "Something went wrong!";
          if (errorId === "EMAIL_NOT_FOUND") {
            message = "This email could not be found!";
          } else if (errorId === "INVALID_PASSWORD") {
            message = "This password is not valid!";
          }
          throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: resData.token });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),

      signUp: async ({ first_name, last_name, email, password }) => {
        const response = await fetch("http://localhost:3000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          }),
        });

        if (!response.ok) {
          const errorResData = await response.json();
          const errorId = errorResData.error.message;
          let message = "Something went wrong!";
          if (errorId === "EMAIL_EXISTS") {
            message = "This email exists already!";
          }
          throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: resData.token });
      },
    }),
    []
  );


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? <AuthNavigator /> : <TabNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
