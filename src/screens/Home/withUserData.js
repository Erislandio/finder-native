import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage, Text } from "react-native";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { logoUri } from "../../utils/logoUri";
export const UserContext = createContext(null);

export const withUserData = Component => props => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(res => {
        setUser(res);
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading || user === null) {
    return (
      <Container>
        <Logo uri={logoUri} />
        <Text>Carregando suas informações...</Text>
      </Container>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...props} />
    </UserContext.Provider>
  );
};
