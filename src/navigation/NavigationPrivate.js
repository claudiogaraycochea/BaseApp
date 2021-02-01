// Drawer Navitator
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileStackNavigator } from "./StackNavigationPrivate";
import TabNavigatorPrivate from "./TabNavigationPrivate";

// Drawer Side Menu
const Drawer = createDrawerNavigator();

const NavigatorPrivate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigatorPrivate} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
}

export default NavigatorPrivate;