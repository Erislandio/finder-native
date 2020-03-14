import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withUserData, UserContext } from "./withUserData";

const HomeScreen = ({ navigation }) => {
  const [userPosition, setUserPosition] = useState({
    latitude: 0,
    longitude: 0
  });

  const { user } = useContext(UserContext);
  console.log(user);

  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      const {
        coords: { latitude, longitude }
      } = position;

      setUserPosition({
        ...userPosition,
        latitude,
        longitude
      });
    });
  }, []);

  if (userPosition.latitude === 0 && userPosition.longitude === 0) {
    return <Text>CArregando map</Text>;
  }

  const { latitude, longitude } = userPosition;

  function handleSelect(value) {
    console.log(value);
    alert(value);
  }

  return (
    <View style={styles.mapContainer}>
      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <RNPickerSelect
            style={styles.picker}
            onValueChange={handleSelect}
            placeholder={{ label: "Selecione o tipo do serviço" }}
            items={[
              { key: 1, label: "Football", value: "football", color: "#333" },
              { key: 2, label: "Baseball", value: "baseball", color: "#333" },
              { key: 3, label: "Hockey", value: "hockey", color: "#333" }
            ]}
          />
        </View>
        <Icon
          name="md-menu"
          color="#fabc04"
          size={40}
          style={styles.menuIcon}
          onPress={() => navigation.push("account")}
        />
      </View>
      <MapView
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}
        zoomEnabled
        minZoomLevel={10}
        maxZoomLevel={17}
      >
        <Marker
          title="Você está aqui :-)"
          pinColor="#fabc04"
          coordinate={{
            longitude: userPosition.longitude,
            latitude: userPosition.latitude
          }}
        />
      </MapView>
      <View style={styles.customButton}>
        <TouchableOpacity
          onPress={() => setUserPosition({ latitude, longitude })}
        >
          <Icon name="md-locate" size={40} color="#fabc04" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withUserData(HomeScreen);

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  customButton: {
    position: "absolute",
    right: 20,
    zIndex: 100000,
    bottom: 30
  },
  pickerContainer: {
    padding: 20,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 11111,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#dedede",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "90%"
  },
  menuIcon: {
    marginLeft: 10,
    zIndex: 1111111111111
  },
  picker: {
    backgroundColor: "#fff",
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 30,
    width: "100%"
  }
});
