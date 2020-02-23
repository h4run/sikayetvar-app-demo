import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps
} from "react-native";

import { colors } from "./utils";
import Text from "./Text";

type Props = {
  text: string;
  color: "primary" | "green";
  onPress: VoidFunction;
  isLoading: boolean;
};

const Button = ({ text, color, onPress, isLoading }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: colors[color] },
        isLoading && { opacity: 0.6 }
      ]}
      disabled={isLoading}
    >
      <Text fontWeight={700} style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderRadius: 4
  },
  text: {
    color: "white",
    fontSize: 16
  }
});

export default Button;
