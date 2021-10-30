import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...othersProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...othersProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
