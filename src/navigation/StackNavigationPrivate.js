// Stack Navigation Private

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/private/home/Home";
import List from "../screens/private/list/List";

import Profile from "../screens/private/profile/Profile";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ProfileStackNavigator };