import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Text from "../../../Text";

export default () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontWeight={600} style={styles.text}>
        Daha Çok Göster
      </Text>
      <Image
        style={styles.icon}
        source={require("../../../Images/down_icon.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  text: { fontSize: 16 },
  icon: {
    width: 13,
    height: 8,
    marginLeft: 4
  }
});
