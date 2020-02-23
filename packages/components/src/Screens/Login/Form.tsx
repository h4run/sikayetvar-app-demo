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
        onChangeText={username => setUsername(username)}
        onSubmitEditing={() => {
          if (passwordInputRef.current) passwordInputRef.current.focus();
        }}
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
