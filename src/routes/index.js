const API_URL = "http://192.168.197.231:3000/api"; // Replace with your actual base API URL

export const API_ENDPOINTS = {
  auth: {
    sendOtp: `${API_URL}/auth/register`,
    verifyOtp: `${API_URL}/auth/verify-otp`,
    // Add more authentication-related endpoints here
  },
  user: {
    getUser: `${API_URL}/users`,
    updateUser: `${API_URL}/users/updateUser`,
    // Add more user-related endpoints here
  },
  // Add more service categories as needed
};
