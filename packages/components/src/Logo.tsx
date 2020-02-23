import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { getStatusBarHeight, ifIphoneX } from "react-native-iphone-x-helper";

export default () => (
  <View style={styles.container}>
    <Image style={styles.bg} source={require("./Images/logo_bg.png")} />
    <Image style={styles.img} source={require("./Images/logo.png")} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30
  },
  bg: {
    marginTop: ifIphoneX(null, null) ? getStatusBarHeight() : 0,
    width: 148,
    height: 74
  },
  img: {
    width: 196,
    height: 60
  }
});
