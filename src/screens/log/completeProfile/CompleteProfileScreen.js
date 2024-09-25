import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { updateProfile } from "../../../services/profileService";
import { selectToken, selectUser } from "../../../util/selectors";
import { useSelector } from "react-redux";
const CompleteProfileScreen = ({ navigation }) => {
  // State variables for user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  // Get user and token from Redux state
  const { _id } = useSelector(selectUser);
  const token = useSelector(selectToken);

  // Classes list
  const classes = ["י", "ט", "ח", "ז", "ו", "ה", "ד", "ג"];

  const handleSubmit = async () => {
    try {
      const userData = {
        firstname: firstName,
        lastname: lastName,
        class: selectedClass, // Adjust this field name as per your backend schema
      };

      const updatedProfile = await updateProfile(userData, _id, token);

      if (updatedProfile) {
        // Navigate to the Account Ready Screen
        navigation.navigate("AccountReadyScreen", {
          firstName,
          lastName,
          selectedClass,
        });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to update profile. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/profile/Frame 45189.png")}
        style={styles.upperImage}
      />

      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../../../assets/profile/profıle001.png")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.innerInputContainer}>
          <Text style={styles.label}>שם פרטי</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.innerInputContainer}>
          <Text style={styles.label}>שם משפחה</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.innerInputContainer}>
          <Text style={styles.label}>הכיתה שלך</Text>
          <View style={styles.classContainer}>
            {classes.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.classItem,
                  selectedClass === item && styles.selectedClassItem, // Highlight selected item
                ]}
                onPress={() => setSelectedClass(item)}
              >
                <Text style={styles.classText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Image source={require("../../../../assets/profile/primary.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8F4",
    padding: 20,
    justifyContent: "space-between",
  },
  upperImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  inputContainer: {
    alignItems: "center", // Centers the input container horizontally
    justifyContent: "center", // Centers content vertically (if needed)
  },
  innerInputContainer: {
    minWidth: 300, // Minimum width
    maxWidth: 400, // Maximum width
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: "#90F6B1",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    shadowColor: "#6BCF8F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  classContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping to multiple lines if needed
    justifyContent: "space-between", // Adjusted to use available space
    backgroundColor: "#fff",
    borderColor: "#90F6B1",
    borderWidth: 1,
    borderRadius: 8,
  },
  classItem: {
    flex: 1, // Make each item take up equal space
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "#90F6B1",
    borderWidth: 1,
  },
  selectedClassItem: {
    backgroundColor: "#90F6B1",
  },
  classText: {
    fontSize: 16,
  },
  submitButton: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default CompleteProfileScreen;
