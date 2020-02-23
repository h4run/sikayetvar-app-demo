import React from "react";
import { TextInput, TextInputProps, StyleSheet, View } from "react-native";

export interface Props extends TextInputProps {
  icon?: React.ReactChild;
  forwardedRef?: React.RefObject<TextInput>;
}

const TextInputWrapper: React.SFC<Props> = ({
  icon,
  forwardedRef,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={forwardedRef}
        placeholderTextColor="#7f94ad"
        style={styles.input}
        {...props}
      />
      {icon && React.isValidElement(icon) && (
        <View style={styles.icon}>{icon}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    position: "relative"
  },
  icon: {
    position: "absolute",
    right: 15,
    top: "50%"
  },
  input: {
    borderWidth: 1,
    borderColor: "#d7e2e8",
    borderRadius: 5,
    height: 48,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 100
  }
});

export default TextInputWrapper;
