import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function AddSubscriptionScreen() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [message, setMessage] = useState("");

  function handleSave() {
    if (
      service.trim() === "" ||
      price.trim() === "" ||
      renewalDate.trim() === ""
    ) {
      setMessage("⚠️ Please fill all fields.");
      return;
    }

    setMessage(`✅ ${service} saved successfully!`);

    setService("");
    setPrice("");
    setRenewalDate("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add Subscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Service Name"
        placeholderTextColor="#777"
        value={service}
        onChangeText={setService}
      />

      <TextInput
        style={styles.input}
        placeholder="Price (₹)"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Renewal Date"
        placeholderTextColor="#777"
        value={renewalDate}
        onChangeText={setRenewalDate}
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Subscription</Text>
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
    backgroundColor: "#0D1117",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#161B22",
    color: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  message: {
    color: "#22C55E",
    textAlign: "center",
    marginTop: 25,
    fontSize: 17,
    fontWeight: "600",
  },
});