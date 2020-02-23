import React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default () => (
  <ImageBackground
    resizeMode="contain"
    source={require("./Images/logo_bg.png")}
    style={styles.container}
  >
    <SafeAreaView style={styles.content}>
      <TouchableOpacity>
        <Image
          source={require("./Images/menu_icon.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("./Images/bell_icon.png")}
          style={styles.notificationIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: getStatusBarHeight(),
    height: 123
  },
  content: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  menuIcon: {
    width: 17,
    height: 13
  },
  notificationIcon: {
    width: 18,
    height: 18
  }
});
