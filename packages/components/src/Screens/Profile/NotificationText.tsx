import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import Text from "../../Text";
import { colors } from "../../utils";

export default () => {
  return (
    <View style={styles.container}>
      <Text fontWeight={600} style={styles.text}>
        Markadan gelen 2 okunmamış mesajınız var.
      </Text>

      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.link}>
          <Text fontWeight={700} style={styles.linkText}>
            Hemen Oku
          </Text>
          <Image
            source={require("../../Images/rar_icon_green.png")}
            style={styles.linkIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginTop: 15,
    borderRadius: 4,
    padding: 15
  },
  text: {
    fontSize: 12,
    color: "white"
  },
  link: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkIcon: {
    marginLeft: 4,
    width: 7,
    height: 12
  },
  linkContainer: {
    marginTop: 8,
    alignItems: "flex-end"
  },
  linkText: {
    fontSize: 12,
    color: colors.green
  }
});
