// pages/HomePage.js
import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { selectUser } from "../../util/selectors";
import { useSelector } from "react-redux";
import Board from "./components/Board";

const HomePage = ({ navigation }) => {
  const user = useSelector(selectUser);

  // Sample boards data
  const boards = [
    { id: "1", title: "Board 1", description: "This is the first board" },
    { id: "2", title: "Board 2", description: "This is the second board" },
    { id: "3", title: "Board 3", description: "This is the second board" },
    // Add more boards as needed
  ];

  const handleBoardPress = (board) => {
    // Handle board click, navigate to board details page
    navigation.navigate("BoardDetails", { boardId: board.id });
  };

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/app/Group 45253.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>היי {user?.firstname}, בוקר טוב</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <FlatList
          data={boards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Board board={item} onPress={handleBoardPress} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    marginVertical: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  logo: {
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 70,
    marginBottom: 90,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
