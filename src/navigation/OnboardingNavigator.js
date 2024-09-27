import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen1 from "../screens/log/onboarding/OnboardingScreen1";
import OnboardingScreen2 from "../screens/log/onboarding/OnboardingScreen2";
import OnboardingScreen3 from "../screens/log/onboarding/OnboardingScreen3";
import LoginScreen from "../screens/log/phone/LoginScreen";
import OtpScreen from "../screens/log/phone/OtpScreen";
import CompleteProfileScreen from "../screens/log/completeProfile/CompleteProfileScreen";
import AccountReadyScreen from "../screens/log/completeProfile/AccountReadyScreen";

const Stack = createStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
      <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen
        name="CompleteProfileScreen"
        component={CompleteProfileScreen}
      />
      <Stack.Screen name="AccountReadyScreen" component={AccountReadyScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
