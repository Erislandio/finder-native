import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const ButtonDefault = ({
  customStyles,
  disabled,
  onPress,
  children
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.button, customStyles]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
