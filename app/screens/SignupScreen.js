import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Nome"),
  contact: Yup.number().required().min(9).label("Contacto"),
  email: Yup.string().email().label("E-mail"),
});

const SignupScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <AppForm
        initialValues={{
          name: "",
          contact: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField icon="account" name="name" placeholder="Nome" />
        <AppFormField
          icon="contacts"
          keyboardType="numeric"
          name="contact"
          placeholder="Contacto"
        />
        <AppFormField icon="email" name="email" placeholder="E-mail" />
        <SubmitButton title="Cadastrar" />
      </AppForm>
    </Screen>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
