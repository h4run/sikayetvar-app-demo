import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import Text from "./Text";
import { useToggle } from "./utils";

type Props = {
  label: string;
};

const Checkbox = ({ label }: Props) => {
  const [isChecked, toggle] = useToggle(false);
  return (
    <TouchableOpacity onPress={toggle} style={styles.container}>
      <Image
        source={
          isChecked
            ? require("./Images/checkbox_selected.png")
            : require("./Images/checkbox_unselected.png")
        }
        style={styles.img}
      />
      <Text style={{ fontSize: 12 }} fontWeight={500}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Checkbox;
