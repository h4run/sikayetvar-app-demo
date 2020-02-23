import React, { useState } from "react";
import {
  TextInputProps,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import TextInput, { Props } from "./TextInput";

import { useToggle } from "./utils";

const PasswordInput: React.SFC<Props> = props => {
  const [isSecure, toggleSecure] = useToggle(true);
  return (
    <TextInput
      textContentType="password"
      autoCapitalize="none"
      secureTextEntry={isSecure}
      icon={
        <TouchableOpacity onPress={toggleSecure}>
          <Image
            source={
              isSecure
                ? require("./Images/eye_op.png")
                : require("./Images/eye_cl.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 18,
    transform: [{ translateY: -9 }]
  }
});

export default PasswordInput;
