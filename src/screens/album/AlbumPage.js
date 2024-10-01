import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Album from "./components/Album";

const albums = [
  {
    id: "1",
    name: "Album 1",
    description: "This is the first album",
    color: "#69E7AA",
    stickers: [
      // require("../../../assets/temp/sticker1.png"),
      // require("../../../assets/temp/sticker2.png"),
    ],
    backgroundImage: require("../../../assets/temp/album1.png"), // Background image for album
    opened: true,
    collected: 0,
    total: 12,
  },
  {
    id: "2",
    name: "Album 2",
    description: "This is the second album",
    color: "#F2D88A",
    stickers: [
      // require("../../../assets/temp/sticker1.png"),
      // require("../../../assets/temp/sticker2.png"),
    ],
    backgroundImage: require("../../../assets/temp/album2.png"), // Background image for album
    opened: false,
    collected: 0,
    total: 10,
  },
];

const AlbumPage = () => {
  const handleAlbumPress = (album) => {
    console.log(`Album clicked: ${album.name}`);
  };

  const renderAlbum = ({ item }) => (
    <Album album={item} onPress={() => handleAlbumPress(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        renderItem={renderAlbum}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
});

export default AlbumPage;
