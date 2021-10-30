import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";

import { store } from "./store";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigatior from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <AuthNavigatior />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
