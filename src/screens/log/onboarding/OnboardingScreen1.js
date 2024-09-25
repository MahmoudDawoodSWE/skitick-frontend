import React, { useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Text } from "react-native-paper";
import commonStyles from "../../../styles/commonStyles";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { selectUser } from "../../../util/selectors";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const buttonRef = useRef(null); // Create a ref for the button
  console.log(useSelector(selectUser));
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
          navigation.navigate("OnboardingScreen2");
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

  // Use ref to measure the button dimensions (for debugging purposes)
  const handleButtonRef = (node) => {
    buttonRef.current = node;
    if (node) {
      node.measure((x, y, width, height, pageX, pageY) => {
        console.log("Button dimensions:", {
          x,
          y,
          width,
          height,
          pageX,
          pageY,
        });
      });
    }
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Image
        source={require("../../../../assets/onboarding/onboarding1.png")}
        style={commonStyles.image}
      />
      <Image
        source={require("../../../../assets/onboarding/Mask group.png")}
        style={[
          commonStyles.fixedImage,
          {
            top: "37%",
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
        source={require("../../../../assets/onboarding/Vector 10.png")}
        style={[
          commonStyles.fixedImage,
          { top: "35%", left: "50%", transform: [{ translateX: -350 }] },
        ]}
      />
      <Image
        source={require("../../../../assets/onboarding/001---Atomic-Sign.png")}
        style={[
          commonStyles.fixedImage,
          {
            top: "28%",
            left: "69%",
            transform: [{ rotate: "45deg" }],
          },
        ]}
      />
      <View style={styles.topBox}>
        <View style={styles.row}>
          <Image
            source={require("../../../../assets/onboarding/small-logo.png")}
            style={styles.smallImage}
          />
          <Text style={styles.title}>SKITICK</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          ref={handleButtonRef} // Attach the ref here
          style={styles.bottomCenterImage}
          onPress={() => navigation.navigate("OnboardingScreen2")}
        >
          <Image
            source={require("../../../../assets/onboarding/Group 45162.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "BreeSerif-Regular",
    fontSize: 36.67,
    color: "#000000",
    textAlign: "center",
  },
  smallImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  bottomCenterImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    zIndex: 3,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -75 }],
    zIndex: 2,
  },
});

export default OnboardingScreen1;
