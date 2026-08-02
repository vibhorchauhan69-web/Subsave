import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.greeting}>👋 Good Evening</Text>

      <Text style={styles.name}>Vibhor</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Spending</Text>
        <Text style={styles.amount}>₹1,749</Text>
      </View>

      <Text style={styles.sectionTitle}>Upcoming Renewals</Text>

      <View style={styles.subscription}>
        <Text style={styles.subscriptionName}>🎬 Netflix</Text>
        <Text style={styles.subscriptionDate}>Tomorrow</Text>
      </View>

      <View style={styles.subscription}>
        <Text style={styles.subscriptionName}>🎵 Spotify</Text>
        <Text style={styles.subscriptionDate}>3 Days</Text>
      </View>

      <View style={styles.subscription}>
        <Text style={styles.subscriptionName}>📦 Amazon Prime</Text>
        <Text style={styles.subscriptionDate}>8 Days</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+ Add Subscription</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 20,
  },

  greeting: {
    color: "#9CA3AF",
    fontSize: 18,
    marginTop: 40,
  },

  name: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
  },

  cardTitle: {
    color: "#E5E7EB",
    fontSize: 16,
  },

  amount: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 10,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  subscription: {
    backgroundColor: "#161B22",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subscriptionName: {
    color: "#fff",
    fontSize: 17,
  },

  subscriptionDate: {
    color: "#22C55E",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#3B82F6",
    marginTop: 30,
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});