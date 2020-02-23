import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Text from "../../../Text";
import { colors } from "../../../utils";

type Props = {
  text: string;
};

export default ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontWeight={500} style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4
  },
  text: { fontSize: 16 }
});
