import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    top: 50, // Adjust as needed
    color: "#fff", // Ensure the text is visible over the image
    fontSize: 24,
    textAlign: "center",
    zIndex: 1,
  },
  description: {
    position: "absolute",
    top: 100, // Adjust as needed
    color: "#fff", // Ensure the text is visible over the image
    fontSize: 16,
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    position: "absolute",
    bottom: 50, // Adjust as needed
    zIndex: 1,
  },
  fixedImage: {
    position: "absolute",
    resizeMode: "cover",
  },
});

export default commonStyles;
