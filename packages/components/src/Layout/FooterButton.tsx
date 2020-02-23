import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import Text from "../Text";

import { colors } from "../utils";

const FooterButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} fontWeight={600}>
        Yazılan şikayetleri incelemek için sikayetvar.com’a git
      </Text>
      <Image
        source={require("../Images/rar_icon_white.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.green,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15 + getBottomSpace()
  },
  text: {
    fontSize: 12,
    color: "white"
  },
  icon: {
    width: 7,
    height: 12,
    marginLeft: 4
  }
});

export default FooterButton;
