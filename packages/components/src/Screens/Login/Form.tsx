import React, { useRef, useState } from "react";
import {
  View,
  TextInput as NativeTextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Text from "../../Text";
import TextInput from "../../TextInput";
import PasswordInput from "../../PasswordInput";
import CheckBox from "../../CheckBoxInput";
import Button from "../../Button";

import { API_URL } from "../../utils";

export type FormProps = {
  onSuccess(data: { access_token: string }): any;
};

const Form = ({ onSuccess }: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    if (isLoading) return;

    // @ts-ignore
    if (!emailInputRef.current?._lastNativeText) {
      if (emailInputRef.current) emailInputRef.current.focus();
      return;
    }
    // @ts-ignore
    if (!passwordInputRef.current?._lastNativeText) {
      if (passwordInputRef.current) passwordInputRef.current.focus();
      return;
    }

    setIsLoading(true);

    const fd = new FormData();

    fd.append("grant_type", "password");
    fd.append("client_id", "musteriyebakJwt");
    // @ts-ignore
    fd.append("username", emailInputRef.current?._lastNativeText);
    // @ts-ignore
    fd.append("password", passwordInputRef.current?._lastNativeText);

    try {
      const response = await fetch(API_URL + "/auth-member/auth/login", {
        method: "POST",
        body: fd,
        credentials: "include"
      });
      if (response.status !== 200) throw response;
      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      // console.error(error);
      setIsLoading(false);
    }
  };

  const passwordInputRef = useRef<NativeTextInput>(null);
  const emailInputRef = useRef<NativeTextInput>(null);
  return (
    <>
      <View style={styles.header}>
        <Text fontWeight={500}>ya da</Text>
        <Text fontWeight={700}>Bilgilerinizi doldurarak hızlıca üye olun</Text>
      </View>

      <TextInput
        forwardedRef={emailInputRef}
        placeholder="E-posta"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => {
          if (passwordInputRef.current) passwordInputRef.current.focus();
        }}
      />
      <PasswordInput
        forwardedRef={passwordInputRef}
        placeholder="Şifre"
        returnKeyType="go"
        onSubmitEditing={login}
      />

      <View style={styles.footer}>
        <CheckBox label="Beni Hatırla" />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText} fontWeight={500}>
            Şifremi Unuttum
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          isLoading={isLoading}
          color="green"
          text="Giriş Yap"
          onPress={login}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginVertical: 30
  },
  footer: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  forgotPasswordText: {
    fontSize: 12,
    textDecorationLine: "underline"
  },
  buttonContainer: {
    paddingBottom: 11.5,
    marginTop: 50
  }
});

export default Form;
