import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import FooterButton from "./FooterButton";

interface Props {
  children: React.ReactNode;
  style?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior="height"
        enabled
      >
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            Platform.OS === "web" && { alignItems: "center" }
          }
        >
          <View style={styles.container}>
            <View style={styles.content}>{children}</View>
            <FooterButton />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  keyboardView: { flex: 1, flexDirection: "column", justifyContent: "center" },
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
