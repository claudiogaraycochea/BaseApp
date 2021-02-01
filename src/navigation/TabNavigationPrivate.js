// Tab Navigation

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigationPrivate";

const Tab = createBottomTabNavigator();

const TabNavigatorPrivate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigatorPrivate;