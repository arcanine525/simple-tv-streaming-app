/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import VideoComponent from "../../components/VideoComponent";
import channels from "../../config/channel";
import Images from "../../Theme/Image";
var { height, width } = Dimensions.get("window");
export default class HomeScreen extends Component {
  render() {
    console.warn(channels);
    return (
      <View style={styles.container}>
        <FlatList
          data={channels}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item_container}
              onPress={() => {
                this.props.navigation.navigate("DetailScreen", {
                  url: item.url
                });
              }}
            >
              <Image source={item.img} style={styles.icon} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },

  instructions: {
    textAlign: "center",
    fontSize: 36,
    color: "#333333",
    margin: 15
  },
  item_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#008080",
    flexDirection: "row",
    margin: 10
  },
  icon: {
    width: 48,
    height: 48,
    margin: 5
  }
});
