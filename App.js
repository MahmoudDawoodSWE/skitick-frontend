import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import OnboardingNavigator from "./src/navigation/OnboardingNavigator"; // Adjust path as necessary
import { fetchFonts } from "./src/util/fetchFonts"; // Ensure fetchFonts returns a promise
import { Provider } from "react-redux";
import { store } from "./src/store";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await fetchFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    // Optionally return a loading indicator or an empty view while fonts are loading
    return null; // Or a spinner/loading indicator
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <OnboardingNavigator />
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
