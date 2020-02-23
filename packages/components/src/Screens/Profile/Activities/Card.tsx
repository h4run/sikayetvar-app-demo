import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../../../Text";
import { colors } from "../../../utils";

type Props = {
  brand: string;
  featuredText: string;
  title: string;
  date: string;
  desc?: string;
  passive?: boolean;
};

const Card = ({
  brand,
  featuredText,
  title,
  desc,
  date,
  passive = false
}: Props) => {
  return (
    <View style={styles.container}>
      <Text fontWeight={600} style={styles.brand}>
        {brand}
      </Text>
      <View style={styles.row}>
        <Image
          style={styles.titleIcon}
          source={
            passive
              ? require("../../../Images/activite_passive_icon.png")
              : require("../../../Images/activite_icon.png")
          }
        />
        <Text
          numberOfLines={2}
          fontWeight={700}
          style={[styles.title, passive && { color: colors.gray }]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.dot} />
        <Text fontWeight={600} style={styles.featuredText}>
          {featuredText}
        </Text>
      </View>
      {desc && (
        <Text numberOfLines={3} style={styles.desc}>
          {desc}
        </Text>
      )}
      <Text fontWeight={500} style={styles.date}>
        {date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginBottom: 10,
    borderRadius: 4,
    shadowColor: colors.gray,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  brand: {
    fontSize: 13,
    color: colors.gray,
    marginLeft: 45
  },
  titleIcon: {
    width: 40,
    height: 37,
    marginRight: 5,
    marginTop: 4
  },
  title: {
    lineHeight: 20,
    fontSize: 17
  },
  featuredText: {
    marginTop: 10,
    marginBottom: 5
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: colors.green,
    borderRadius: 3,
    marginLeft: 34,
    marginRight: 5,
    marginTop: 5
  },
  desc: {
    marginLeft: 45
  },
  date: { fontSize: 12, marginTop: 10, color: colors.gray, marginLeft: 45 }
});

export default Card;
