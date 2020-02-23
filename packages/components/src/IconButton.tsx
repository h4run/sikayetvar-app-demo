import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageProps,
  Text as NativeText
} from "react-native";

import Text from "./Text";
import { colors } from "./utils";

type Props = {
  icon: ImageProps;
  text1: string;
  text2: string;
  color: "green" | "primary";
};

export default ({ icon, text1, text2, color }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors[color], shadowColor: colors[color] }
      ]}
    >
      <Image {...icon} style={styles.icon} resizeMode="contain" />
      <Text fontWeight={700} style={styles.text}>
        <NativeText>
          {text1}
          {"\n"}
        </NativeText>
        <NativeText>{text2}</NativeText>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 60,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.5
  },
  icon: {
    marginLeft: 11,
    marginRight: 9,
    width: 30,
    height: 32
  },
  text: {
    color: "white",
    fontSize: 15,
    lineHeight: 18
  }
});
