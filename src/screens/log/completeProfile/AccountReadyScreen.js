import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import commonStyles from "../../../styles/commonStyles"; 

const AccountReadyScreen = ({ route, navigation }) => {
    const { firstName} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/profile/Frame 1000004489.png")} // Replace with your image path
        style={[
          commonStyles.fixedImage,
          {
            top: 100,
            left: "50%",
            transform: [{ translateX: -190 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Ellipse 7.png")}
        style={[commonStyles.fixedImage, { top: -3, right: 1 }]}
      />
      <Image
        source={require("../../../../assets/onboarding/Ellipse 8.png")}
        style={[commonStyles.fixedImage, { top: -9, right: -81 }]}
      />
      <Image
        source={require("../../../../assets/onboarding/Ellipse 2.png")}
        style={[commonStyles.fixedImage, { top: "17.5%", left: -10 }]}
      />
      <Image
        source={require("../../../../assets/onboarding/Ellipse 3.png")}
        style={[commonStyles.fixedImage, { top: "16.3%", left: -20 }]}
      />
      <Image
        source={require("../../../../assets/profile/g12 (1).png")}
        style={[
          commonStyles.fixedImage,
          {
            top: 180,
            left: "50%",
            transform: [{ translateX: -190 }],
            zIndex: 1,
          },
        ]}
      />

      <View style={styles.buttonContainer}>
        <Text style={styles.text}>
          היי {firstName}, כייף שהצטרפת{"\n"}הפרופיל שלך מוכן, אפשר כבר
          להתחיל...
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image source={require("../../../../assets/profile/primary2.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#31F091",
    padding: 20,
  },
  headerImage: {
    width: "100%", // Make image span the full width of the container
    height: 200, // Adjust height as needed
    marginBottom: 20, // Space between the image and title
    resizeMode: "contain", // Adjust to fit the image as needed
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
  },
  buttonContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Push the content to the bottom
    alignItems: "center", // Center the content horizontally
    marginBottom: 20, // Space from the bottom of the screen
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20, // Space between text and button
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default AccountReadyScreen;
