import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatList() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <Text style={styles.header}>Chats</Text> */}

      {/* Chat Item */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable
        style={styles.chatItem}
        onPress={() => router.push({ pathname: "/Chat", params: { name: "Rahul" } })}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>

        <View style={styles.chatInfo}>
          <Text style={styles.name}>Rahul</Text>
          <Text style={styles.message}>Hey! How are you?</Text>
        </View>

        <Text style={styles.time}>10:30</Text>
      </Pressable>

      <Pressable
        style={styles.chatItem}
        onPress={() => router.push({ pathname: "/Chat", params: { name: "Ananya" } })}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <View style={styles.chatInfo}>
          <Text style={styles.name}>Ananya</Text>
          <Text style={styles.message}>Let’s work on the project</Text>
        </View>

        <Text style={styles.time}>09:15</Text>
      </Pressable>

      <Pressable
        style={styles.chatItem}
        onPress={() => router.push({ pathname: "/Chat", params: { name: "Karan" } })}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        <View style={styles.chatInfo}>
          <Text style={styles.name}>Karan</Text>
          <Text style={styles.message}>See you tomorrow</Text>
        </View>

        <Text style={styles.time}>Yesterday</Text>
      </Pressable>
<Pressable
  style={styles.chatItem}
  onPress={() => router.push({ pathname: "/Chat", params: { name: "Pooja" } })}
>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>P</Text>
  </View>

  <View style={styles.chatInfo}>
    <Text style={styles.name}>Pooja</Text>
    <Text style={styles.message}>Are you coming today?</Text>
  </View>

  <Text style={styles.time}>08:40</Text>
</Pressable>

<Pressable
  style={styles.chatItem}
  onPress={() => router.push({ pathname: "/Chat", params: { name: "Aman" } })}
>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>A</Text>
  </View>

  <View style={styles.chatInfo}>
    <Text style={styles.name}>Aman</Text>
    <Text style={styles.message}>Call me when free</Text>
  </View>

  <Text style={styles.time}>Yesterday</Text>
</Pressable>

<Pressable
  style={styles.chatItem}
  onPress={() => router.push({ pathname: "/Chat", params: { name: "Neha" } })}
>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>N</Text>
  </View>

  <View style={styles.chatInfo}>
    <Text style={styles.name}>Neha</Text>
    <Text style={styles.message}>Thanks 😊</Text>
  </View>

  <Text style={styles.time}>Yesterday</Text>
</Pressable>

<Pressable
  style={styles.chatItem}
  onPress={() => router.push({ pathname: "/Chat", params: { name: "Rohit" } })}
>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>R</Text>
  </View>

  <View style={styles.chatInfo}>
    <Text style={styles.name}>Rohit</Text>
    <Text style={styles.message}>Let’s meet tomorrow</Text>
  </View>

  <Text style={styles.time}>2 days ago</Text>
</Pressable>
<Pressable
  style={styles.chatItem}
  onPress={() => router.push({ pathname: "/Chat", params: { name: "Vikas" } })}
>
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>V</Text>
  </View>

  <View style={styles.chatInfo}>
    <Text style={styles.name}>Vikas</Text>
    <Text style={styles.message}>Let me know the update</Text>
  </View>

  <Text style={styles.time}>Sat</Text>
</Pressable>
</ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 16,
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#4f8cff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  chatInfo: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  message: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },

  time: {
    fontSize: 12,
    color: "#999",
  },
});
