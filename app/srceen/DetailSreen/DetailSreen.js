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

var { height, width } = Dimensions.get("window");
export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    //const { url } = this.props.navigation.state.params;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: width, height: height }}>
          <VideoComponent url={this.props.navigation.state.params.url} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
