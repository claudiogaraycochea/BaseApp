// Tab Navigation

import React from "react";
import { Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigationPrivate";

const Tab = createBottomTabNavigator();

const TabNavigatorPrivate = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return <Text>IconA</Text>
          } else if (route.name === 'Profile') {
            return <Text>IconB</Text>
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigatorPrivate;