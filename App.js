import React, { useMemo, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator.js";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import appointmentsReducer from "./src/store/reducers/appointments";
import HomeNavigator from "./src/navigators/HomeNavigator.js";
import TabNavigator from "./src/navigators/TabNavigator.js";

const rootReducer = combineReducers({
  appointments: appointmentsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
