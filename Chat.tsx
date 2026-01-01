import { router } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerName}>Rahul</Text>

        <View style={styles.headerActions}>
          <Pressable>
            <Text style={styles.actionIcon}>📞</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.actionIcon}>🎥</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/(tabs)/Settings")}>
  <Text style={styles.actionIcon}>⚙️</Text>
</Pressable>
        </View>
      </View>

      <View style={styles.divider}></View>

      {/* MESSAGES */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MessageLeft}>
          <Text>Hi How are You</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>I am good Rahul</Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>Let us Work on Project</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>okay</Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>Tell me something about project</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>This project about earning</Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>ohhh wow</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>
            I am also interested what about this project
          </Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>can you tell me in details</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>Sure, why not</Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>Lets discuss on call</Text>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.rightText}>okay</Text>
        </View>

        <View style={styles.MessageLeft}>
          <Text>Call me</Text>
        </View>
      </ScrollView>

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Type a message" />
        <Pressable style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  /* HEADER STYLES */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  backIcon: {
    fontSize: 22,
    marginRight: 10,
  },

  headerName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },

  headerActions: {
    flexDirection: "row",
    gap: 12,
  },

  actionIcon: {
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },

  /* MESSAGE STYLES */
  MessageLeft: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "75%",
  },

  messageRight: {
    alignSelf: "flex-end",
    backgroundColor: "#4f8cff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: "70%",
  },

  rightText: {
    color: "#fff",
  },

  /* INPUT STYLES */
  inputRow: {
    flexDirection: "row",
    marginTop: "auto",
    paddingBottom: 8,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  sendBtn: {
    marginLeft: 8,
    backgroundColor: "#4f8cff",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 8,
  },

  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
