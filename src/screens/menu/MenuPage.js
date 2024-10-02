import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

const MenuPage = ({ route }) => {
  // Array of objects for the first 6 questions, with a 'finished' Boolean property
  const firstSixQuestions = [
    { id: 1, label: "1", finished: true },
    { id: 2, label: "2", finished: true },
    { id: 3, label: "3", finished: true },
    { id: 4, label: "4", finished: false },
    { id: 5, label: "5", finished: false },
    { id: 6, label: "6", finished: false },
  ];

  // Function to generate the rest of the questions (7-100)
  const renderRemainingQuestions = () => {
    let questions = [];
    for (let i = 7; i <= 100; i++) {
      questions.push(
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Navigating to Question ${i} on Board`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return questions;
  };

  // Function to determine button style based on 'finished' status
  const getButtonStyle = (finished) => {
    return finished ? [styles.button, styles.buttonFinished] : styles.button;
  };

  const getButtonTextStyle = (finished) => {
    return finished
      ? [styles.buttonText, styles.buttonTextFinished]
      : styles.buttonText;
  };

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {/* Render the first 6 questions from the array */}
      {firstSixQuestions.map((question) => (
        <TouchableOpacity
          key={question.id}
          onPress={() => alert(`Navigating to Question ${question.label}`)}
          style={getButtonStyle(question.finished)}
        >
          <Text style={getButtonTextStyle(question.finished)}>
            {question.label}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Render the rest of the questions (7-100) */}
      {renderRemainingQuestions()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 30, // Set width to 30px
    height: 30, // Set height to 30px
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Default background color for the button
    margin: 8, // Margin around the button
    borderRadius: 4, // Optional: add some border radius
  },
  buttonFinished: {
    backgroundColor: "#1BE07E", // Background color when question is finished
  },
  buttonText: {
    color: "#667085", // Default text color
    fontSize: 12, // Optional: text size
    fontWeight: "700", // Set font weight to bold
  },
  buttonTextFinished: {
    color: "#FFFFFF", // Text color when question is finished
  },
});

export default MenuPage;
