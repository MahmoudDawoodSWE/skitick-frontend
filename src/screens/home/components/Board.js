// components/Board.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Get screen width
const screenWidth = Dimensions.get("window").width;

const Board = ({ board, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.boardContainer}
      onPress={() => onPress(board)}
    >
      <Text style={styles.boardTitle}>{board.title}</Text>
      <Text style={styles.boardDescription}>{board.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    width: screenWidth * 0.9, // 90% of the screen width
    height: 200,
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignSelf: "center", // Center the board horizontally
  },
  boardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  boardDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default Board;
