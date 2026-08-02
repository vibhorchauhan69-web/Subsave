import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin() {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("⚠️ Please enter your email and password.");
      return;
    }

    setMessage("✅ Login button is working!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💰</Text>

      <Text style={styles.title}>SubSave</Text>

      <Text style={styles.subtitle}>
        Never miss a renewal again.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {message !== "" && (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 70,
    marginBottom: 10,
  },

  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#999",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 35,
  },

  input: {
    width: "100%",
    backgroundColor: "#1B1B1B",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    width: "100%",
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  message: {
    color: "#4ADE80",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});