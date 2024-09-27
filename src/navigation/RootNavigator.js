import { useSelector } from "react-redux";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigator from "./OnboardingNavigator.js"; // Your Onboarding navigator
import AppNavigator from "./AppNavigator.js"; // Your Main app navigator
import { selectUser } from "../util/selectors.js";

const RootNavigator = () => {
  // Use the selector to check if the user is logged in
  const user = useSelector(selectUser);

  // Based on the user's authentication status, decide which navigator to render
  return (
    <NavigationContainer>
      {user?.auth ? <AppNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
