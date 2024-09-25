import * as Font from "expo-font";

export const fetchFonts = () => {
  return Font.loadAsync({
    "BreeSerif-Regular": require("../../assets/fonts/BreeSerif-Regular.ttf"),
  });
};
