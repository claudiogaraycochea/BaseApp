// Stack Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/public/login/Login";
import SignUp from "../screens/public/signUp/SignUp";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const NavigatorPublic = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default NavigatorPublic;