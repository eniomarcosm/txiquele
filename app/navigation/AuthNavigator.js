import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigatior = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      options={{ headerShown: false }}
      component={WelcomeScreen}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Registro" component={SignupScreen} />
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={AppNavigator}
    />
  </Stack.Navigator>
);

export default AuthNavigatior;
