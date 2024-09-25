import { API_ENDPOINTS } from "../routes";
import { login } from "../store/slices/authSlice";
export const sendOtp = async (phoneNumber) => {
  try {
    const response = await fetch(API_ENDPOINTS.auth.sendOtp, {
      // Corrected endpoint usage
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get response text for more details
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    return data; // Adjust based on your backend's response
  } catch (error) {
    console.error("Error sending OTP:", error); // Log the error to the console
    throw new Error("Error sending OTP: " + error.message);
  }
};
export const verifyOtp = async (phoneNumber, otp, dispatch) => {
  try {
    const response = await fetch(API_ENDPOINTS.auth.verifyOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, otp }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();

    // Dispatch the login action with the received token and user data
    dispatch(login({ token: data.token, user: data.user }));

    return data; // Return the data as needed
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw new Error("Error verifying OTP: " + error.message);
  }
};
