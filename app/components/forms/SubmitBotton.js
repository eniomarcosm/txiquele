import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitBotton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit(title)} />;
};

export default SubmitBotton;
