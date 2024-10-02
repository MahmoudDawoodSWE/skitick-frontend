import { useSelector } from "react-redux";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Import Stack
import OnboardingNavigator from "./OnboardingNavigator.js"; // Your Onboarding navigator
import AppNavigator from "./AppNavigator.js"; // Your Main app navigator
import BoardNavigation from "./BoardNavigation"; // Import your BoardNavigation
import { selectUser } from "../util/selectors.js";

const Stack = createStackNavigator(); // Create a stack navigator

const RootNavigator = () => {
  // Use the selector to check if the user is logged in
  const user = useSelector(selectUser);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.auth ? (
          <>
            <Stack.Screen name="App" component={AppNavigator} />
            <Stack.Screen name="Board" component={BoardNavigation} />
          </>
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
