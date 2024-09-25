import React, { useRef } from "react";
import {
  StyleSheet,
  PanResponder,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import commonStyles from "../../../styles/commonStyles"; // Adjust the path accordingly
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const buttonRef = useRef(null);

  // Define panResponder inside the component function to ensure it has access to width and height
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Check if touch is within button area, return false if it is
        const { pageX, pageY } = evt.nativeEvent;
        const buttonArea = {
          x: width / 2 - 75, // Centered button
          y: height - 160, // Adjust according to your buttonWrapper position
          width: 150,
          height: 150,
        };

        if (
          pageX >= buttonArea.x &&
          pageX <= buttonArea.x + buttonArea.width &&
          pageY >= buttonArea.y &&
          pageY <= buttonArea.y + buttonArea.height
        ) {
          return false; // Do not handle pan events if within button area
        }

        return true; // Handle pan events otherwise
      },
      onPanResponderRelease: (evt, gestureState) => {
        const { dx, dy } = gestureState;

        // Debug logging
        console.log("Swipe detected:", { dx, dy });

        // Swipe detection code
        if (dx > width / 2 && Math.abs(dy) < width / 2) {
          console.log("Swipe right detected");
          navigation.navigate("OnboardingScreen3");
        } else if (dx < -width / 2 && Math.abs(dy) < width / 2) {
          console.log("Swipe left detected");
          navigation.navigate("OnboardingScreen1");
        } else if (dy < -height / 2 && Math.abs(dx) < height / 2) {
          console.log("Swipe up detected");
          navigation.navigate("OnboardingScreen3");
        } else if (dy > height / 2 && Math.abs(dx) < height / 2) {
          console.log("Swipe down detected");
          navigation.navigate("OnboardingScreen3");
        }
      },
    })
  ).current;

  return (
    <View style={commonStyles.container} {...panResponder.panHandlers}>
      <Image
        source={require("../../../../assets/onboarding/onboarding1.png")}
        style={commonStyles.image}
      />
      <Image
        source={require("../../../../assets/onboarding/Group 45190.png")}
        style={[styles.centeredImage, { top: "20%", left: "50%" }]}
      />
      <Image
        source={require("../../../../assets/onboarding/g12.png")}
        style={[styles.centeredImage, { top: "35%", left: "50%" }]}
      />

      <Image
        source={require("../../../../assets/onboarding/Frame 45190.png")}
        style={[
          {
            top: "65%",
            left: "50%",
            position: "absolute",
            transform: [{ translateX: -20 }],
          },
        ]}
      />
      <Text style={styles.fixedText}>
        משחק מאתגר, מהנה וחווייתי לפיתוח מיומנויות למידה
      </Text>

      <TouchableOpacity
        style={[
          commonStyles.fixedImage,
          ,
          { bottom: "0%", left: "50%", transform: [{ translateX: -100 }] },
        ]}
        onPress={() => navigation.navigate("OnboardingScreen3")}
      >
        <Image source={require("../../../../assets/onboarding/primary.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredImage: {
    position: "absolute",
    transform: [{ translateX: -120 }],
    zIndex: 1,
  },
 
  fixedText: {
    position: "absolute",
    bottom: "20%", // Adjust to position the text from the bottom
    left: "50%",
    width: 300,
    transform: [{ translateX: -150 }], // Adjust to center text horizontally
    textAlign: "center",
    color: "black", // Adjust text color if needed
    fontSize: 20, // Adjust text size if needed
    zIndex: 2, // Ensure text is above other content
  },
});

export default OnboardingScreen1;
