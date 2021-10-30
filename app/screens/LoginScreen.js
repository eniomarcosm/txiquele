import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppNavigator from "../navigation/AppNavigator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("E-mail"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("Home")}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Senha"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
