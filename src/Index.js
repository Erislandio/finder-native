// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login/Login";
import HomeScreen from "./screens/Home/Home";
import SignInScreen from "./screens/SignIn/SignInScreen";
import { AsyncStorage } from "react-native";
import AccountScreen from "./screens/account/account";

const Stack = createStackNavigator();

function Routes() {
  const user = AsyncStorage.getItem("user").then(res => res);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <React.Fragment>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              animationEnabled: true,
              animationTypeForReplace: "push",
              cardShadowEnabled: true,
              gestureDirection: "horizontal",
              gestureEnabled: true,
              headerShown: false
            }}
          />

          <Stack.Screen
            name="account"
            component={AccountScreen}
            options={{
              animationEnabled: true,
              animationTypeForReplace: "push",
              cardShadowEnabled: true,
              gestureDirection: "horizontal",
              gestureEnabled: true,
              title: "Minha conta"
            }}
          />
          <Stack.Screen
            name="signin"
            component={SignInScreen}
            options={{
              animationEnabled: true,
              animationTypeForReplace: "push",
              cardShadowEnabled: true,
              gestureDirection: "horizontal",
              gestureEnabled: true,
              headerShown: false
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              animationEnabled: true,
              animationTypeForReplace: "push",
              cardShadowEnabled: true,
              gestureDirection: "horizontal",
              gestureEnabled: true,
              headerShown: false
            }}
          />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Routes };
