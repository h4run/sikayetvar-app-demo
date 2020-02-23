import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import Layout from "./Layout";
import { colors } from "./utils";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.green} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f5f8"
  }
});

export default Loading;
