import React, { useRef, useState } from "react";
import {
  View,
  TextInput as NativeTextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import Text from "../../Text";
import TextInput from "../../TextInput";
import PasswordInput from "../../PasswordInput";
import CheckBox from "../../CheckBoxInput";
import Button from "../../Button";

import { API_URL } from "../../utils";

import Toast from "./Toast";
import { getBottomSpace } from "react-native-iphone-x-helper";

export type FormProps = {
  onSuccess(data: { access_token: string }): any;
};

const Form = ({ onSuccess }: FormProps) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    if (isLoading) return;

    if (!username) {
      if (emailInputRef.current) emailInputRef.current.focus();
      return;
    }
    if (!password) {
      if (passwordInputRef.current) passwordInputRef.current.focus();
      return;
    }

    setIsLoading(true);

    const fd = new FormData();

    fd.append("grant_type", "password");
    fd.append("client_id", "musteriyebakJwt");
    fd.append("username", username);
    fd.append("password", password);

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

      if (Platform.OS !== "web")
        toastRef.current.show("E-posta ya da Şifre hatalı.", 700);
    }
  };

  const passwordInputRef = useRef<NativeTextInput>(null);
  const emailInputRef = useRef<NativeTextInput>(null);
  const toastRef = useRef<any>();
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
        onChangeText={username => setUsername(username)}
        onSubmitEditing={login}
      />
      <PasswordInput
        forwardedRef={passwordInputRef}
        placeholder="Şifre"
        returnKeyType="go"
        onChangeText={password => setPassword(password)}
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
        {Platform.OS !== "web" && (
          <Toast
            ref={toastRef}
            position="top"
            positionValue={-60}
            style={{ backgroundColor: "#ff5555" }}
          />
        )}
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
    position: "relative",
    paddingBottom: 11.5,
    marginTop: 30
  }
});

export default Form;
