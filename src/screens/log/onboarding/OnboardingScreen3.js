import React, { useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import { Text } from "react-native-paper";
import commonStyles from "../../../styles/commonStyles"; // Import general styles
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const { width, height } = Dimensions.get("window");

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
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
          // console.log("Swipe right detect ed");
          // navigation.navigate("OnboardingScreen2");
        } else if (dx < -width / 2 && Math.abs(dy) < width / 2) {
          console.log("Swipe left detected");
          navigation.navigate("OnboardingScreen2");
        } else if (dy < -height / 2 && Math.abs(dx) < height / 2) {
          console.log("Swipe up detected");
          navigation.navigate("OnboardingScreen2");
        } else if (dy > height / 2 && Math.abs(dx) < height / 2) {
          console.log("Swipe down detected");
          navigation.navigate("OnboardingScreen2");
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
        style={[styles.centeredImage, { top: "16%", left: "50%" }]}
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
        source={require("../../../../assets/onboarding/Ellipse 7.png")}
        style={[commonStyles.fixedImage, { top: -8, right: 1 }]}
      />
      <Image
        source={require("../../../../assets/onboarding/Ellipse 8.png")}
        style={[commonStyles.fixedImage, { top: -19, right: -111 }]}
      />

      <Image
        source={require("../../../../assets/onboarding/Weather.png")}
        style={[
          styles.fixedImage,
          {
            top: "33%",
            left: "50%",
            transform: [{ translateX: -190 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (1).png")}
        style={[
          styles.fixedImage,
          {
            top: "43%",
            left: "50%",
            transform: [{ translateX: -180 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (2).png")}
        style={[
          styles.fixedImage,
          {
            top: "49%",
            left: "50%",
            transform: [{ translateX: -170 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (3).png")}
        style={[
          styles.fixedImage,
          {
            top: "39%",
            left: "50%",
            transform: [{ translateX: -120 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (4).png")}
        style={[
          styles.fixedImage,
          {
            top: "49%",
            left: "50%",
            transform: [{ translateX: -80 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (5).png")}
        style={[styles.fixedImage, { top: "32%", left: "50%", zIndex: 1 }]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (6).png")}
        style={[
          styles.fixedImage,
          {
            top: "34%",
            left: "50%",
            transform: [{ translateX: -50 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Weather (7).png")}
        style={[
          styles.fixedImage,
          {
            top: "43%",
            left: "50%",
            transform: [{ translateX: -20 }],
            zIndex: 1,
          },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/Frame 45191.png")}
        style={[
          {
            top: "65%",
            left: "50%",
            position: "absolute",
            transform: [{ translateX: -10 }],
          },
        ]}
      />
      <Text style={styles.fixedText}>
        ענו על שאלות בלוח המשחק ממשבצת 1, התקדמו במשבצות עד למשבצת 100. מילאתם
        את כל אלבום המדבקות? מעולה. תוכלו להתחיל למלא אלבום מדבקות נוסף. סקרנים?
        מתחילים
      </Text>

      <TouchableOpacity
        style={[
          styles.fixedImage,
          ,
          { bottom: "0%", left: "50%", transform: [{ translateX: -100 }] },
        ]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Image source={require("../../../../assets/onboarding/primary.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBox: {
    position: "absolute",
    top: "10%",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    padding: 10,
  },
  fixedImage: {
    position: "absolute",
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically centered
  },
  title: {
    fontFamily: "BreeSerif-Regular",
    fontSize: 36.67,
    color: "#000000",
    textAlign: "center",
  },
  smallImage: {
    width: 50, // Adjust the size as needed
    height: 50,
    resizeMode: "contain",
  },
  description: {
    position: "absolute",
    top: "40%", // Adjust as needed
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    zIndex: 1,
  },
  bottomCenterImage: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -75 }],
    width: 150,
    height: 150,
    resizeMode: "contain",
    zIndex: 1,
  },
  centeredImage: {
    position: "absolute",
    transform: [{ translateX: -120 }],
    zIndex: 1,
  },
  fixedText: {
    position: "absolute",
    bottom: "20%", // Adjust to position the text from the bottom
    left: "50%",
    width: 340,
    transform: [{ translateX: -170 }], // Adjust to center text horizontally
    textAlign: "center",
    color: "black", // Adjust text color if needed
    fontSize: 15, // Adjust text size if needed
    zIndex: 2, // Ensure text is above other content
  },
});

export default OnboardingScreen1;
