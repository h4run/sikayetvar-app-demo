import React from "react";
import {
  Text,
  StyleSheet,
  Platform,
  TextProps,
  StyleProp,
  TextStyle
} from "react-native";

import { colors, getFontWeightText } from "./utils";

export interface Props extends TextProps {
  fontWeight?: number;
  style?: any;
}

const TextWrapper: React.SFC<Props> = ({
  style,
  fontWeight = 400,
  ...props
}) => {
  const flattenStyles = StyleSheet.flatten([styles.text, style]);
  return (
    <Text
      style={[
        Platform.OS === "web"
          ? { fontWeight }
          : { fontFamily: "Montserrat-" + getFontWeightText(fontWeight) },
        {
          lineHeight: flattenStyles.fontSize * 1.42
        },
        flattenStyles
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.primary
  }
});

export default TextWrapper;
