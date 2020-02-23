import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Dimensions
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import FooterButton from "./FooterButton";

interface Props {
  children: React.ReactNode;
  style?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <ScrollView
      style={styles.scrollView}
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={Platform.OS === "web" && { alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
        <FooterButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f2f5f8"
  },
  content: {
    paddingHorizontal: 15,
    minHeight: Dimensions.get("window").height - (47 + getBottomSpace())
  },
  container: {
    ...(Platform.OS === "web" ? { maxWidth: 414, width: "100%" } : {})
  }
});

export default Layout;
