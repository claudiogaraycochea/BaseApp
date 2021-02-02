import React from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import NavigatorPublic from "./src/navigation/NavigationPublic";
import NavigationPrivate from "./src/navigation/NavigationPrivate";

// Remove Yellow Notifications
LogBox.ignoreAllLogs("");


const App = () => {
  const logged = true;
  return (
    <NavigationContainer>
      {logged ? (<NavigationPrivate />):(<NavigatorPublic />)}
    </NavigationContainer>
  );
}
export default App;
