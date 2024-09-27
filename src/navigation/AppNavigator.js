import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import HomePage from "../screens/home/HomePage";
import ProfilePage from "../screens/profile/ProfilePage";
import AlbumPage from "../screens/album/AlbumPage";

import homeIcon from "../../assets/navigation/homeIcon.png";
import profileIcon from "../../assets/navigation/profileIcon.png";
import albumIcon from "../../assets/navigation/albumIcon.png";

import ClickedAlbumIcon from "../../assets/navigation/ClickedAlbumIcon.png";
import ClickedHomeIcon from "../../assets/navigation/ClickedHomeIcon.png";
import ClickedProfileIcon from "../../assets/navigation/ClickedProfileIcon.png";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconSource;

          // Select the correct icon based on the route
          if (route.name === "Home") {
            iconSource = focused ? ClickedHomeIcon : homeIcon;
          } else if (route.name === "Profile") {
            iconSource = focused ? ClickedProfileIcon : profileIcon;
          } else if (route.name === "Album") {
            iconSource = focused ? ClickedAlbumIcon : albumIcon;
          }

          // Return the Image component with a View to handle the background color change
          return (
            <View
              style={{
                backgroundColor: focused ? "lightgreen" : "transparent", // Background color change
                borderRadius: 25, // Rounded corners for icons
                paddingHorizontal: 30,
                paddingVertical: 12,
                alignItems: "center", // Center the icon horizontally
                justifyContent: "center", // Center the icon vertically
              }}
            >
              <Image
                source={iconSource}
                style={{ width: size, height: size }}
              />
            </View>
          );
        },
        tabBarActiveTintColor: "tomato", // Color of the label when active
        tabBarInactiveTintColor: "gray", // Color of the label when inactive
        tabBarStyle: {
          backgroundColor: "#fff", // Background color of the tab bar
          paddingHorizontal: 30,
          height: 75, // Adjust height for the added padding
          borderRadius: 70, // Rounded edges for the tab bar itself
          marginHorizontal: 10, // Margin on the sides (left and right)
          marginBottom: 10, // Margin at the bottom of the screen
          position: "absolute", // To make the tab bar float and show margin
          left: 10, // Distance from the left side of the screen
          right: 10, // Distance from the right side of the screen
          elevation: 10, // Shadow for Android devices
          shadowColor: "#000", // Shadow color for iOS
          shadowOpacity: 0.1, // Shadow opacity for iOS
          shadowRadius: 5, // Shadow radius for iOS
          shadowOffset: { width: 0, height: 5 }, // Shadow offset for iOS
        },
        tabBarShowLabel: false, // This will hide the label under the icons
        headerShown: false, // Hide header on all screens
      })}
    >
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Album" component={AlbumPage} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
