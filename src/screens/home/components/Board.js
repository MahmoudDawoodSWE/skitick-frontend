import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";

// Get screen width
const screenWidth = Dimensions.get("window").width;

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.boardContainer}>
      <ImageBackground
        source={board.image} // Use the image source passed from the HomePage
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle} // To style the image itself
      >
        <View style={styles.textContainer}>
          {/* Board number fixed at the top right corner */}
          <View
            style={[
              styles.boardNumberContainer,
              { backgroundColor: board.color },
            ]}
          >
            <Text style={styles.boardNumber}>לוח #{board.id}</Text>
          </View>

          {/* Existing block with rocket icon and progress text, unchanged */}
          {board.opened && (
            <View style={styles.titleContainer}>
              <Image
                source={require("../../../../assets/app/rocket.png")}
                style={styles.titleIcon}
              />
              <Text style={styles.boardTitle}>{board.progress}</Text>
            </View>
          )}

          {/* Conditional rendering based on whether the board is opened */}
          {board.opened ? (
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>ניתן לזכות בעד 3 מדבקות</Text>
              <View style={styles.progressContainer}>
                <Image
                  source={require("../../../../assets/app/rocket_launch.png")} // Example icon
                  style={styles.progressIcon}
                />
                <Text style={styles.progressText}>3/100</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.statusText1}>
              יש לסיים את הלוח הקודם על מנת לשחק בלוח זה
            </Text>
          )}
        </View>

        {/* Display stickers if the board is opened */}
        {board.stickers.map((sticker, index) => (
          <Image key={index} source={sticker} style={getStickerStyle(index)} />
        ))}

        <TouchableOpacity
          style={[styles.roundButton, { backgroundColor: board.color }]}
          onPress={() => onPress(board)}
        >
          <Image
            source={
              board.opened
                ? require("../../../../assets/app/arrow.png")
                : require("../../../../assets/app/lock.png")
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

// Function to determine sticker position based on the index
const getStickerStyle = (index) => {
  const baseStyle = {
    width: 150, // Base width for stickers
    height: 150, // Base height for stickers
    position: "absolute", // Fix position
  };

  // Adjust position dynamically based on the index
  switch (index) {
    case 0:
      return {
        ...baseStyle,
        left: -29, // First sticker at 10px from the left
        bottom: 10, // Bottom position for consistency
        transform: [{ rotate: "-15deg" }],
      };
    case 1:
      return {
        ...baseStyle,
        left: 60, // Second sticker 100px to the right of the first
        top: 4,
        transform: [{ rotate: "-3deg" }],
      };
    case 2:
      return {
        ...baseStyle,
        left: 160, // Third sticker 100px to the right of the second
        top: 9,
        transform: [{ rotate: "12deg" }],
      };
    default:
      return baseStyle; // Default case if there are more stickers
  }
};

const styles = StyleSheet.create({
  boardContainer: {
    width: screenWidth * 0.9, // 90% of the screen width
    height: 200,
    backgroundColor: "#fff",
    marginVertical: 20,
    borderRadius: 8,
    overflow: "visible", // Allow the button to overflow outside the container
    alignSelf: "center", // Center the board horizontally
  },
  backgroundImage: {
    flex: 1, // Take up all the space in the container
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  },
  imageStyle: {
    borderRadius: 8, // Make sure the image follows the board's rounded corners
  },
  textContainer: {
    padding: 10,
    borderRadius: 8,
    alignItems: "flex-start", // Align text to the left
    width: "100%", // Full width for text container
    height: "100%", // Full height for text container
  },
  boardNumberContainer: {
    position: "absolute", // Position relative to the parent container
    top: 10, // Distance from the top
    right: 10, // Distance from the right
    paddingVertical: 5, // Vertical padding
    paddingHorizontal: 10, // Horizontal padding
    borderRadius: 20, // Slightly rounded corners
    borderWidth: 3, // Width of the white border
    borderColor: "#FFFFFF", // White border color
  },
  boardNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  titleContainer: {
    flexDirection: "row", // Align icon and text in a row
    alignItems: "center",
    marginTop: 10,
  },
  titleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  boardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  statusContainer: {
    position: "absolute",
    bottom: 12,
    right: 0,
    marginTop: 10,
  },
  statusText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  statusText1: {
    position: "absolute",
    bottom: 69,
    right: 1,

    width: 150,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  progressIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  progressText: {
    fontSize: 16,
    color: "#fff",
  },
  roundButton: {
    position: "absolute",
    bottom: -35, // Position it halfway outside the board (half of the button height)
    alignSelf: "center", // Center the button horizontally
    width: 70, // Button width
    height: 70, // Button height
    borderRadius: 35, // Rounded corners (half of the height for a perfect circle)
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
    borderWidth: 3, // Width of the white border
    borderColor: "#FFFFFF", // White border color
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Board;
