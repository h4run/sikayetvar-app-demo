import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Text from "../../Text";

//{ avatar, name }

type Props = {
  name: string;
  picture: string;
};

const Header = ({ name, picture }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            "https://image.freepik.com/free-vector/sunset-mountains-with-pine-forest_7993-2327.jpg"
        }}
      />
      <Text fontWeight={700} style={styles.name}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: -35
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  name: {
    fontSize: 20,
    marginTop: 3
  }
});

export default Header;
