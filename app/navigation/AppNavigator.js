import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
      headerShown: false,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      name="Inicio"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
      name="Conta"
      component={AccountScreen}
    />
  </Tab.Navigator>
);

export default AppNavigator;
