import React from "react";
import { Routes } from "./src/Index";
import { AppRegistry, StatusBar, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.containerWrapper}>
      <StatusBar backgroundColor="transparent" hidden={true} />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    width: "100%"
  }
});

AppRegistry.registerComponent("Finder", () => Routes);
