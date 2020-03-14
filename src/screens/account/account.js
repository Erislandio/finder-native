import React, { useContext } from "react";
import { View, Text, AsyncStorage, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserContext, withUserData } from "../Home/withUserData";

function AccountScreen({ navigation }) {
  function handleLogout() {
    AsyncStorage.removeItem("user").then(() => {
      navigation.push("login");
    });
  }

  const { user } = useContext(UserContext);

  const userParse = JSON.parse(user);

  return (
    <View>
      <View style={styles.banner}>
        <Image source={{ uri: userParse.banner }} style={styles.userBanner} />
        <Image source={{ uri: userParse.image }} style={styles.avatar} />
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair -></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userBanner: {
    width: "100%",
    minHeight: 200,
    height: 200
  },
  banner: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "absolute",
    top: 120,
    zIndex: 100000
  }
});

export default withUserData(AccountScreen);
