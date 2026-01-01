import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          Login to continue chatting
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        <Pressable
          style={styles.loginBtn}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        {/* UI only • No authentication */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 6,
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 14,
    padding: 18,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    fontSize: 15,
  },

  loginBtn: {
    backgroundColor: "#4f8cff",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 8,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  footerText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12,
    marginTop: 24,
  },
});
