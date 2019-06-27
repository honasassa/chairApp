import React from "react";
import {
  View,
  StyleSheet
} from "react-native";
import { MapView, Location, Permissions } from "expo";

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  state = {
    region: {
      latitude: 35.6897,
      longitude: 139.7004,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  };

  async componentDidMount() {
    await this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      // TODO: support not granted
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          // ref={map => {
          //   this.map = map;
          // }}
          provider={"google"}
          showsUserLocation={true}
          showsIndoorLevelPicker={true}
          initialRegion={this.state.region}
          showsMyLocationButton={true}
          showUserLocation={true}
        >
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
