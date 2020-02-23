import React from "react";

import { View, StyleSheet } from "react-native";

import { gutter } from "../../utils";
import IconButton from "../../IconButton";

const IconButtons = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: gutter, width: "50%" }}>
        <IconButton
          color="green"
          icon={{
            source: require("../../Images/camera_icon.png")
          }}
          text1="Hızlı"
          text2="Şikayet Ekle"
        />
      </View>
      <View style={{ paddingLeft: gutter, width: "50%" }}>
        <IconButton
          color="green"
          icon={{
            source: require("../../Images/documents_icon.png")
          }}
          text1="Detaylı"
          text2="Şikayet Ekle"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 44
  }
});

export default IconButtons;
