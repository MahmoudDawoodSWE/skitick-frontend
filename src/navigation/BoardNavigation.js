import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/home/HomePage";
import MenuPage from "../screens/menu/MenuPage"; 

const Stack = createStackNavigator();

const BoardNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoardMain"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={{ title: "Menu" }}
      />
    </Stack.Navigator>
  );
};

export default BoardNavigation;
