import React from "react";
import { View, StyleSheet } from "react-native";

import Title from "../../../Title";

import Card from "./Card";
import MoreButton from "./MoreButton";
import Button from "./Button";

const data = [
  {
    id: 1,
    brand: "Trendyol",
    featuredText: "Marka şikayetinize cevap yazdı.",
    title: "Lorem ipsum dolor sit amet, consectetur adifs…",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit sagittis turpi…",
    date: "5 saat önce"
  },
  {
    id: 2,
    brand: "Apple",
    featuredText: "Şikayetiniz ile ilgili 3 yeni yorum var.",
    title: "Lorem ipsum dolor sit amet, consectetur adifs…",
    date: "5 saat önce"
  },
  {
    id: 3,
    brand: "Garanti Bankası",
    featuredText: "Şikayetiniz 5 yeni destek aldı.",
    title: "Lorem ipsum dolor sit amet, consectetur adifs…",
    date: "5 saat önce",
    passive: true
  }
];

export default () => {
  return (
    <View style={styles.container}>
      <Title>Son Hareketler</Title>
      {data.map(item => (
        <Card {...item} key={item.id} />
      ))}
      <View style={styles.buttons}>
        <MoreButton />
        <Button text="Tüm Şikayetlerim (12)" />
        <Button text="Yorum Yazdığım Şikayetler (8)" />
        <Button text="Desteklediğim Şikayetler (65)" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  buttons: {
    paddingBottom: 10
  }
});
