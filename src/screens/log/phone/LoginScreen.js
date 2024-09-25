import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { sendOtp } from "../../../services/authService";
import commonStyles from "../../../styles/commonStyles";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+972"); // Default phone prefix
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async () => {
    if (isPhoneNumberValid) {
      const fullPhoneNumber = phonePrefix + phoneNumber;
      try {
        setLoading(true);
        await sendOtp(fullPhoneNumber);
        // Navigate to OtpScreen with the phone number as a parameter
        navigation.navigate("OtpScreen", { phoneNumber: fullPhoneNumber });
      } catch (error) {
        console.error(error.message);
        // Handle error (e.g., show an error message to the user)
      } finally {
        setLoading(false);
      }
    }
  };

  const isPhoneNumberValid = phoneNumber.length === 9; // Check if phone number is exactly 9 digits

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/log/Frame 45189.png")}
        style={[
          { marginBottom:100,marginTop:100 },
        ]}
      />
      <TouchableOpacity
        style={[
          commonStyles.fixedImage,
          {
            bottom: "1%",
            left: "50%",
            transform: [{ translateX: -165 }],
            opacity: isPhoneNumberValid ? 1 : 0.5,
          },
        ]}
        onPress={handleLogin}
        disabled={!isPhoneNumberValid || loading} // Disable the button if the phone number isn't valid or request is loading
      >
        <Image source={require("../../../../assets/log/primary.png")} />
      </TouchableOpacity>
      <View style={styles.boxContainer}>
        <Text style={styles.promptText}>הזינו את מספר הטלפון על מנת להכנס</Text>
        <View style={styles.center}>
          <View style={{ width: 350 }}>
            <Text style={styles.labelText}>מספר טלפון</Text>
            <View style={styles.innerInputContainer}>
              <Picker
                selectedValue={phonePrefix}
                style={styles.picker}
                onValueChange={(itemValue) => setPhonePrefix(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="+972" value="+972" />
                {/* Add more Picker.Item if needed */}
              </Picker>
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={(text) => {
                  if (text.length <= 9) {
                    setPhoneNumber(text); // Ensure it doesn't exceed 9 characters
                  }
                }}
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.termsTextTop}>
              בלחיצת כפתור שלחו לי קוד אימות, הנך מאשר/ת
            </Text>
            <Text style={styles.termsTextBottom}>את תנאי השימוש והפרטיות</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F3F8F4",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  promptText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 14,
    color: "#808080",
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  innerInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#90F6B1",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#6BCF8F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    height: 50,
    width: 120,
    borderWidth: 0,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
  },
  termsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  termsTextTop: {
    fontSize: 12,
    color: "#667085",
    textAlign: "center",
  },
  termsTextBottom: {
    fontSize: 12,
    color: "#31F091",
    textAlign: "center",
    marginTop: 5,
  },
});

export default LoginScreen;
