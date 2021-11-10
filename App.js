import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./src/HomePage";
import Scanner from "./src/Scanner";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="scanner" options={{ title: "Scanner" }} component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
