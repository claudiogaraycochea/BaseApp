import React, { useState } from "react";
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import getStore from './src/store/config/store';

import { NavigationContainer } from "@react-navigation/native";

import NavigatorPublic from "./src/navigation/NavigationPublic";
import NavigationPrivate from "./src/navigation/NavigationPrivate";

// Remove Yellow Notifications
LogBox.ignoreAllLogs('');

let store = getStore();

const App = () => {
  const [user, setUser] = useState();

  const isLoggedIn = false;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (<NavigationPrivate />) : (<NavigatorPublic />)}
      </NavigationContainer>
    </Provider>
  );
}
export default App;
