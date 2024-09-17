import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { supabase } from "../../service/supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Erro no login:", error.message);
    } else {
      Alert.alert("Login realizado com sucesso!");
    }
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert(
        "Por favor, verifique sua caixa de entrada para confirmar o email!"
      );
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          Cadastre-se para aceder ao aplicativo
        </Text>
        <View style={styles.inputGroup}>
          <Input
            rightIcon={{
              type: "font-awesome",
              name: "envelope",
              color: "#024959",
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="nome@email.com"
            autoCapitalize="none"
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            rightIcon={{
              type: "font-awesome",
              name: "lock",
              color: "#024959",
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Senha"
            autoCapitalize="none"
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Entrar"
            disabled={loading}
            onPress={signInWithEmail}
            buttonStyle={styles.button}
          />
          <Text style={styles.subtitle}
            disabled={loading}
            onPress={signUpWithEmail}>
            Não tem conta? <b>Cadastre-se</b>
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#024959",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#252525",
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 6,
    marginVertical: 10,
  },
  buttonGroup: {
    width: "100%",
    
  },
  button: {
    backgroundColor: "#024959",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: "100%",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#024959",
    
  },
  signUpTitle: {
    color: "#024959",
  },
});