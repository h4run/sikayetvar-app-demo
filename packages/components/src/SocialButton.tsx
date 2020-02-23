import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageProps,
  ImageProperties,
  TouchableOpacity
} from "react-native";

import Text from "./Text";

type Props = {
  text: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  icon: ImageProps;
};

export default ({ text, icon, backgroundColor, borderColor, color }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.center,
        { backgroundColor, borderColor }
      ]}
    >
      <View style={[styles.iconContainer, styles.center, { borderColor }]}>
        <Image {...icon} />
      </View>
      <View style={[styles.textContainer, styles.center]}>
        <Text fontWeight={700} style={{ color, fontSize: 16 }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 1
  },
  textContainer: {
    flexGrow: 1
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    width: 44,
    height: "100%",
    borderRightWidth: 1
  }
});
