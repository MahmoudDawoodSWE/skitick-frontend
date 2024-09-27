import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const albums = [
  { id: "1", title: "Vacation Photos" },
  { id: "2", title: "Family Memories" },
  { id: "3", title: "Wedding Album" },
  { id: "4", title: "Nature Shots" },
];

const AlbumPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.albumItem}>
            <Text style={styles.albumTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  albumItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  albumTitle: {
    fontSize: 18,
  },
});

export default AlbumPage;
