/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import VideoComponent from "../../components/VideoComponent";
import Video from "react-native-video";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    //const { url } = this.props.navigation.state.params;
  }
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: this.props.navigation.state.params.url }}
          style={styles.backgroundVideo}
          muted={false}
          repeat={true}
          resizeMode={"contain"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
