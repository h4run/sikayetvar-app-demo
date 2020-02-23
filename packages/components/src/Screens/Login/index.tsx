import React from "react";
import { StyleSheet } from "react-native";

import Layout from "../../Layout";
import Logo from "../../Logo";
import Text from "../../Text";

import SocialButtons from "./SocialButtons";
import Form, { FormProps } from "./Form";

export default ({ onSuccess }: FormProps) => {
  return (
    <Layout>
      <Logo />
      <Text fontWeight={700} style={{ alignSelf: "center" }}>
        Sosyal Medya Hesaplarınızla giriş yapın
      </Text>
      <SocialButtons />
      <Form onSuccess={onSuccess} />
      <Text fontWeight={500} style={styles.footerText}>
        Üye Değilseniz Hemen <Text fontWeight={700}>Üye Olun</Text>
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  footerText: {
    marginTop: 18.5,
    marginBottom: 30,
    alignSelf: "center"
  }
});
