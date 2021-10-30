import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
