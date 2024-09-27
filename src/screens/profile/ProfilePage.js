import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Example image
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
});

export default ProfilePage;
