import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";

var { height, width } = Dimensions.get("window");

export default class VideoComponent extends React.Component {
  renderVideo() {
    return (
      <Video
        source={{ uri: this.props.url }}
        style={{ width: width, height: height }}
        //style={{ flex : 1}}
        muted={false}
        repeat={true}
        resizeMode={"contain"}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
    );
  }

  render() {
    return <View>{this.renderVideo()}</View>;
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
