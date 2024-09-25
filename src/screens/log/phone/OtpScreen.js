import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { verifyOtp } from "../../../services/authService";
import { useDispatch } from "react-redux";

const OtpScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array for each OTP digit
  const inputRefs = useRef([]); // Reference for input fields
  const dispatch = useDispatch();

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move focus to the next cell if it's not the last one
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (key, index) => {
    if (key === "Backspace") {
      if (otp[index] === "") {
        // If the current cell is empty, move focus to the previous cell
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        // Clear the current cell's value
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);

        // Move the focus to the previous cell if possible
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  const handleSubmitOtp = async () => {
    const otpCode = otp.join("");

    try {
      const response = await verifyOtp(phoneNumber, otpCode, dispatch);

      if (response.message) {
        // Navigate to the CompleteProfileScreen if OTP is valid
        navigation.navigate("CompleteProfileScreen");
      } else {
        // Handle OTP verification failure
        Alert.alert(
          "Error",
          "Invalid OTP or OTP has expired. Please try again."
        );
      }
    } catch (error) {
      // Handle network or other errors
      Alert.alert("Error", error.message || "An unexpected error occurred.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/log/Frame 45189.png")}
        style={[
          styles.fixedImage,
          { top: "9%", left: "50%", transform: [{ translateX: -160 }] },
        ]}
      />

      <TouchableOpacity
        style={[
          styles.fixedImage,
          { bottom: "1%", left: "50%", transform: [{ translateX: -165 }] },
        ]}
        onPress={handleSubmitOtp}
      >
        <Image source={require("../../../../assets/log/primary1.png")} />
      </TouchableOpacity>

      <View style={styles.boxContainer}>
        <Text style={styles.promptText}>שלחנו לך קוד לאימות לטלפון</Text>
        <Text style={styles.labelText}>{phoneNumber} - הזן את הקוד שקיבלת</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)} // Reference for focusing
              style={styles.otpInput}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={({ nativeEvent }) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <View style={styles.optionContainer}>
          {/* Back arrow icon */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>{"<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => console.log("Not my phone")}
          >
            <Text style={styles.optionText}>לא הטלפון שלי</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => console.log("Didn't receive code")}
          >
            <Text style={styles.optionText}>לא קיבלתי קוד</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F8F4",
  },
  fixedImage: {
    position: "absolute",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
  },
  boxContainer: {
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 400,
  },
  promptText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  otpInput: {
    borderColor: "#90F6B1",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 40,
    height: 50,
    fontSize: 20,
    textAlign: "center",
    shadowColor: "#6BCF8F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 6,
  },
  optionContainer: {
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between the items
    alignItems: "center", // Vertically center the text
    width: "80%", // Adjust width as needed
  },
  optionItem: {
    flex: 1,
    alignItems: "center",
  },
  optionText: {
    fontSize: 14,
    color: "#808080",
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: "#000",
  },
});

export default OtpScreen;
