import React from "react";
import { View, StyleSheet } from "react-native";

import SocialButton from "../../SocialButton";

import { gutter } from "../../utils";

const SocialButtons = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.column, { paddingRight: gutter }]}>
        <SocialButton
          icon={{
            source: require("../../Images/facebook_icon.png"),
            style: { width: 12, height: 22 }
          }}
          backgroundColor="#2f77bf"
          borderColor="#114c86"
          color="white"
          text="Facebook"
        />
      </View>
      <View style={[styles.column, { paddingLeft: gutter }]}>
        <SocialButton
          icon={{
            source: require("../../Images/google_icon.png"),
            style: {
              width: 22,
              height: 22
            }
          }}
          backgroundColor="white"
          borderColor="#d7d7d7"
          color="#343434"
          text="Google"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30
  },
  column: {
    width: "50%"
  }
});

export default SocialButtons;
