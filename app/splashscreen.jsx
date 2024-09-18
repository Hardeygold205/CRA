import { StyleSheet, View, ImageBackground, Dimensions, Text } from "react-native";
import React,  { useState } from "react";
import splash from "../assets/images/splash.png";

export default function SplashScreen() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageError = () => {
    console.error("failed to load image");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        onLoad={() => {
          setIsImageLoaded(true);
        }}
        onError={handleImageError}
        style={styles.image}
        source={splash}
      />
    </View>
  );
}


const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#228d5d",
  },
  image: {
    width: width * 1,
    height: width * 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
