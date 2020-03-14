import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Logo({ uri, showTitle = true }) {
  return (
    <View style={styles.logoContainer}>
      <Image source={{ uri }} style={styles.image} />
      {showTitle ? <Text style={styles.logoTitle}>Finder</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    padding: 10,
    flex: 1
  },
  image: {
    width: 100,
    height: 100
  },
  logoTitle: {
    fontSize: 30,
    textAlign: "center"
  }
});

export { Logo };
