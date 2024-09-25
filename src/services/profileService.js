import { Alert } from "react-native";
import { API_ENDPOINTS } from "../routes"; // Adjust import path as needed
export const updateProfile = async (userData, _id, token) => {
  try {
    const response = await fetch(API_ENDPOINTS.user.updateUser + "/" + _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Handle successful profile update
      const data = await response.json();
      console.log("Profile updated successfully:", data);
      return data; // Return the updated profile data if needed
    } else {
      const responseData = await response.json();
      // Handle profile update failure
      Alert.alert(
        "Error",
        responseData.error || "Failed to update profile. Please try again."
      );
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    Alert.alert(
      "Error",
      "An error occurred while updating profile. Please try again."
    );
  }
};

// export const updateProfile = async (userData, _id, token) => {
//   try {
//     const response = await fetch(API_ENDPOINTS.user.updateUser + "/" + _id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (response.ok) {
//       // Handle successful profile update
//       const data = await response.json();
//       console.log("Profile updated successfully:", data);
//       return data; // Return the updated profile data if needed
//     } else {
//       const responseData = await response.json();
//       // Handle profile update failure
//       Alert.alert(
//         "Error",
//         responseData.error || "Failed to update profile. Please try again."
//       );
//     }
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     Alert.alert(
//       "Error",
//       "An error occurred while updating profile. Please try again."
//     );
//   }
// };
