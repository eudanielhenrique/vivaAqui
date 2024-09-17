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
import { Button, CheckBox, Input } from "@rneui/themed";
import { supabase } from "../../service/supabase";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    const navigation = useNavigation();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      console.error("Erro no login:", error.message);
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert("Login realizado com sucesso!");
      // Redireciona o usuário para a tela "Home"
      // navigation.navigate('HomeScreen')
    }
    
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.formContainer}>
      <Text style={styles.titlelogo}>VivaAqui</Text>
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
          <Text style={styles.textRest}>Esqueceu a senha?</Text>
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Entrar"
            disabled={loading}
            onPress={signInWithEmail}
            buttonStyle={styles.button}
          />
        </View>
      </View>
      <Text style={styles.textSingup}>Não tem conta? <Text style={styles.signUpTitle}>Cadastre-se</Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
    width: "100%",
    fontFamily: "Mulish",

  },
  formContainer: {
    width: "100%",
    borderRadius: 10,
    padding: 20,
  },
  titlelogo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#252525",
    textAlign: "center",
    marginBottom: 82,
  },
  title: {
    fontSize: 24,
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
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === "ios" ? 12 : 6,
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
    fontWeight: "bold",
  },
  textRest:{
    color: "#024959",
    fontSize: 16,
    textAlign: "right",
    marginBottom: 20,
  },
  textSingup:{
    color: "#252525",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  CheckBox:{
    color: "#024959",
  }
});