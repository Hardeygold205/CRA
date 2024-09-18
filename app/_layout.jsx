import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Asset } from "expo-asset";

SplashScreen.preventAutoHideAsync();

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const loadResources = async () => {
  const imageAssets = cacheImages([
    require("../assets/images/splash.png"),
    require("../assets/images/background2.png"),
    require("../assets/images/light.png"),
    require("../assets/images/icon.png"),
  ]);
  await Promise.all([...imageAssets]);
};

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await loadResources();
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      } catch (err) {
        console.warn(err);
      }
    };

    if (fontsLoaded) {
      prepareResources();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="driver-rider-choice"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="driver/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="rider/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/driverauth" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/riderauth" options={{ headerShown: false }} />
      <Stack.Screen name="onboardscreen" options={{ headerShown: false }} />
    </Stack>
  );
}
