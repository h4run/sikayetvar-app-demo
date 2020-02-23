import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

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
    marginTop: getStatusBarHeight(),
    width: 148,
    height: 74
  },
  img: {
    width: 196,
    height: 60
  }
});
