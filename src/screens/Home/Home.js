import React from "react";
import { View, Text } from "react-native";
import { Container } from "../../components/Container";

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text onPress={() => navigation.push("signin")}>Home</Text>
    </Container>
  );
};
