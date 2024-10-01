import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Album = ({ album, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.albumWrapper}>
      {/* Background Image */}
      <ImageBackground
        source={album.backgroundImage}
        style={styles.albumContainer}
        imageStyle={styles.backgroundImage}
      >
        {/* Render stickers */}
        <View style={styles.stickersContainer}>
          {album.stickers.map((sticker, index) => (
            <Image key={index} source={sticker} style={styles.sticker} />
          ))}
        </View>

        {album.opened && (
          <Text style={styles.stickerInfo}>
            אספת: {album.collected}/{album.total}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  albumWrapper: {
    marginBottom: 20,
  },
  albumContainer: {
    padding: 20,
    borderRadius: 10,
    height: 200, // Adjust height as needed
    justifyContent: "space-between",
  },
  backgroundImage: {
    borderRadius: 10,
  },
  albumName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // Text color contrasting with the background image
  },
  albumDescription: {
    marginTop: 5,
    fontSize: 14,
    color: "#fff", // Text color contrasting with the background image
  },
  stickersContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  sticker: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  stickerInfo: {
    position: "absolute",
    top: 40,
    right: 10,
    marginTop: 10,
    fontSize: 14,
    color: "#e6e6e6",
  },
  statusText: {
    marginTop: 5,
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
});

export default Album;
