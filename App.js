import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigatorPublic from "./src/navigation/NavigationPublic";
import NavigationPrivate from "./src/navigation/NavigationPrivate";
const App = () => {
  const logged = true;
  return (
    <NavigationContainer>
      {logged ? (<NavigationPrivate />):(<NavigatorPublic />)}
    </NavigationContainer>
  );
}
export default App;
